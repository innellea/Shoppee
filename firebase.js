import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAsY5HcEfDMMdoYQAEQ0kjyyYRjWYVNBf8',
  authDomain: 'shoppee-20050.firebaseapp.com',
  projectId: 'shoppee-20050',
  storageBucket: 'shoppee-20050.appspot.com',
  messagingSenderId: '10861477635',
  appId: '1:10861477635:web:71bc178dd7b4d7c0b93336',
  measurementId: 'G-E0YCFJXX26',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();