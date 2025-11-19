import axios from "axios";
import { getToken } from "firebase/messaging";
import React, { useEffect } from "react";
import { messaging } from "../firebase";
export default function Home() {
  const user = localStorage.getItem("user");
  const atoken = localStorage.getItem("token");
  const fcm = localStorage.getItem("fcm");
  console.log(atoken);
   const vKey = import.meta.env.VITE_PUBLIC_FIREBASE_VAPID_KEY;

  const requestPermission = async () => {
    console.log("Requesting permission...");

    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      console.log("Notification permission denied");
      return;
    }

    console.log("Permission granted!");

    try {
      // ⚠️ Generate NEW token every time
      const token = await getToken(messaging, {
        vapidKey: vKey,
      });

      console.log("New FCM Token:", token);

      // 🔥 POST the token to backend
      await axios.post(
          "https://86l2d590-5000.inc1.devtunnels.ms/api/pns/store",
          {
            fcmToken:token
          },
          {
            headers: {
              Authorization: `Bearer ${atoken}`,
            },
          },
          
        ).then((res)=>console.log(res.data)).catch((err)=>console.log(err));

      console.log("Token sent to backend");

    } catch (error) {
      console.log("Error generating token:", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []); // Runs
  

  // const handleFcm =()=>{

  //     try {
  //       axios.post(
  //         "https://86l2d590-5000.inc1.devtunnels.ms/api/pns/store",
  //         {
  //           fcmToken:fcm
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         },
          
  //       ).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
  //     } catch (error) {
  //         console.log(error);
          
  //     }
  // }
  const testNotification = async()=>{
    try {
       await axios.get('https://86l2d590-5000.inc1.devtunnels.ms/api/pns/test',
            {
            headers: {
              Authorization: `Bearer ${atoken}`,
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

      {/* <button onClick={handleFcm} className="px-2 py-1 bg-green-600 text-white rounded-2xl cursor-pointer">Store fcmToken</button> */}
      <button onClick={testNotification} className="px-2 py-1 bg-blue-600 text-white rounded-2xl cursor-pointer">Test Notification</button>
      </div>
    </div>
  );
}
