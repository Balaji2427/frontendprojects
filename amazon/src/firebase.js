import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCtbm-VrUKir1K9XXwrC1_TB2zMUVj7vk",
  authDomain: "fir-ea97b.firebaseapp.com",
  projectId: "fir-ea97b",
  storageBucket: "fir-ea97b.appspot.com",
  messagingSenderId: "553285834280",
  appId: "1:553285834280:web:12e2c8e84b7bb18dab071d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth};