const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    admin_id: { type: Number, required: true },
    adminName: { type: String, required: true },
    adminEmail: { type: String, required: true },
    adminContact: { type: Number, required: true }
});

module.exports = mongoose.model("Admin", AdminSchema);