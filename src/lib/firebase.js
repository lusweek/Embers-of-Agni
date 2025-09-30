// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Din Firebase-config från Firebase Console
const firebaseConfig = {
  apiKey: "DIN_API_KEY",
  authDomain: "DITT_PROJECT.firebaseapp.com",
  projectId: "DITT_PROJECT_ID",
  storageBucket: "DITT_PROJECT_ID.appspot.com",
  messagingSenderId: "DIN_SENDER_ID",
  appId: "DIN_APP_ID"
};

// Initiera app
const app = initializeApp(firebaseConfig);

// Initiera storage
export const storage = getStorage(app);
