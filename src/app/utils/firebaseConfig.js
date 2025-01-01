// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzz7PNjPtA68NJayH46Z36jhXkQ7M4fEo",
  authDomain: "phcn-5e328.firebaseapp.com",
  projectId: "phcn-5e328",
  storageBucket: "phcn-5e328.firebasestorage.app",
  messagingSenderId: "416504557417",
  appId: "1:416504557417:web:629873681d4cd9472ad7f8",
  measurementId: "G-X32XBVKXKJ",
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export default app;
