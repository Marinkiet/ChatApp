import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWca43Egq1iNMnFleLXJ0KMjNWt7ihtBk",
  authDomain: "whatsapp-9c060.firebaseapp.com",
  projectId: "whatsapp-9c060",
  storageBucket: "whatsapp-9c060.appspot.com",
  messagingSenderId: "2645962495",
  appId: "1:2645962495:web:0a57c9c727b563fca6a6ca",
  measurementId: "G-X2Z50TV0ZF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db; 