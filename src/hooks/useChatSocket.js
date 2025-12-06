// src/hooks/useChatSocket.ts
import { useEffect, useRef, useState } from "react";
import { socket } from "../socket";
import axios from "axios";



export const useChatSocket = (userId, conversationId, receiverId) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const typingTimeoutRef = useRef(null);
  const token = localStorage.getItem("token")

  //load old messages
  useEffect(()=>{
    if(!conversationId) return;
    axios.get(`https://staging-api.paadha.com/api/conversation/${conversationId}/messages`,{ headers: { Authorization: `Bearer ${token}` } })
    .then((res)=>{
        setMessages(res.data.data)
    });
  },[conversationId])

  useEffect(() => {
    if (!socket.connected) {
        console.log("Socket Connecting");
        
      const token = localStorage.getItem("token");
      if (token) socket.auth = { token };
      socket.connect();
      console.log("Socket connected")
    }

    return () => {
      // keep socket open across pages; only disconnect on logout
    };
  }, []);

  useEffect(() => {
    const onNewMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
      // mark as read if it belongs to current conversation
      if (msg.conversation_id === conversationId) {
        socket.emit("mark_as_read", { conversationId: msg.conversation_id, sender_id: msg.sender_id });
      }
    };

    const onMessageSent = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    const onTyping = ({ userId: typerId }) => {
      if (typerId === receiverId) {
        setTyping(true);
        if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = window.setTimeout(() => setTyping(false), 1500);
      }
    };

    socket.on("new_message", onNewMessage);
    socket.on("message_sent", onMessageSent);
    socket.on("typing", onTyping);

    return () => {
      socket.off("new_message", onNewMessage);
      socket.off("message_sent", onMessageSent);
      socket.off("typing", onTyping);
    };
  }, [conversationId, receiverId]);

  const sendMessage = (text) => {
    socket.emit("send_message", { conversationId, receiver_id: receiverId, text });
  };

  const sendTyping = () => {
    socket.emit("typing", { conversationId, receiver_id: receiverId });
  };

  return { messages, typing, sendMessage, sendTyping };
};
