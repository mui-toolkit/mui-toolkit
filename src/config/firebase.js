import firebase from 'firebase/app';
// import firebase from "firebase/firestore";
import 'firebase/auth';
import 'firebase/firestore';
import '@firebase/functions';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBevfCK5ecPcHaddoc3ISZJaqiICw4OXx8',
  authDomain: 'mui-theme.firebaseapp.com',
  databaseURL: 'https://mui-theme.firebaseio.com',
  projectId: 'mui-theme',
  storageBucket: 'mui-theme.appspot.com',
  messagingSenderId: '910262165775',
  appId: '1:910262165775:web:51ef7d1564b7a52ae05e7a',
  measurementId: 'G-C66ZLEV61P'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const fc = firebase.functions();
const fa = firebase.auth();
const fv = firebase.firestore.FieldValue;

export { firebase, db, fc, fv, fa };
