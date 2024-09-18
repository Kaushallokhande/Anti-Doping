import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './Chatpage.css'; // Ensure this file has styles for ChatInput

const ChatInput = ({ fetchChats, setLoading }) => {
  const [prompt, setPrompt] = useState('');
  const userId = "user123";

  const handleClick = async () => {
    if (prompt.trim()) {
      try {
        setLoading(true);
        const response = await fetch('https://chat-server-tnon.onrender.com/chat', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            userId, 
            prompt, 
            timestamp: new Date().toISOString()
          }),
        });
        const data = await response.json();
        console.log(data);
        await fetchChats(); 
      } catch (error) {
        console.log('Error sending chat message', error);
      } finally {
        setLoading(false);
        setPrompt(''); // Clear input after sending
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        className="chat-input"
        placeholder="Type a message..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="send-button" onClick={handleClick}>
        <FiSend />
      </button>
    </div>
  );
};

export default ChatInput;
