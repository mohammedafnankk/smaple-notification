import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Glogin = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;
      const res = await axios.post("http://localhost:8000/api/user/google/token", {
        idToken,
        user_id:"073f0f4b-9fb1-42b3-9d32-990029e89c31"
      });
      console.log("Backend response:", res.data);
      // localStorage.setItem("Gtoken", res.data.token);
      alert("Login successful!");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  const handleError = () => {
    console.error("Google Login Failed");
  };
  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} shape="circle" />;
};

export default Glogin;
