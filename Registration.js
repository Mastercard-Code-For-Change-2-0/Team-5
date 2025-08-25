const RegistrationSchema = new mongoose.Schema({
    student_id: { type: Number, ref: "Student", required: true },
    event_id: { type: Number, ref: "Event", required: true },
    lead_count: { type: Number, default: 0 },
    conv_count: { type: Number, default: 0 },
    intr_count: { type: Number, default: 0 }
});

//Unique combination of student + event
RegistrationSchema.index({ student_id: 1, event_id: 1 }, { unique: true });

module.exports = mongoose.model("Registration", RegistrationSchema);