const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const encrypt = require("mongoose-encrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

//Schemas 
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
    eventDesc: { type: String, required: true }
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
    Interest: { type: Boolean, required: true }
}, { timestamps: true });


//encryption
const secret = "superSecretKey123";
StudentSchema.plugin(encrypt, { secret, paths: ["studentEmail", "studentContact"] });

const RegistrationSchema = new mongoose.Schema({
    student_id: { type: Number, ref: "Student", required: true },
    event_id: { type: Number, ref: "Event", required: true },
    lead_count: { type: Number, default: 0 },
    conv_count: { type: Number, default: 0 },
    intr_count: { type: Number, default: 0 }
}, { timestamps: true });

RegistrationSchema.index({ student_id: 1, event_id: 1 }, { unique: true });

//Models
const Admin = mongoose.model("Admin", AdminSchema);
const Event = mongoose.model("Event", EventSchema);
const Student = mongoose.model("Student", StudentSchema);
const Registration = mongoose.model("Registration", RegistrationSchema);

//Express App
const app = express();
app.use(cors());
app.use(express.json());

// ---- MongoDB connection ----
const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb+srv://admin:adminpass@outreach-cluster2.tovxjtw.mongodb.net/?retryWrites=true&w=majority&appName=outreach-cluster2";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => {
        console.error("Mongo connection error:", err.message);
        process.exit(1);
    });

//Helpers
const toNum = (v) => {
    const n = Number(v);
    return Number.isNaN(n) ? null : n;
};

//CRUD: Admin
app.post("/admins", async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.json(admin);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get("/admins", async (_req, res) => {
    const admins = await Admin.find();
    res.json(admins);
});

app.get("/admins/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const admin = await Admin.findOne({ admin_id: id });
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json(admin);
});

app.put("/admins/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const admin = await Admin.findOneAndUpdate({ admin_id: id }, req.body, { new: true });
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json(admin);
});

app.delete("/admins/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const result = await Admin.deleteOne({ admin_id: id });
    res.json(result);
});

//CRUD: Event
app.post("/events", async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.json(event);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get("/events", async (_req, res) => {
    const events = await Event.find();
    res.json(events);
});

app.get("/events/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const event = await Event.findOne({ event_id: id });
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
});

app.put("/events/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const event = await Event.findOneAndUpdate({ event_id: id }, req.body, { new: true });
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
});

app.delete("/events/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const result = await Event.deleteOne({ event_id: id });
    res.json(result);
});

//Leads for a specific event (via Registration)
app.get("/events/:eventId/leads", async (req, res) => {
    const eventId = toNum(req.params.eventId);
    const event = await Event.findOne({ event_id: eventId });
    if (!event) return res.status(404).json({ error: "Event not found" });

    const regs = await Registration.find({ event_id: eventId });
    const studentIds = regs.map(r => r.student_id);
    const students = await Student.find({ student_id: { $in: studentIds } });

    const byId = new Map(students.map(s => [s.student_id, s]));
    const leads = regs.map(r => ({
        event_id: r.event_id,
        student_id: r.student_id,
        lead_count: r.lead_count,
        conv_count: r.conv_count,
        intr_count: r.intr_count,
        student: byId.get(r.student_id) || null
    }));

    res.json({ event, leads });
});

//Export leads as CSV for a specific event
app.get("/events/:eventId/leads/export", async (req, res) => {
    const eventId = toNum(req.params.eventId);
    const event = await Event.findOne({ event_id: eventId });
    if (!event) return res.status(404).json({ error: "Event not found" });

    const regs = await Registration.find({ event_id: eventId });
    if (!regs.length) return res.status(404).json({ error: "No registrations found" });

    const studentIds = regs.map(r => r.student_id);
    const students = await Student.find({ student_id: { $in: studentIds } });
    const byId = new Map(students.map(s => [s.student_id, s]));

    const header = [
        "studentName",
        "studentEmail",
        "studentContact",
        "studentCollege",
        "studentYear",
        "studentField",
        "studentStatus",
        "Interest",
        "lead_count",
        "conv_count",
        "intr_count",
    ];

    const rows = [header.join(",")];
    for (const r of regs) {
        const s = byId.get(r.student_id);
        const row = [
            s?.studentName ?? "",
            s?.studentEmail ?? "",
            s?.studentContact ?? "",
            s?.studentCollege ?? "",
            s?.studentYear ?? "",
            s?.studentField ?? "",
            s?.studentStatus ?? "",
            s?.Interest ?? "",
            r.lead_count ?? 0,
            r.conv_count ?? 0,
            r.intr_count ?? 0,
        ]
            .map(v => typeof v === "string" ? `"${v.replace(/"/g, '""')}"` : v) // CSV-escape strings
            .join(",");
        rows.push(row);
    }

    const csv = rows.join("\n");
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename=leads_${eventId}.csv`);
    res.send(csv);
});

//CRUD: Student
app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.json(student);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get("/students", async (_req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.get("/students/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const student = await Student.findOne({ student_id: id });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
});

app.put("/students/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const student = await Student.findOneAndUpdate({ student_id: id }, req.body, { new: true });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
});

app.delete("/students/:id", async (req, res) => {
    const id = toNum(req.params.id);
    const result = await Student.deleteOne({ student_id: id });
    res.json(result);
});

//CRUD: Registration
app.post("/registrations", async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.json(registration);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/registrations", async (_req, res) => {
    const registrations = await Registration.find();
    res.json(registrations);
});

app.get("/registrations/:id", async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) return res.status(404).json({ error: "Registration not found" });
        res.json(registration);
    } catch (e) {
        res.status(400).json({ error: "Invalid registration id" });
    }
});

app.put("/registrations/:id", async (req, res) => {
    try {
        const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registration) return res.status(404).json({ error: "Registration not found" });
        res.json(registration);
    } catch (e) {
        res.status(400).json({ error: "Invalid registration id" });
    }
});

app.delete("/registrations/:id", async (req, res) => {
    try {
        const result = await Registration.findByIdAndDelete(req.params.id);
        res.json(result);
    } catch (e) {
        res.status(400).json({ error: "Invalid registration id" });
    }
});

//Email functionality
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "email@gmail.com",
        pass: "your_app_password"
    }
});

// API to check user interest and send email
app.get("/api/send/:studentId", async (req, res) => {
    try {
        const { studentId } = req.params;
        // Find student by custom student_id field
        const user = await Student.findOne({ student_id: Number(studentId) });

        if (!user) return res.status(404).send("User not found");

        // Check if Interest is true
        if (user.Interest) {
            await transporter.sendMail({
                from: "email@gmail.com",
                to: user.studentEmail,
                subject: "We noticed you're interested!",
                text: `Hi ${user.studentName}, thanks for showing interest.`
            });

            return res.send("Email sent successfully");
        } else {
            return res.send("User not interested");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error processing request");
    }
});

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});