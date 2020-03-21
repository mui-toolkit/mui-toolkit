import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
// import { GridListTile } from '@material-ui/core';
// import firebase from "firebase-app";
// import db from "./Home";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "../config/firebase";

//TESTING FIREBASE DATABASE CONNECTION HERE, WE WILL MOVE THIS
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const useStyles = makeStyles(theme => ({}));

export function Test(props) {
  // const palette = {}; // import this from build
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  // palette.primary = primary;
  // palette.secondary = secondary;
  const palette = { primary, secondary };

  console.log("Test -> palette", palette);

  /// TESTING CONNECTION TO CUSTOMIZEDTHEMES
  // db.collection("CustomizedThemes")
  //   .get()
  //   .then(snapshot => {
  //     snapshot.docs.forEach(doc => {
  //       console.log("Test -> doc", doc.data());
  //       // theme.palette = doc.data().palette;
  //       // theme.typography = doc.data().typography;
  //     });
  //   })
  //   .catch(err => {
  //     console.log("Error getting documents", err);
  //   });
  ///

  const handleSubmit = e => {
    e.preventDefault();
    alert("button fired");
    let newTheme = db
      .collection("CustomizedThemes")
      .add({
        palette
      })
      .then(ref => {
        console.log("Added Theme ", ref.id);
      });
    console.log("Test -> newTheme", newTheme);
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item container direction="column">
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h2">Customized Theme</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{ maxWidth: "20em" }}
          justify="center"
          alignItems="center"
        >
          {/* <Grid item container justify="center"> */}
          <form onSubmit={handleSubmit}>
            <Input
              label="Palette Primary"
              id="primary"
              value={primary}
              onChange={e => setPrimary(e.target.value)}
            />
            <Input
              label="Palette Secondary"
              id="secondary"
              value={secondary}
              onChange={e => setSecondary(e.target.value)}
            />
            {/* </Grid> */}
            <Button>
              <input type="submit" value="Post object" />
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Test;
