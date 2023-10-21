// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZhZUe0kVjNFfaQZJxS4rR1vjMH_3Dxrw",
  authDomain: "proyecto-cuatro-rest.firebaseapp.com",
  projectId: "proyecto-cuatro-rest",
  storageBucket: "proyecto-cuatro-rest.appspot.com",
  messagingSenderId: "94412115195",
  appId: "1:94412115195:web:623d4a506c26f9349ff45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
