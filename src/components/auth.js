import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

export default function auth(props) {
  firebase.auth().onAuthStateChanged(async user => {
    console.log('user in auth', user);
    if (user) {
      console.log('user logged in:', user);
      let test = user.uid;
      console.log('test', test);
    } else {
      console.log('user logged out');
    }
  });

  return <div>auth</div>;
}
