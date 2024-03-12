// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "senicare.firebaseapp.com",
  projectId: "senicare",
  storageBucket: "senicare.appspot.com",
  messagingSenderId: "206383548601",
  appId: "1:206383548601:web:435d75e4d36bfd2219f368",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

