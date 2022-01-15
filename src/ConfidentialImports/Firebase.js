// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7Unr65rYdPidemOiltxwnFz4F9QyG7cg",
  authDomain: "clone-e61de.firebaseapp.com",
  projectId: "clone-e61de",
  storageBucket: "clone-e61de.appspot.com",
  messagingSenderId: "465486305080",
  appId: "1:465486305080:web:4a12262317d921379913cd",
  measurementId: "G-HM41ESSCEF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth();

const analytics = getAnalytics(firebaseApp);

