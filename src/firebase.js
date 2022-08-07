import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2E1z6HPlO5LYek0tEuyukbANhppsmBs",
  authDomain: "clone-d838a.firebaseapp.com",
  projectId: "clone-d838a",
  storageBucket: "clone-d838a.appspot.com",
  messagingSenderId: "498684380791",
  appId: "1:498684380791:web:5d4cd7a68acf6c02d0e872",
  measurementId: "G-GYTBCFQJE2"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//const analytics = getAnalytics(app);

export {db, auth };