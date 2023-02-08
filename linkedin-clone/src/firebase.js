import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4n77G3F2bkrITLtKEi5-7TitVvPP1fwg",
    authDomain: "linkedin-clone-10c8e.firebaseapp.com",
    projectId: "linkedin-clone-10c8e",
    storageBucket: "linkedin-clone-10c8e.appspot.com",
    messagingSenderId: "1018062422278",
    appId: "1:1018062422278:web:ecf8603547bdb65a6f9e87"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
