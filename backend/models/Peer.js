const mongoose = require('mongoose');

const peerSchema = new mongoose.Schema({
  peerId: { type: String, required: true },
  streamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stream', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  connectedAt: { type: Date, default: Date.now },
});

const Peer = mongoose.model('Peer', peerSchema);

module.exports = Peer;
