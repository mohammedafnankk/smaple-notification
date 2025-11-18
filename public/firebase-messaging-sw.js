importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");


firebase.initializeApp({
apiKey: "AIzaSyCCaYxx2bz7qul60cs4PvUL9mOFqagTt-4",
  authDomain: "bloodb-606c7.firebaseapp.com",
  projectId: "bloodb-606c7",
  storageBucket: "bloodb-606c7.firebasestorage.app",
  messagingSenderId: "139392009781",
  appId: "1:139392009781:web:3da73fc520c57eb496537c",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    
    
  console.log("Background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
