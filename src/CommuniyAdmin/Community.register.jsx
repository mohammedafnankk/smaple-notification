import axios from 'axios';
import { deleteToken, getToken } from 'firebase/messaging';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { messaging } from '../firebase';

const CommunityRegister = () => {
    const [cName, setCname] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("");
    const navigate = useNavigate(); // ⭐ navigation hook

    const vKey = import.meta.env.VITE_PUBLIC_FIREBASE_VAPID_KEY;
    
const requestPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    console.log("Notification permission denied");
    return;
  }

  try {
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

    // Now generate a fresh token
    const newToken = await getToken(messaging, { vapidKey: vKey });
    console.log("New FCM Token:", newToken);

  } catch (error) {
    console.log("Error generating token:", error);
  }
};

useEffect(() => {
  requestPermission();
}, []);
    const handleCregister = async (e) => {
        e.preventDefault();
          try {
           await axios.post("https://86l2d590-5000.inc1.devtunnels.ms/api/community/register", {
                name:cName,
                description:description,
                email:email,
                password:password,
        }).then(async(res)=>{        
            console.log(res.data);
            await axios.post("https://86l2d590-5000.inc1.devtunnels.ms/api/community-admin/store", {
                communityId:res.data.data.community.id,
                fcmToken:token
        }).then((res)=>{
            console.log(res.data);
            setMessage("FCM Token stored successfully.");
            }).catch((err)=>console.log(err));

            }).catch((err)=>{
                setMessage("Registration failed. Try again.");
                console.error(err);
            })
          } catch (error) {
            console.log(error);
          }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleCregister} className="bg-white shadow-lg rounded-xl p-8 w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Community Register</h2>

        <input
          type="text"
          placeholder="Community Name"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          value={cName}
          onChange={(e) => setCname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Register
        </button>

        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </form>
    </div>
    );
}

export default CommunityRegister;
