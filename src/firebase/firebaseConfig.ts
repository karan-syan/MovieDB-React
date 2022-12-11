// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
