import React, { useState, useEffect, useCallback, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Button } from '@material-ui/core';
import firebase from 'firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import StartDialog from './StartDialog';
import muilogo from '.././imgs/mui-logo.jpg';

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    // return async () => {
    //   await unsubscribe();
    // };
  }, []);
  return (
    <div>
      <div>
        <Grid container direction='column' style={{ marginTop: '10em' }}>
          {/* <Grid
            item
            container
            direction='row'
            justify='center'
            alignItems='center'
          > */}
          <Grid container direction='column' align='center'>
            <Grid item>
              <img alt='mui logo' src={muilogo} style={{ width: '5%' }} />
            </Grid>
            <Grid item>
              <Grid
                container
                direction='row'
                justify='center'
                style={{ marginTop: '1.5em' }}
              >
                <Grid item>
                  <Typography
                    variant='h4'
                    style={{ marginRight: '5px' }}
                    gutterBottom
                  >
                    Welcome to{' '}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h4'
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 200,
                      fontSize: 30,
                      color: '#000',
                    }}
                    gutterBottom
                  >
                    mymui.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* </Grid> */}

          <Grid container justify='center' alignItems='center'>
            <Typography
              style={{ marginTop: '10px' }}
              align='center'
              style={{ color: '#818181' }}
            >
              <b>Build</b> and <b>style</b> Material-UI <b>components</b>{' '}
              quickly and easily.
              <br />
              <b>Save</b> and <b>edit</b> your progress. <b>Share</b> and
              <b> explore</b> with others.
            </Typography>
          </Grid>

          <Grid
            container
            direction='row'
            spacing={2}
            justify='center'
            alignItems='center'
          >
            <Grid item>
              <Button
                component={Link}
                to='/learn'
                disableRipple
                variant='contained'
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 200,
                  fontSize: 24,
                  color: '#000',
                  marginTop: '1em',
                  textTransform: 'none',
                }}
                // className={classes.button}
              >
                learn.
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleClickOpen}
                disableRipple
                variant='contained'
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 200,
                  fontSize: 24,
                  color: '#000',
                  marginTop: '1em',
                  textTransform: 'none',
                }}
                // className={classes.button}
              >
                get started.
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <StartDialog handleClose={handleClose} open={open} />
    </div>
  );
}
