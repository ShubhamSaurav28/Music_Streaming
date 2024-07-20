import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../DB';
import { Link } from 'react-router-dom';

const AllStreams = () => {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/streams`);
        setStreams(response.data);
      } catch (err) {
        setError('Error fetching streams');
        console.error('Error fetching streams:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <h1 className="text-3xl font-bold mb-6">All Streams</h1>
      <ul>
        {streams.map((stream) => (
          <li key={stream._id} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-md">
            <Link to={`/stream/${stream._id}`} className="text-xl font-semibold text-blue-600 hover:underline">
              {stream.title}
            </Link>
            <p className="mt-2 text-gray-600">{stream.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStreams;
