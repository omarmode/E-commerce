// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd8M1wUT5r1rI3FLFfCwFNtAIfuHgQFsU",
  authDomain: "e-commerce-3950c.firebaseapp.com",
  projectId: "e-commerce-3950c",
  storageBucket: "e-commerce-3950c.appspot.com",
  messagingSenderId: "331320515086",
  appId: "1:331320515086:web:d0174aa551235099707a5f",
  measurementId: "G-XFGRHEC535",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
