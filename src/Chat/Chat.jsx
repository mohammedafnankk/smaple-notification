import React, { useEffect, useRef, useState } from 'react';
import { useChatSocket } from '../hooks/useChatSocket';
const Chat = ({userId, conversationId,receiverId}) => {
    const [text, setText] = useState("");
     const { messages, typing, sendMessage, sendTyping } = useChatSocket(
    userId,
    conversationId,
    receiverId
  );

//   console.log("====",userId,conversationId,receiverId,"====");
  
  const chatEndRef = useRef(null);
 useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);
  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
    console.log(messages,"===mm");
    
  };
    return (
     <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="px-4 py-3 bg-white shadow flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <h2 className="font-semibold text-gray-800">Chat</h2>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((msg,i) => (
          <div
            key={msg.id || i}
            className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
              msg.sender_id === userId
                ? "ml-auto bg-blue-500 text-white rounded-br-none"
                : "mr-auto bg-white text-gray-800 border rounded-bl-none"
            }`}
          >
            {msg.message}
          </div>
        ))}

        {typing && (
          <p className="text-xs text-gray-500 italic animate-pulse">
            Typing…
          </p>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3 bg-white flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={sendTyping}
          placeholder="Type a message…"
          className="flex-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSend}
          className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
