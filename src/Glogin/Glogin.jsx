import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Glogin = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;
      const res = await axios.post("https://86l2d590-5000.inc1.devtunnels.ms/api/user/google/token", {
        idToken,
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
