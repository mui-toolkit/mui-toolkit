import React from 'react';
import { makeStyles } from '@material-ui/styles';
import twelvecolumns from '../../imgs/12columns.jpg';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '5em 2em 5em 2em',
  },
  paper: {
    padding: '1em',
    height: '100vh',
  },
  paperGrid: {
    // height: '100vh',
    backgroundImage: `url(${twelvecolumns})`,
    backgroundSize: '8.34%',
    border: '2px dashed #da0000',
  },
  box: {
    border: '2px solid #818181',
    height: '100px',
    padding: '3em 0 5em 0',
    backgroundColor: '#fff',
    opacity: 0.5,
    // width: '100%',
  },
  containerStyle: {
    border: '2px dashed #da0000',
  },
});

export default function DragNDrop() {
  const classes = useStyles();

  return <div></div>;
}
