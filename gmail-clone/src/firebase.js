import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA1NfEJ6tn96nx8pnWp6EZC7sgnylPdQoU",
    authDomain: "fir-ee7a7.firebaseapp.com",
    projectId: "fir-ee7a7",
    storageBucket: "fir-ee7a7.appspot.com",
    messagingSenderId: "550576479244",
    appId: "1:550576479244:web:8576520e6766e4aa36e229"
  };




const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, db, provider };