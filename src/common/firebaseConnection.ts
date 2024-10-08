// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqxFRGh9sQHHyr2kO9-Mcz7EJNChQDpEU",
  authDomain: "karollaflores-d3774.firebaseapp.com",
  projectId: "karollaflores-d3774",
  storageBucket: "karollaflores-d3774.appspot.com",
  messagingSenderId: "531814928406",
  appId: "1:531814928406:web:3bc79609f282187310a537",
  measurementId: "G-F0FTM47EXZ",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export {firebase, auth};
