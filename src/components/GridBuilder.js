import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import gridContainer from '.././imgs/gridcontainer.jpg';
import gridItem from '.././imgs/griditem.png';
import twelvecolumns from '.././imgs/12columns.jpg';

const useStyles = makeStyles({
  container: {
    padding: '5em 2em 5em 2em',
  },
  paper: {
    padding: '1em',
    height: '100vh',
  },
});

export default function GridBuilder() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        container
        direction='row'
        // alignItems='center'
        className={classes.container}
        spacing={1}
      >
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <img
              alt='12 column grid'
              src={twelvecolumns}
              style={{ width: '100%', height: '100vh' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              Grids
            </Typography>
            <Typography>Grid Container</Typography>
            <img alt='mui logo' src={gridContainer} style={{ width: '100%' }} />
            <Typography gutterBottom>Grid item</Typography>
            <img alt='mui logo' src={gridItem} style={{ width: '100%' }} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
