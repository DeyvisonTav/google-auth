import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,  } from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyBbGzak3gMchnzn9AuLUGhGI8IwGD7KQ_k",
  authDomain: "auth-7abe5.firebaseapp.com",
  projectId: "auth-7abe5",
  storageBucket: "auth-7abe5.appspot.com",
  messagingSenderId: "318982964226",
  appId: "1:318982964226:web:b9da71a098a582181c531b"
};

const app = initializeApp(firebaseConfig);
 
export const  auth = getAuth(app)