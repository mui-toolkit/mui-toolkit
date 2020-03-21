import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { GridListTile } from '@material-ui/core';
import firebase from 'firebase-app';
import db from './Home';

const useStyles = makeStyles(theme => ({}));

export function Test(props) {
  const palette = {}; // import this from build
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  palette.primary = primary;
  palette.secondary = secondary;

  const handleSubmit = e => {
    e.preventDefault();
    alert('button fired');
    let newTheme = db
      .collection('CustomizedThemes')
      .add({
        palette
      })
      .then(ref => {
        console.log('Added Theme ', ref.id);
      });
    console.log('Test -> newTheme', newTheme);
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
          style={{ maxWidth: '20em' }}
          justify="center"
          alignItems="center"
        >
          <Grid item container justify="center">
            <TextField
              label="Palette Primary"
              id="primary"
              value={primary}
              onChange={e => setPrimary(e.target.value)}
            />
            <TextField
              label="Palette Secondary"
              id="secondary"
              value={secondary}
              onChange={e => setSecondary(e.target.value)}
            />
          </Grid>
          <Button onSubmit={handleSubmit}>
            <input type="submit" value="Post object" onSubmit={handleSubmit} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Test;
