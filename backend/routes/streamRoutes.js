const express = require('express');
const app = express();
const Stream = require('../models/Stream');

app.post('/api/streams/create', async (req, res) => {
    const { title, description, peerId } = req.body;
    try {
      const newStream = new Stream({
        title,
        description,
        peerId
      });
      await newStream.save();
      res.status(201).json(newStream);
    } catch (error) {
      console.error('Error creating stream:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/api/streams', async (req, res) => {
  const { title, description, peerId } = req.body;

  if (!title || !peerId) {
    return res.status(400).json({ error: 'Title and Peer ID are required.' });
  }

  try {
    const newStream = new Stream({
      streamId: generateStreamId(), 
      title,
      description,
      peerId
    });

    const savedStream = await newStream.save();
    return res.status(201).json(savedStream);
  } catch (error) {
    console.error('Error creating stream:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/streams', async (req, res) => {
  try {
    const streams = await Stream.find();
    return res.status(200).json(streams);
  } catch (error) {
    console.error('Error fetching streams:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/streams/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const stream = await Stream.findById(id);
    if (!stream) {
      return res.status(404).json({ error: 'Stream not found' });
    }
    return res.status(200).json(stream);
  } catch (error) {
    console.error('Error fetching stream:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/streams/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, peerId } = req.body;

  try {
    const updatedStream = await Stream.findByIdAndUpdate(id, { title, description, peerId }, { new: true });
    if (!updatedStream) {
      return res.status(404).json({ error: 'Stream not found' });
    }
    return res.status(200).json(updatedStream);
  } catch (error) {
    console.error('Error updating stream:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/streams/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStream = await Stream.findByIdAndDelete(id);
    if (!deletedStream) {
      return res.status(404).json({ error: 'Stream not found' });
    }
    return res.status(200).json({ message: 'Stream deleted successfully' });
  } catch (error) {
    console.error('Error deleting stream:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const generateStreamId = () => {
  return 'stream-' + Date.now() + '-' + Math.random().toString(36).substring(2, 15);
};

module.exports = app;
