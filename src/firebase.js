// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjtRrx6KHlfTsrJ7nhNJuAxOEniX3mwRo",
  authDomain: "evteam-warriors.firebaseapp.com",
  projectId: "evteam-warriors",
  storageBucket: "evteam-warriors.firebasestorage.app",
  messagingSenderId: "502199205519",
  appId: "1:502199205519:web:1a15a6daf2c4ccfb47bafa",
  measurementId: "G-4PT6RBLRL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);