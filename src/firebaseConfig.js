// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrgQizHFEykYAfEYDadoNGaEyfFi5MtYM",
  authDomain: "ecommerce-57f3e.firebaseapp.com",
  projectId: "ecommerce-57f3e",
  storageBucket: "ecommerce-57f3e.firebasestorage.app",
  messagingSenderId: "34796073620",
  appId: "1:34796073620:web:fab764f5f2412847467a81",
  measurementId: "G-T7VVFWP17N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);