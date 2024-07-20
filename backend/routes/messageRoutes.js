const express = require('express');
const app = express();
const Message = require('../models/Message');

// Get all messages for a specific stream
app.get('/:streamId', async (req, res) => {
  try {
    const messages = await Message.find({ streamId: req.params.streamId });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post a new message
app.post('/send', async (req, res) => {
  const { text, sender, streamId } = req.body;
  const message = new Message({ text, sender, streamId });
  
  try {
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app;
