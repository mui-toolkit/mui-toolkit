import React, { useState, useEffect, useCallback, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";
import "firebase/auth";
import { unaryExpression } from "@babel/types";

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
  const [error, setError] = useState("");
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
          <Grid container direction="row" style={{ marginTop: "10em" }}>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {" "}
              <Typography variant="h4">Welcome, guest </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Grid container direction="row" style={{ marginTop: "10em" }}>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {" "}
          <Typography variant="h5">Welcome, {user.email} </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
