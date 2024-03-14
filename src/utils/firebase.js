// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import for authentication
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC31becQrwif7035q5RtIeEAw4PrkHQ6Mc",
  authDomain: "dropbox2024-56338.firebaseapp.com",
  projectId: "dropbox2024-56338",
  storageBucket: "dropbox2024-56338.appspot.com",
  messagingSenderId: "701782247022",
  appId: "1:701782247022:web:bc579742ae1caf741d887f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Use getAuth to initialize Firebase Authentication
export const storage  = getStorage(app)