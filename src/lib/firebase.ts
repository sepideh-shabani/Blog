import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlW0bwnA7GLKZ0NHi4vCuSKDdKK1TgL3A",
  authDomain: "nextfire-64861.firebaseapp.com",
  projectId: "nextfire-64861",
  storageBucket: "nextfire-64861.appspot.com",
  messagingSenderId: "93311887705",
  appId: "1:93311887705:web:5918248f37fa2820098448",
  measurementId: "G-CD1D47JB8Z"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
