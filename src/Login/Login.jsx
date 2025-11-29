import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import Glogin from "../Glogin/Glogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // ⭐ navigation hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://86l2d590-5000.inc1.devtunnels.ms/api/user/login", {
        email,
        password,
      });

      console.log(res.data);
      localStorage.setItem("user",JSON.stringify(res.data))
      localStorage.setItem("token",res.data.data.token.accessToken)
      

      // ⭐ redirect to home page
      navigate("/home");

    } catch (error) {
      setMessage("Login failed. Check your credentials.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-xl p-8 w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

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
          Login
        </button>
        <Glogin/>

        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </form>
    </div>
  );
}
