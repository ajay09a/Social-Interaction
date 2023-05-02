import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';


// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtULNASJfE4ZJCBqXRrWitItqdisgTUEc",
  authDomain: "chat-app-55e2b.firebaseapp.com",
  projectId: "chat-app-55e2b",
  storageBucket: "chat-app-55e2b.appspot.com",
  messagingSenderId: "524518056018",
  appId: "1:524518056018:web:af0a2441970b0600acff8b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

export const firestore = firebase.firestore();