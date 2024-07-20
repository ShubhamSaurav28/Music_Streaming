import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../DB';
import { AppState } from '../context/UserContext';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user } = AppState();

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/messages`);
      console.log(response) // Ensure this URL is correct
      setMessages(response.data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };


  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const sendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await axios.post(`${baseURL}/api/send`, { text: message, sender: user.username });
        console.log(response);
        setMessage('');
        fetchMessages();
      } catch (err) {
        console.error('Error sending message:', err);
      }
    }
  };

  return (
    <div className="w-[40%] mx-auto p-4 border border-gray-300 rounded-lg shadow-lg h-[80vh] mt-[100px]">
      <div className="h-[65vh] overflow-y-auto p-2 bg-gray-100 border border-gray-200 rounded-lg mb-4">
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
