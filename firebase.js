import firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'shoppee-20050.firebaseapp.com',
    projectId: 'shoppee-20050',
    storageBucket: 'shoppee-20050.appspot.com',
    messagingSenderId: '10861477635',
    appId: '1:10861477635:web:71bc178dd7b4d7c0b93336',
    measurementId: 'G-E0YCFJXX26',
};
// Initialize Firebase
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
