// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZHbVbWIblgyaI-fKFTML6I7I5Senl2c",
  authDomain: "parcial-poo-9cdfd.firebaseapp.com",
  projectId: "parcial-poo-9cdfd",
  storageBucket: "parcial-poo-9cdfd.appspot.com",
  messagingSenderId: "431450631672",
  appId: "1:431450631672:web:8f3ce61262ee210036fa0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db