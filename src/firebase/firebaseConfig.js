// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Cookies from "js-cookie";

// const mu = Cookies.get('user');
// if (!mu) window.location.href = 'https://auth.agua.app/signin';

const projectId = "acqua-cb27b";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA_u2xZk5efn-rl7BAX67U1lIpSQigIwX0",
//   authDomain: "acqua-cb27b.firebaseapp.com",
//   databaseURL: "https://acqua-cb27b-default-rtdb.firebaseio.com",
//   projectId: projectId,
//   storageBucket: "acqua-cb27b.appspot.com",
//   messagingSenderId: "633435186488",
//   appId: "1:633435186488:web:1673294a500f0386220dcd",
//   measurementId: "G-R5WLC0NS8Q",
// };

// Test config
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

const auth = getAuth();

export { db, auth }
