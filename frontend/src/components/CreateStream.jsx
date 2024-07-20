import React, { useState } from 'react';
import axios from 'axios';
import { generatePeerId } from '../utils/peerHelper';
import baseURL from '../../DB';

const CreateStream = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [peerId, setPeerId] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPeerId = await generatePeerId();

      const response = await axios.post(`${baseURL}/api/streams/create`, { title, description, peerId: newPeerId });
      console.log(response);
      setTitle('');
      setDescription('');
      setPeerId('');
      setError(null);
      alert('Stream created successfully!');
    } catch (error) {
      setError('Failed to create stream');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4 mt-[100px]">
      <h1 className="text-3xl font-bold mb-4">Create a New Stream</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Stream
        </button>
      </form>
    </div>
  );
};

export default CreateStream;
