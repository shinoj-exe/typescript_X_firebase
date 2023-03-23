// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGiD7tRfE6YKzLy5tB18Ev1qjDqeGlKfQ",
  authDomain: "myproject-8b5b5.firebaseapp.com",
  projectId: "myproject-8b5b5",
  storageBucket: "myproject-8b5b5.appspot.com",
  messagingSenderId: "711030791648",
  appId: "1:711030791648:web:45d4775fb71c9b404bdf85",
  measurementId: "G-LMB8D1J8SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();