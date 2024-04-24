// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUC5-22LjljSoxd603DgKLKkbUSmvVTdI",
  authDomain: "coffee-store-523f1.firebaseapp.com",
  projectId: "coffee-store-523f1",
  storageBucket: "coffee-store-523f1.appspot.com",
  messagingSenderId: "283087452465",
  appId: "1:283087452465:web:464db8d7eb13a6cee2d810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;