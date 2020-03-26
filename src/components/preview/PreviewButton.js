import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const PreviewButton = props => {
  const useStyles = makeStyles(theme => ({
    buttonRoot: {
      padding: theme.spacing.unit,
    },
    button: {
      margin: theme.spacing.unit,
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.buttonRoot}>
        <Typography variant='h4'>BUTTONS</Typography>
        <Button className={classes.button}>Default</Button>
        <Button
          color='primary'
          className={classes.button}
          style={{ fontSize: 14 }}
        >
          Primary
        </Button>
        <Button color='secondary' className={classes.button}>
          Secondary
        </Button>
        <Button disabled className={classes.button}>
          Disabled
        </Button>
        <Button href='#text-buttons' className={classes.button}>
          Link
        </Button>
      </div>
      <div className={classes.buttonRoot}>
        <Button className={classes.button} variant='outlined'>
          Default
        </Button>
        <Button color='primary' className={classes.button} variant='outlined'>
          Primary
        </Button>
        <Button color='secondary' className={classes.button} variant='outlined'>
          Secondary
        </Button>
        <Button disabled className={classes.button} variant='outlined'>
          Disabled
        </Button>
        <Button
          href='#text-buttons'
          className={classes.button}
          variant='outlined'
        >
          Link
        </Button>
      </div>
      <div className={classes.buttonRoot}>
        <Button className={classes.button} variant='contained'>
          Default
        </Button>
        <Button color='primary' className={classes.button} variant='contained'>
          Primary
        </Button>
        <Button
          color='secondary'
          className={classes.button}
          variant='contained'
        >
          Secondary
        </Button>
        <Button disabled className={classes.button} variant='contained'>
          Disabled
        </Button>
        <Button
          href='#text-buttons'
          className={classes.button}
          variant='contained'
        >
          Link
        </Button>
      </div>
    </React.Fragment>
  );
};
