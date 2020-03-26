import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import 'firebase/auth';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Paper,
} from '@material-ui/core/';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: 5,
    height: 46,
    padding: 10,
  },
  tab: {
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '1rem',
    minWidth: 10,
    marginLeft: '25px',
    color: '#000',
    fontFamily: 'Roboto',
  },
}));

export function Login(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = e => {
    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        console.log(cred.user);
      })
      .catch(function(error) {
        console.log('error in login', error.code);
      });
    // props.history.push('/');
  };

  return (
    <div>
      <Tab
        label='Login'
        className={classes.tab}
        // variant="outlined"
        // color="primary"
        onClick={handleClickOpen}
      >
        Login
      </Tab>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby='form-dialog-title'
      >
        <Paper style={{ backgroundColor: '#fff' }}>
          <Typography
            id='form-dialog-title'
            align='center'
            style={{
              color: '#000',
              fontSize: 20,
              fontFamily: 'Roboto',
              lineHeight: 3,
            }}
          >
            LOG IN
          </Typography>
          {/* <DialogContentText>
          Name your saved theme something quirky
        </DialogContentText> */}
          {/* <DialogTitle id="form-dialog-title">Email</DialogTitle> */}
          <DialogContent>
            <TextField
              label='Email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </DialogContent>
          {/* <DialogTitle id="form-dialog-title">Password</DialogTitle> */}
          <DialogContent>
            <TextField
              type='password'
              label='Password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleSubmit}
              style={{
                fontFamily: 'Roboto',
                fontSize: 14,
                marginRight: '20px',
                color: '#3F51B5',
              }}
              className={classes.button}
            >
              Login
            </Button>
            <Button
              onClick={handleCancel}
              style={{
                fontFamily: 'Roboto',
                fontSize: 14,
                marginRight: '20px',
                color: '#f50057',
              }}
              className={classes.button}
            >
              Cancel
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
}

export default Login;
