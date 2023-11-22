// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1EYKU2Y7k_NCCOlulmgTb62PPSaEYyGM",
  authDomain: "otp-project-e0a3b.firebaseapp.com",
  projectId: "otp-project-e0a3b",
  storageBucket: "otp-project-e0a3b.appspot.com",
  messagingSenderId: "773715510015",
  appId: "1:773715510015:web:4995ccf0bb485b438342ca",
  measurementId: "G-3BQQKLJKY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);