const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  timestamp: { type: Date },
  event_type: { type: String },
  username: { type: String },
  source_ip: { type: String },
  destination_ip: { type: String },
  details: { type: String },
});

module.exports = mongoose.model("logs", logSchema, "logs");
