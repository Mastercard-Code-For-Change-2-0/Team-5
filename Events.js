const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    event_id: { type: Number, required: true },
    eventName: { type: String, required: true },
    eventStart: { type: Date, required: true },
    eventEnd: { type: Date, required: true },
    eventDesc: { type: String, required: true }
});

module.exports = mongoose.model("Event", EventSchema);