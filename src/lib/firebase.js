// Import the functions you need from the SDKs you need
import {  deleteApp, getApp, getApps, initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY8D7G_UAhPTlAlFkZhmrGUQYUKbgYAo4",
  authDomain: "embers-of-agni-15e17.firebaseapp.com",
  projectId: "embers-of-agni-15e17",
  storageBucket: "embers-of-agni-15e17.firebasestorage.app",
  messagingSenderId: "180163991869",
  appId: "1:180163991869:web:34c2f883c4c2b6a9c38d54",
  measurementId: "G-W77Z331HX7"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);