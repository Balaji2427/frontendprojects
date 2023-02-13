import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5qExDQj15TJzy36-OyBKVaREyOF3o-Qo",
    authDomain: "disney-81a41.firebaseapp.com",
    projectId: "disney-81a41",
    storageBucket: "disney-81a41.appspot.com",
    messagingSenderId: "924218230101",
    appId: "1:924218230101:web:842e446a968994ef0b5bdc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, db, provider };