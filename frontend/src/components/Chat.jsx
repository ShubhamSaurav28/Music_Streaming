import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../DB';

const Chat = ({ streamId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/messages/${streamId}`);
      setMessages(response.data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [streamId]);

  const sendMessage = async () => {
    if (message.trim()) {
      try {
        await axios.post(`${baseURL}/api/messages/send`, { text: message, sender: 'User', streamId });
        setMessage('');
        fetchMessages();
      } catch (err) {
        console.error('Error sending message:', err);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto my-4 p-4 border border-black rounded-lg shadow-lg">
      <div className="h-96 overflow-y-auto p-2 bg-gray-100 border border-gray-200 rounded-lg mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 bg-white rounded-lg shadow-sm">
            <strong className="text-blue-500">{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
