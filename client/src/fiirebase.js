// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2cf2b.firebaseapp.com",
  projectId: "mern-blog-2cf2b",
  storageBucket: "mern-blog-2cf2b.firebasestorage.app",
  messagingSenderId: "887655040183",
  appId: "1:887655040183:web:29ff1ecef9835c5b4a3932"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);