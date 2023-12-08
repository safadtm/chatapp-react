// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMGdGPE-fddMjyiRRnsw5X-98tzJ_6ozY",
  authDomain: "chatapp-react-73e89.firebaseapp.com",
  projectId: "chatapp-react-73e89",
  storageBucket: "chatapp-react-73e89.appspot.com",
  messagingSenderId: "30059780544",
  appId: "1:30059780544:web:db119272585753e5279025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);