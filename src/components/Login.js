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
  IconButton,
  Typography,
  Paper,
} from '@material-ui/core/';
import Tab from '@material-ui/core/Tab';
import CloseIcon from '@material-ui/icons/Close';

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
  title: { backgroundColor: '#3d4576', color: '#ffffff' },
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
        aria-labelledby="form-dialog-title"
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
