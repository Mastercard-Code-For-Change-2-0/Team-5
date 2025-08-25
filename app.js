const express = require("express");
const serverRoutes = require("./server");
const mongoose = require("mongoose");
const cors = require("cors");
const encrypt = require("mongoose-encrypt");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const QRCode = require("qrcode");
require("dotenv").config();

const AdminSchema = new mongoose.Schema({
  admin_id: { type: Number, required: true, unique: true },
  adminName: { type: String, required: true },
  adminEmail: { type: String, required: true },
  adminContact: { type: String, required: true },
}, { timestamps: true });

const EventSchema = new mongoose.Schema({
  event_id: { type: Number, required: true, unique: true },
  eventName: { type: String, required: true },
  eventStart: { type: Date, required: true },
  eventEnd: { type: Date, required: true },
  eventDesc: { type: String, required: true },
}, { timestamps: true });

const StudentSchema = new mongoose.Schema({
  student_id: { type: Number, required: true, unique: true },
  studentName: { type: String, required: true },
  studentEmail: { type: String, required: true },
  studentContact: { type: String, required: true },
  studentCollege: { type: String, required: true },
  studentYear: { type: Number, required: true },
  studentField: { type: String, required: true },
  studentStatus: { type: String, required: true },
  Interest: { type: Boolean, required: true },
  uniqueToken: { type: String, unique: true }
}, { timestamps: true });

const secret = "superSecretKey123";
StudentSchema.plugin(encrypt, { secret, paths: ["studentEmail", "studentContact"] });

const RegistrationSchema = new mongoose.Schema({
  student_id: { type: Number, ref: "Student", required: true },
  event_id: { type: Number, ref: "Event", required: true },
  lead_count: { type: Number, default: 0 },
  conv_count: { type: Number, default: 0 },
  intr_count: { type: Number, default: 0 },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

RegistrationSchema.index({ student_id: 1, event_id: 1 }, { unique: true });

const Admin = mongoose.model("Admin", AdminSchema);
const Event = mongoose.model("Event", EventSchema);
const Student = mongoose.model("Student", StudentSchema);
const Registration = mongoose.model("Registration", RegistrationSchema);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", serverRoutes);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/outreach";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ Mongo connection error:", err.message);
    process.exit(1);
  });

const toNum = (v) => {
  const n = Number(v);
  return Number.isNaN(n) ? null : n;
};

app.get("/api/qr/:studentId/:eventId", async (req, res) => {
  try {
    const { studentId, eventId } = req.params;
    const student = await Student.findOne({ student_id: toNum(studentId) });
    if (!student) return res.status(404).json({ error: "Student not found" });

    if (!student.uniqueToken) {
      student.uniqueToken = crypto.randomBytes(16).toString("hex");
      await student.save();
    }

    const qrData = `${process.env.BACKEND_URL || "http://localhost:3000"}/api/verify/${student.uniqueToken}/${eventId}`;
    const qrCodeImage = await QRCode.toDataURL(qrData);

    res.json({ qrCode: qrCodeImage, link: qrData });
  } catch (err) {
    console.error("QR error:", err.message);
    res.status(500).json({ error: "QR generation failed" });
  }
});

app.get("/api/verify/:uniqueToken/:eventId", async (req, res) => {
  try {
    const { uniqueToken, eventId } = req.params;
    const student = await Student.findOne({ uniqueToken });
    if (!student) return res.status(404).json({ error: "Invalid QR token" });

    const registration = await Registration.findOneAndUpdate(
      { student_id: student.student_id, event_id: toNum(eventId) },
      { $set: { completed: true, conv_count: 1 } },
      { new: true }
    );

    if (!registration) {
      return res.status(404).json({ error: "Student not registered for this event" });
    }

    res.json({ message: " Attendance marked", student, registration });
  } catch (err) {
    console.error("Verify error:", err.message);
    res.status(500).json({ error: "Verification failed" });
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your_email@gmail.com",
    pass: process.env.EMAIL_PASS || "your_app_password",
  },
});

app.post("/events/:eventId/send-feedback", async (req, res) => {
  try {
    const eventId = toNum(req.params.eventId);
    const event = await Event.findOne({ event_id: eventId });
    if (!event) return res.status(404).json({ error: "Event not found" });

    const completedRegs = await Registration.find({ event_id: eventId, completed: true });

    for (const reg of completedRegs) {
      const student = await Student.findOne({ student_id: reg.student_id });
      if (!student || !student.studentEmail) continue;

      const feedbackUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/feedback/${student.uniqueToken}`;
      const qrCodeImage = await QRCode.toDataURL(feedbackUrl);

      const emailHtml = `
        <p>Hi ${student.studentName},</p>
        <p>Thanks for attending <strong>${event.eventName}</strong>!</p>
        <p>Please scan the QR code or click below to share your feedback.</p>
        <img src="${qrCodeImage}" alt="QR Code" />
        <br/><a href="${feedbackUrl}">Feedback Form</a>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: student.studentEmail,
        subject: `Feedback for ${event.eventName}`,
        html: emailHtml,
      });
    }

    res.json({ message: `Emails sent to ${completedRegs.length} attendees` });
  } catch (err) {
    console.error("Email error:", err.message);
    res.status(500).json({ error: "Email sending failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
