// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
//  

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8TTju4wbB-iu7ctpNAtxj_tm8KSWGso",
  authDomain: "dongthap-a1865.firebaseapp.com",
  databaseURL: "https://dongthap-a1865-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dongthap-a1865",
  storageBucket: "dongthap-a1865.appspot.com",
  messagingSenderId: "893231512133",
  appId: "1:893231512133:web:616d1f304b8aa5ec1d812c",
  measurementId: "G-5VX9HBG3V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const fireDB = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'it';
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export {fireDB,auth,provider}
