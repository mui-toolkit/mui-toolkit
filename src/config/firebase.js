// import firebase from "firebase/app";
// import firebase from "firebase/firestore";
import 'firebase/auth';

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
// firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

// export default { firebase, db };

export default firebaseConfig;
