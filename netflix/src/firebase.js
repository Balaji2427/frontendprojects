import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBkbMA7C25PjoSVIgPToe4hmYTJazHO1MI",
    authDomain: "netflix-6c5bb.firebaseapp.com",
    projectId: "netflix-6c5bb",
    storageBucket: "netflix-6c5bb.appspot.com",
    messagingSenderId: "1025293362639",
    appId: "1:1025293362639:web:d3ef669f40e7797c5a5eba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};