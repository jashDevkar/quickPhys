
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqX7jIhgdNDp5fpf_KZK4dDEh2izm4hdM",
  authDomain: "quickphys-3ef70.firebaseapp.com",
  projectId: "quickphys-3ef70",
  storageBucket: "quickphys-3ef70.appspot.com",
  messagingSenderId: "710728835357",
  appId: "1:710728835357:web:ae11f7c47c0afe02e281f4",
  measurementId: "G-W9YX3RP9MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db};
