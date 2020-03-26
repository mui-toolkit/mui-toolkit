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
  DialogTitle
} from '@material-ui/core/';
import useForm from './useForm';
import validate from './LoginFormValidationRules';

const useStyles = makeStyles(theme => ({ button: { marginRight: '20px' } }));

export function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();
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
      <Button
        label="Login"
        // variant="outlined"
        // color="primary"
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        {' '}
        <DialogTitle id="form-dialog-title">LOG IN</DialogTitle>
        {/* <DialogContentText>
          Name your saved theme something quirky
        </DialogContentText> */}
        {/* <DialogTitle id="form-dialog-title">Email</DialogTitle> */}
        <DialogContent>
          <TextField
            label="Email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </DialogContent>
        {/* <DialogTitle id="form-dialog-title">Password</DialogTitle> */}
        <DialogContent>
          <TextField
            type="password"
            label="Password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{ marginRight: '20px' }}
            onClick={handleSubmit}
            color="primary"
          >
            Login
          </Button>
          <Button
            style={{ marginRight: '20px' }}
            onClick={handleCancel}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
