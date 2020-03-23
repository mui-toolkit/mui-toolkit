import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { GridListTile } from '@material-ui/core';
// import firebase from 'firebase-app';
import firebase from 'firebase';
import 'firebase/auth';
// import db from "./Home";
import { db } from '../config/firebase';
const useStyles = makeStyles(theme => ({}));

export function Signup(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        console.log('cred', cred);
        return db
          .collection('Users')
          .doc(cred.user.uid)
          .set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          })
          .then(() => {
            console.log('created new user in db');
          });

        // firebase.database().ref('users/' + userId).set({
        //   username: name,
        //   email: email,
        //   profile_picture : imageUrl
        // });
      })
      .catch(function(error) {
        console.log('error in signup', error.code);
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ...
      });
    // let newUser = db
    //   .collection("Users")
    //   .add({
    //     firstName,
    //     lastName,
    //     email,
    //     password
    //   })
    //   .then(ref => {
    //     console.log("Added User ", ref.id);
    //   });
    // console.log("Signup -> newUser", newUser);
  };

  return (
    <Grid container direction='row' style={{ marginTop: '5em' }}>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item container direction='column'>
          <Grid
            item
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Typography variant='h2'>Sign Up</Typography>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid
            item
            container
            style={{ maxWidth: '20em' }}
            justify='center'
            alignItems='center'
          >
            <Grid item container justify='center'>
              <TextField
                label='First Name'
                id='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <TextField
                label='Last Name'
                id='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <TextField
                label='Email'
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                type='password'
                label='Password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Button>
              <input type='submit' value='Sign Up' />
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Signup;
