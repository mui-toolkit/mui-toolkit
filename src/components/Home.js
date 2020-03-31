import React, { useState, useEffect, useCallback, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import firebase from 'firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import { unaryExpression } from '@babel/types';

function onAuthStateChange(callback) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callback({ loggedIn: true, email: user.email });
    } else {
      callback({ loggedIn: false });
    }
  });
}

export default function Home() {
  const [user, setUser] = useState({ loggedIn: false });
  const [error, setError] = useState('');
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    // return async () => {
    //   await unsubscribe();
    // };
  }, []);

  if (!user.loggedIn) {
    return (
      <div>
        <div>
          <Grid container direction="column" style={{ marginTop: '10em' }}>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
<<<<<<< HEAD
              <Typography variant="h4" style={{ marginRight: '5px' }}>
=======
              <Typography
                variant='h4'
                style={{ marginRight: '5px' }}
                gutterBottom
              >
>>>>>>> 5562792f33734628c2c4316329ae848dae387b7c
                Welcome to{' '}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 200,
                  fontSize: 30,
                  color: '#000'
                }}
                gutterBottom
              >
                mymui.
              </Typography>
            </Grid>

            <Grid container justify='center' alignItems='center'>
              <Typography
                style={{ marginTop: '10px' }}
                align='center'
                style={{ color: '#818181' }}
              >
                <b>Build</b> a Material-UI Custom Theme easier and faster.
                <br />
                <b>Save</b> and <b>edit</b> your progress. <b>Share</b> and
                <b> explore</b> with others.
              </Typography>
            </Grid>

            <Grid
              container
              direction="row"
              spacing={2}
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/learn"
                  disableRipple
                  variant="contained"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 200,
                    fontSize: 24,
                    color: '#000',
                    marginTop: '1em',
                    textTransform: 'none'
                  }}
                  // className={classes.button}
                >
                  learn.
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/design"
                  disableRipple
                  variant="contained"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 200,
                    fontSize: 24,
                    color: '#000',
                    marginTop: '1em',
                    textTransform: 'none'
                  }}
                  // className={classes.button}
                >
                  get started.
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Grid container direction="row" style={{ marginTop: '10em' }}>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {' '}
          <Typography variant="h5">Welcome, {user.email} </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
