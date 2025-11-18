// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCaYxx2bz7qul60cs4PvUL9mOFqagTt-4",
  authDomain: "bloodb-606c7.firebaseapp.com",
  projectId: "bloodb-606c7",
  storageBucket: "bloodb-606c7.firebasestorage.app",
  messagingSenderId: "139392009781",
  appId: "1:139392009781:web:3da73fc520c57eb496537c",
  measurementId: "G-MY94VGHNB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const messaging = getMessaging(app);