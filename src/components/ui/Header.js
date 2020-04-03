import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "firebase";
import "firebase/auth";
import Login from "../Login";
import Grid from "@material-ui/core/Grid";
import StartDialog from "../StartDialog";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "transparent"
    },
    fontWeight: 400,
    textTransform: "none",
    borderRadius: 5,
    height: 46,
    padding: 10
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    textTransform: "none",
    fontWeight: 400,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px",
    color: "#000",
    fontFamily: "Roboto"
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = e => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.location = "/";
        return <Redirect to="/" />;
      });
  };
  if (!props.user.loggedIn) {
    return (
      <React.Fragment>
        <AppBar position="fixed" style={{ background: "#fff" }}>
          <Toolbar>
            <Button
              component={Link}
              to="/"
              disableRipple
              style={{
                fontFamily: "Roboto",
                fontWeight: 200,
                fontSize: 28,
                color: "#000"
              }}
              className={classes.button}
            >
              mymui.
            </Button>
            <Tabs value={false} className={classes.tabContainer}>
              <Tab
                className={classes.tab}
                component={Link}
                to="/learn"
                label="Learn"
              />
              <Tab
                className={classes.tab}
                onClick={handleClickOpen}
                label="Create"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to={{
                  pathname: "/explore",
                  state: {
                    themes: [
                      {
                        themeId: 0,
                        themeName:
                          "You need to log in to have access to these features"
                      }
                    ],
                    starredThemes: [
                      {
                        themeId: 0,
                        themeName:
                          "You need to log in to have access to these features"
                      }
                    ],
                    bookmarkedThemes: [
                      {
                        themeId: 0,
                        themeName:
                          "You need to log in to have access to these features"
                      }
                    ],
                    signedInUserId: "guest",
                    userName: "guest"
                  }
                }}
                label="Explore"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/signup"
                label="Sign up"
              />
            </Tabs>
            <Login />
          </Toolbar>
        </AppBar>
        <div className={classes.toolBarMargin} />
        <StartDialog handleClose={handleClose} open={open} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ background: "#fff" }}>
        <Toolbar>
          <Button
            component={Link}
            to="/"
            disableRipple
            style={{
              fontFamily: "Roboto",
              fontWeight: 200,
              fontSize: 28,
              color: "#000"
            }}
            className={classes.button}
          >
            mymui.
          </Button>
          <Grid className={classes.tabContainer}>
            <Tab
              className={classes.tab}
              component={Link}
              to="/learn"
              label="Learn"
            />
            <Tab
              className={classes.tab}
              onClick={handleClickOpen}
              label="Create"
            />
            <Tab
              className={classes.tab}
              component={Link}
              to={{
                pathname: "/explore",
                state: {
                  themes: [
                    {
                      themeId: 0,
                      themeName: "logged in"
                    }
                  ],
                  starredThemes: [
                    {
                      themeId: 0,
                      themeName: "logged in"
                    }
                  ],
                  bookmarkedThemes: [
                    {
                      themeId: 0,
                      themeName: "logged in"
                    }
                  ],
                  signedInUserId: props.user.uid,
                  userName: props.user.email,
                  status: "loggedIn"
                }
              }}
              label="Explore"
            />
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
              label="Log out"
              onClick={handleClick}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} />
      <StartDialog handleClose={handleClose} open={open} />
    </React.Fragment>
  );
}
