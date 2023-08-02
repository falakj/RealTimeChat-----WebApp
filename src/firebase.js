// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJnAseOzOSZtfiEv0ltDuEZaxTTD-43Ds",
  authDomain: "conversa-b1167.firebaseapp.com",
  projectId: "conversa-b1167",
  storageBucket: "conversa-b1167.appspot.com",
  messagingSenderId: "363225724311",
  appId: "1:363225724311:web:b24b49b1c7e9c0334000d2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

