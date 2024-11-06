// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqEp_TXdRm7mj5Wi6kH3SSglBfxV5fg6k",
  authDomain: "authentication-firebase-7cb5b.firebaseapp.com",
  projectId: "authentication-firebase-7cb5b",
  storageBucket: "authentication-firebase-7cb5b.firebasestorage.app",
  messagingSenderId: "64676768910",
  appId: "1:64676768910:web:379bc54b4562f30eb3addf",
  measurementId: "G-B3ECZC1WK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);