// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEUzlzV4xYiWfCbZxIOlloFZl5Xarju-Q",
  authDomain: "roadmap-test-858e4.firebaseapp.com",
  projectId: "roadmap-test-858e4",
  storageBucket: "roadmap-test-858e4.appspot.com",
  messagingSenderId: "352455399165",
  appId: "1:352455399165:web:6d2a34b45e92fb69fc5094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }