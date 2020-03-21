import React from 'react';

import { unaryExpression } from '@babel/types';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// import firebaseConfig from '../config/firebase';

// //TESTING FIREBASE DATABASE CONNECTION HERE, WE WILL MOVE THIS
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default function Home() {
  // const user = {};
  // const theme = {};
  // db.collection('Users')
  //   .get()
  //   .then(snapshot => {
  //     snapshot.docs.forEach(doc => {
  //       // console.log("Home -> doc", doc.data().firstName);
  //       user.firstName = doc.data().firstName;
  //       user.lastName = doc.data().lastName;
  //       user.email = doc.data().email;
  //       user.themes = doc.data().themes;
  //     });
  //   })
  //   .catch(err => {
  //     console.log('Error getting documents', err);
  //   });

  // db.collection('CustomizedThemes')
  //   .get()
  //   .then(snapshot => {
  //     snapshot.docs.forEach(doc => {
  //       // console.log("Home -> doc", doc.data());
  //       theme.palette = doc.data().palette;
  //       theme.typography = doc.data().typography;
  //     });
  //   })
  //   .catch(err => {
  //     console.log('Error getting documents', err);
  //   });
  // console.log('Home -> user', user, theme);

  return <div>Home</div>;
}
