import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../DB';
import Chat from '../components/Chat';

const StreamPage = () => {
  const { id } = useParams(); // Gets the stream ID from URL
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/streams/${id}`);
        setStream(response.data);
      } catch (error) {
        console.error('Error fetching stream:', error);
      }
    };

    fetchStream();
  }, [id]);

  if (!stream) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{stream.title}</h1>
      <video
        src={stream.streamUrl}
        controls
        className="w-full h-auto mb-4"
        // Add other video attributes or components for live streaming here
      />
      <p>{stream.description}</p>
      <Chat streamId={id} />
    </div>
  );
};

export default StreamPage;
