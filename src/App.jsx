import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { messaging } from './firebase'
import { getToken } from 'firebase/messaging'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login'
import Home from './Home/Home'

function App() {
  const vKey = import.meta.env.VITE_PUBLIC_FIREBASE_VAPID_KEY;
  
  
  const requestPermission = async () => {
    console.log("Requesting notification permission...");

    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted.");

      // Get FCM token
      const token = await getToken(messaging, {
        vapidKey: vKey
      });

      console.log("FCM Token:", token);
      localStorage.setItem("fcm",token)
    
    } else {
      console.log("Permission not granted.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App
