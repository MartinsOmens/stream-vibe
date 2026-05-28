// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfIEqxeKfzXHe_a0Xlw2ro4l4waqm-bsQ",
  authDomain: "stream-vibe-46e18.firebaseapp.com",
  projectId: "stream-vibe-46e18",
  storageBucket: "stream-vibe-46e18.firebasestorage.app",
  messagingSenderId: "509525914077",
  appId: "1:509525914077:web:d49ee78f75a64d37568634",
  measurementId: "G-XWJYGG51TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

