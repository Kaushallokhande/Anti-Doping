import React, { useState, useEffect } from 'react';
import Chatpage from './Chatpage';
import ChatInput from './ChatInput';

const ChatApp = () => {
  const [chats, setChats] = useState([{ role: "model", content: "How can I help you?" }]);
  const [loading, setLoading] = useState(false);

  const fetchChats = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://chat-server-tnon.onrender.com/history/user123');
      const data = await response.json();
      setChats(data.messages);
    } catch (error) {
      console.log('Error fetching chats', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <Chatpage chats={chats} loading={loading} />
      <ChatInput fetchChats={fetchChats} setLoading={setLoading} />
    </div>
  );
};

export default ChatApp;
