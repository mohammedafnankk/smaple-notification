import { deleteToken, getToken } from 'firebase/messaging';
import React, { useEffect } from 'react';
// import { messaging } from '../firebase';
import axios from 'axios';

const AdminDashboard = () => {
    const atoken = localStorage.getItem("token");
    


    const vKey = import.meta.env.VITE_PUBLIC_FIREBASE_VAPID_KEY;
    
      // const requestPermission = async () => {
      //   console.log("Requesting permission...");
    
      //   const permission = await Notification.requestPermission();
    
      //   if (permission !== "granted") {
      //     console.log("Notification permission denied");
      //     return;
      //   }
    
      //   console.log("Permission granted!");
    
      //   try {
      //       try {
      //           const currentToken = await getToken(messaging,{vapidKey:vKey})
      //       if(currentToken){await deleteToken(messaging)}
      //       } catch (error) {
      //           console.log("No existing token found");
      //       }
            
      //     // ⚠️ Generate NEW token every time
      //     const token = await getToken(messaging, {
      //       vapidKey: vKey,
      //     });
    
      //     console.log("New FCM Token:", token);
    
      //     // 🔥 POST the token to backend
      //     await axios.post(
      //         "https://86l2d590-5000.inc1.devtunnels.ms/api/pns/admin/store",
      //         {
      //           fcmToken:token
      //         },
      //         {
      //           headers: {
      //             Authorization: `Bearer ${atoken}`,
      //           },
      //         },
              
      //       ).then((res)=>console.log(res.data)).catch((err)=>console.log(err));
    
      //     console.log("Token sent to backend");
    
      //   } catch (error) {
      //     console.log("Error generating token:", error);
      //   }
      // };
    
      // useEffect(() => {
      //   requestPermission();
      // }, []); // Runs
    return (
        <div>
            <div>
                <h1>Hospitals</h1>
                
            </div>
        </div>
    );
}

export default AdminDashboard;
