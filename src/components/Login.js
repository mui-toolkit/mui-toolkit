import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';
import 'firebase/auth';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Snackbar,
  IconButton
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  button: { marginRight: '20px' },
  title: { backgroundColor: '#3d4576', color: '#ffffff' }
}));

export function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnack, setOpenSnack] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpenSnack(true);
  };
  const handleClose = (event, reason) => {
    console.log('hanCl', event, reason);
    if (reason === 'clickaway' || reason === 'timeout') {
      setOpenSnack(false);
      return;
    }

    setOpen(false);
  };
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
        if (!isEmpty(error)) {
          handleClick();
        }
        console.log('error in login', error);
        // alert(error.message);
        alert('Invalid username or password');
      });
  };

  const validate = email => {
    let errors = {};
    if (!email) {
      errors = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors = 'Email address is invalid';
    }
    return errors;
  };
  const isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
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
        <DialogTitle id="form-dialog-title" className={classes.title}>
          LOG IN
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            label="Email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            error={!isEmpty(validate(email)) && email.length > 0}
            helperText={
              validate(email) && email.length > 0
                ? 'Please enter a valid email'
                : ''
            }
            helperText={
              !isEmpty(validate(email)) && email.length > 0
                ? validate(email)
                : ''
            }
          />
        </DialogContent>
        <DialogContent>
          <TextField
            required
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
      <Snackbar
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Invalid Username or Password."
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default Login;
