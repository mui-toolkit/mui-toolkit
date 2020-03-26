import React, { useState, useEffect, useCallback, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import 'firebase/auth';
import Login from '../Login';

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
  tabContainer: {
    marginLeft: 'auto',
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
const UserContext = React.createContext({});
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export default function Header(props) {
  const classes = useStyles();

  console.log('Header -> user', props.user);
  const [error, setError] = useState('');

  const handleClick = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('user signed out props');
      });
  };

  if (!props.user.loggedIn) {
    return (
      <React.Fragment>
        <AppBar position='fixed' style={{ background: '#fff' }}>
          <Toolbar>
            <Button
              component={Link}
              to='/'
              disableRipple
              style={{
                fontFamily: 'Roboto',
                fontWeight: 200,
                fontSize: 28,
                color: '#000',
              }}
              className={classes.button}
            >
              mymui.
            </Button>
            <Tabs className={classes.tabContainer}>
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/learn'
                label='Learn'
              />
              <Tab
                className={classes.tab}
                component={Link}
                to='/design'
                label='Start'
              />
              {/* <Tab
                className={classes.tab}
                // component={Link}
                component={Login}
                to="/"
                label="Login"
              /> */}
              <Tab
                className={classes.tab}
                component={Link}
                to='/signup'
                label='Signup'
              />
            </Tabs>
            <Login />
          </Toolbar>
        </AppBar>
        <div className={classes.toolBarMargin} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <AppBar position='fixed' style={{ background: '#fff' }}>
        <Toolbar>
          <Button
            component={Link}
            to='/'
            disableRipple
            style={{
              fontFamily: 'Roboto',
              fontWeight: 200,
              fontSize: 28,
              color: '#000',
            }}
            className={classes.button}
          >
            mymui.
          </Button>
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to='/' label='Home' />
            <Tab
              className={classes.tab}
              component={Link}
              to='/learn'
              label='Learn'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/design'
              label='Start'
            />
            {/* <Tab label={`Welcome, ${user.email}`} className={classes.tab} /> */}
            <Tab
              className={classes.tab}
              component={Link}
              to='/dashboard'
              label='User Dashboard'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/logout'
              label='Logout'
              onClick={handleClick}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} />
    </React.Fragment>
  );
}
