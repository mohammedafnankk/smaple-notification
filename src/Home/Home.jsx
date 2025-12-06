import axios from "axios";
import { deleteToken, getToken } from "firebase/messaging";
import React, { useEffect, useState } from "react";
import { messaging } from "../firebase";
import Chat from "../Chat/Chat";
import ConversationsList from "../ConversationsList/ConversationsList";
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
    // Delete existing token (forces FCM to create a new one)
        try {
          const currentToken = await getToken(messaging, { vapidKey: vKey });
          if (currentToken) {
            await deleteToken(messaging);
            console.log("Old token deleted:", currentToken);
          }
        } catch (err) {
          console.log("No existing token found");
        }

    try {
      // ⚠️ Generate NEW token every time
      const token = await getToken(messaging, {
        vapidKey: vKey,
      });

      console.log("New FCM Token:", token);

      // 🔥 POST the token to backend
      await axios.post(
          "https://staging-api.paadha.com/api/pns/store",
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
  
  

  const [selected, setSelected] = useState(null);
  const userDetails = user && typeof user === 'string' ? JSON.parse(user) : user;
  const userId = userDetails.data.user.id
  // console.log(userId);
  console.log(selected,"selected");
  
  localStorage.setItem("ss",JSON.stringify(selected))

  return (
   <div className="flex h-screen">
      <div className="w-80 border-r">
        <ConversationsList onSelect={(c) => setSelected(c)} />
      </div>

      <div className="flex-1">
        {selected ? (
          <Chat userId={userId} conversationId={selected.id} receiverId={selected.user1_id === userId ? selected.user2_id : selected.user1_id} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">Select a conversation</div>
        )}
      </div>
    </div>
  );
}
