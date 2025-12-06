import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { messaging } from './firebase'
import { getToken } from 'firebase/messaging'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login'
import Home from './Home/Home'
import AdminLogin from './Admin/Admin.login'
import AdminDashboard from './AdminDashboard/Admin.dashboard'
import CommunityRegister from './CommuniyAdmin/Community.register'
import Chat from './Chat/Chat'
import { socket } from './socket'
import PendingBR from './PendingBloodRequest/PendingBR'
import CommunityLogin from './CommuniyAdmin/Comminuty.login'
import TestLocalS from './TestLocalS'

function App() {
  const [onlineUsers , setOnlineUsers] = useState([])
  
  useEffect(()=>{
    socket.on("user_online",(id)=>{
      setOnlineUsers((prev)=>[...prev,id])
    });
    socket.on("user_offline",(id)=>{
      setOnlineUsers((prev)=>[...prev.filter((u)=> u !==id)])
    });
    return ()=>{
      socket.off("user_online");
      socket.off("user_offline")
    }
  },[])

  const vKey = import.meta.env.VITE_PUBLIC_FIREBASE_VAPID_KEY;
  
  
  // const requestPermission = async () => {
  //   console.log("Requesting notification permission...");

  //   const permission = await Notification.requestPermission();

  //   if (permission === "granted") {
  //     console.log("Notification permission granted.");

  //     // Get FCM token
  //     const token = await getToken(messaging, {
  //       vapidKey: vKey
  //     });

  //     console.log("FCM Token:", token);
  //     localStorage.setItem("fcm",token)
    
  //   } else {
  //     console.log("Permission not granted.");
  //   }
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/community/register" element={<CommunityRegister />} />
        <Route path="/blood/pending" element={<PendingBR />} />
        <Route path="/community/login" element={<CommunityLogin />} />
        <Route path="/test" element={<TestLocalS />} />
        

      </Routes>
    </BrowserRouter>

  );

}

export default App
