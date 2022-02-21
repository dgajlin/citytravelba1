// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfVRK4KtoIaaGRd1628L2qWGkYqi15qZs",
  authDomain: "citytravelba.firebaseapp.com",
  projectId: "citytravelba",
  storageBucket: "citytravelba.appspot.com",
  messagingSenderId: "773697857899",
  appId: "1:773697857899:web:79d7402df3c4eb2efb442e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);