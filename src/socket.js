import { io } from "socket.io-client";

 const BASE_URL = import.meta.env.VITE_API_URL;
 export const socket = io("https://staging-api.paadha.com",{
   transports: ["polling", "websocket"],
    auth:{
        token:localStorage.getItem("token")
    }
 })