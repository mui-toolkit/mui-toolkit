import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import muiLogo from '.././imgs/material-ui-logo.png';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  title: {
    padding: '1em',
  },
  container: {
    paddingLeft: '200px',
    paddingRight: '200px',
  },
  tab: {
    textIndent: '30px',
  },
});

export default function Learn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.container}
      >
        <Grid item align='center' className={classes.title}>
          <img alt='mui logo' src={muiLogo} />
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant='h4' align='center'>
            What is Material UI?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            Material UI is a popular React UI Framework with 55.5k stars on
            Github. Visit <a href='https://material-ui.com/'>Material UI</a> to
            learn more.
          </Typography>
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant='h4' align='center'>
            What is MUI toolkit?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            <div className={classes.tab}>
              MUI toolkit allows you to customize your Material UI theme without
              having to look at the documentation. The interface is user
              friendly, and gives you a step by step guide on the features you
              are customizing. Once finished, you can download the json file and
              copy an paste the code into your own file.
            </div>
            <p className={classes.tab}>
              MUI toolkit utilizes the{' '}
              <a href='https://material-ui.com/customization/theming/'>
                Theme Provider
              </a>{' '}
              component that allows you to inject a theme into your application.
              To learn more about Material UI{' '}
              <a href='https://material-ui.com/customization/theming/'>
                Theming
              </a>{' '}
              and the{' '}
              <a href='https://material-ui.com/customization/theming/'>
                Theme Provider
              </a>{' '}
              component, visit the documentation{' '}
              <a href='https://material-ui.com/customization/theming/'>here</a>.
            </p>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
