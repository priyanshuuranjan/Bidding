import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyAOWKI62k-LHlQwLHk7Dre-n6PIRBTLX30",
  authDomain: "auction-capstone-e4fe1.firebaseapp.com",
  projectId: "auction-capstone-e4fe1",
  storageBucket: "auction-capstone-e4fe1.appspot.com",
  messagingSenderId: "46639716138",
  appId: "1:46639716138:web:a6bb40a58483c3ea52b053"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
