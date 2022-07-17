// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCxzSMyPbQUTrzxM3bRanI0wZz-qjgZ9lk",
  authDomain: "clone-28e2e.firebaseapp.com",
  projectId: "clone-28e2e",
  storageBucket: "clone-28e2e.appspot.com",
  messagingSenderId: "721201028749",
  appId: "1:721201028749:web:226d4ff1ea4d5145a14cc4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db , auth };