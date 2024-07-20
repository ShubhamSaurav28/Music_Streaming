const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  peerId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Stream = mongoose.model('Stream', streamSchema);

module.exports = Stream;
