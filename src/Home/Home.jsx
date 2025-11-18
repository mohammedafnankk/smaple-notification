import axios from "axios";
import React, { useEffect } from "react";
export default function Home() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const fcm = localStorage.getItem("fcm");
  console.log(token);
  

  const handleFcm =()=>{

      try {
        axios.post(
          "http://localhost:5000/api/pns/store",
          {
            fcmToken:fcm
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          
        ).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
      } catch (error) {
          console.log(error);
          
      }
  }
  const testNotification =()=>{
    try {
        axios.get('http://localhost:5000/api/pns/test',
            {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        ).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    } catch (error) {
         console.log(error);
                 
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 flex-col">
      <h1 className="text-3xl font-bold">Welcome to Home Page!</h1>
      <div className="flex flex-col gap-5 pt-5">

      <button onClick={handleFcm} className="px-2 py-1 bg-green-600 text-white rounded-2xl cursor-pointer">Store fcmToken</button>
      <button onClick={testNotification} className="px-2 py-1 bg-blue-600 text-white rounded-2xl cursor-pointer">Test Notification</button>
      </div>
    </div>
  );
}
