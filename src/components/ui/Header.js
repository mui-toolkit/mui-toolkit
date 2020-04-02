import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import 'firebase/auth';
import Login from '../Login';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '20px',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: 5,
    height: 46,
    padding: 10
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '1rem',
    minWidth: 10,
    marginLeft: '25px',
    color: '#000',
    fontFamily: 'Roboto'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const handleClick = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('user signed out', props);
        window.location = '/';
        return <Redirect to="/" />;
      });
  };
  if (!props.user.loggedIn) {
    return (
      <React.Fragment>
        <AppBar position="fixed" style={{ background: '#fff' }}>
          <Toolbar>
            <Button
              component={Link}
              to="/"
              disableRipple
              style={{
                fontFamily: 'Roboto',
                fontWeight: 200,
                fontSize: 28,
                color: '#000'
              }}
              className={classes.button}
            >
              mymui.
            </Button>
            <Tabs value={false} className={classes.tabContainer}>
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/learn"
                label="Learn"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/design"
                label="Create"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/explore"
                label="Explore"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/signup"
                label="Signup"
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
      <AppBar position="fixed" style={{ background: '#fff' }}>
        <Toolbar>
          <Button
            component={Link}
            to="/"
            disableRipple
            style={{
              fontFamily: 'Roboto',
              fontWeight: 200,
              fontSize: 28,
              color: '#000'
            }}
            className={classes.button}
          >
            mymui.
          </Button>
          <Grid className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
              className={classes.tab}
              component={Link}
              to="/learn"
              label="Learn"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/design"
              label="Create"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to="/explore"
              label="Explore"
            />
            {/* <Tab label={`Welcome, ${user.email}`} className={classes.tab} /> */}
            <Tab
              className={classes.tab}
              component={Link}
              to="/dashboard"
              label="Dashboard"
            />
            {props.user.admin && (
              <Tab
                className={classes.tab}
                component={Link}
                to="/admin"
                label="Admin"
              />
            )}
            <Tab
              className={classes.tab}
              component={Link}
              to="/"
              label="Logout"
              onClick={handleClick}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} />
    </React.Fragment>
  );
}
