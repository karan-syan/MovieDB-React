import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyAsBF27SUNg7aW8JbcJJMOmcPTIXUgZ-Us",
  authDomain: "ktv-movie.firebaseapp.com",
  projectId: "ktv-movie",
  storageBucket: "ktv-movie.appspot.com",
  messagingSenderId: "517291202448",
  appId: "1:517291202448:web:a48abc9de8ccddb8e28515",
  measurementId: "G-QWFWLK13K2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
