// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwSlaD4gBPKxBKF3m0NIDBWAMBGxRKND8",
  authDomain: "moviegpt-9b1ab.firebaseapp.com",
  projectId: "moviegpt-9b1ab",
  storageBucket: "moviegpt-9b1ab.appspot.com",
  messagingSenderId: "1047979397652",
  appId: "1:1047979397652:web:46a2ea7acfa8fb38fdcd01",
  measurementId: "G-9M74H4K2D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
