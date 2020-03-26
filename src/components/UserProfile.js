import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { db } from "../config/firebase";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

function UserProfile(props) {
  const { uid, user } = props;
  console.log("UserProfile -> user", user, uid);
  const [firstName, setFirstName] = useState(`${user.firstName}`);
  const [lastName, setLastName] = useState(`${user.lastName}`);
  const [username, setUsername] = useState(`${user.username}`);
  const [email, setEmail] = useState(`${user.email}`);
  const [password, setPassword] = useState(`${user.password}`);

  const classes = useStyles();
  const handleUpdate = async () => {
    await db
      .collection("Users")
      .doc(`${uid}`)
      .update({
        firstName,
        lastName,
        username,
        email,
        password
      })
      .then(() => {
        console.log("updated user in db,props");
        props.history.push("/");
      });
    alert("Profile Updated");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Edit Profile
          </Typography>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              {user.firstName} {user.lastName}
            </Typography>
            <Grid item xs={12}></Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email address"
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  name="password"
                  label="New Password"
                  type="text"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  id="password"
                  name="password"
                  label="Repeat Password"
                  // test if match
                  fullWidth
                />
              </Grid> */}
              <Grid item xs={12}></Grid>
            </Grid>
            <React.Fragment>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                  className={classes.button}
                >
                  Update Profile
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default withRouter(UserProfile);
