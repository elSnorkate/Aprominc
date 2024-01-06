import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHZXFSkWZyuFDOdXk4em5E69U42gcEfcQ",
  authDomain: "aprominc-oportunidades.firebaseapp.com",
  projectId: "aprominc-oportunidades",
  storageBucket: "aprominc-oportunidades.appspot.com",
  messagingSenderId: "1081489803329",
  appId: "1:1081489803329:web:04f35d165093537126dec0",
  measurementId: "G-YRZ2Q6NTPK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
