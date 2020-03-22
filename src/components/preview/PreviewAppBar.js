import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function PreviewAppBar(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flex: 3,
      flexDirection: 'column',
      marginTop: '1em',
    },
    selector: {
      alignSelf: 'center',
      margin: theme.spacing.unit,
    },
    container: {
      alignSelf: 'center',
      flex: 1,
      margin: theme.spacing.unit,
      overflow: 'auto',
      width: '100%',
    },
    primary: {
      background: `${props.color}`,
    },
    secondary: {
      background: `${props.secondaryColor}`,
    },
    toolBarMargin: {
      ...theme.mixins.toolbar,
    },
  }));
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <AppBar position={'sticky'} className={classes.primary}>
        <Toolbar>
          <Typography>AppBar (Primary Color)</Typography>
        </Toolbar>
      </AppBar>
      <br />
    </section>
  );
}
