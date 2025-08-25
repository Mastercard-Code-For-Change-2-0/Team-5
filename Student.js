const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    student_id: { type: Number, required: true },
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    studentContact: { type: Number, required: true },
    studentCollege: { type: String, required: true },
    studentYear: { type: Number, required: true },
    studentField: { type: String, required: true },
    studentStatus: { type: String, required: true },
    Interest: { type: Boolean, required: true }
});

//Encrypt sensitive fields
const secret = "superSecretKey123";  // store in ENV in real projects
StudentSchema.plugin(encrypt, { secret: secret, encryptedFields: ["studentEmail", "studentContact"] });

module.exports = mongoose.model("Student", StudentSchema);