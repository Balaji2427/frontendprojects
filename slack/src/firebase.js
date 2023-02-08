import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNZvQcA6h7OWnLvAMiZuRxoeQ1xX8U2tc",
  authDomain: "slack-7d718.firebaseapp.com",
  projectId: "slack-7d718",
  storageBucket: "slack-7d718.appspot.com",
  messagingSenderId: "523106789990",
  appId: "1:523106789990:web:9103d300e1ec2735805ba7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };

