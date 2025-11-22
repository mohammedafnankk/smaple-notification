import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [message, setMessage] = React.useState("");
    const navigate = useNavigate(); // ⭐ navigation hook

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            
        
        await axios.post("https://86l2d590-5000.inc1.devtunnels.ms/api/admin/login", {
            email:email,
            password:password,
    }).then((res)=>{
        console.log(res.data);
        localStorage.setItem("admin",JSON.stringify(res.data))
        localStorage.setItem("token",res.data.data.token.accessToken)
        navigate("/admin/dashboard");
    }).catch((err)=>{
        setMessage("Login failed. Check your credentials.");
        console.error(err);
    })
    } catch (error) {
            
        }

    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-xl p-8 w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>

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

        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </form>
    </div>
    );
}

export default AdminLogin;
