import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import muiLogo from '.././imgs/material-ui-logo.png';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: 'black',
    height: '100%'
  },
  title: {
    padding: '1em'
  },
  container: {
    paddingTop: '5em',
    paddingLeft: '200px',
    paddingRight: '200px'
  },
  tab: {
    textIndent: '30px'
  }
});

export default function Learn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.container}
        >

          <Paper>
            <Grid item align='center' className={classes.title}>
              <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
            </Grid>
            <Grid item className={classes.title}>
              <Typography variant="h4" align="center">
                What is Material UI?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" align="center">
                Material UI is a popular React UI Framework with 55.5k stars on
                Github. Visit{' '}
                <Link href="https://material-ui.com/">Material UI</Link> to
                learn more.
              </Typography>
            </Grid>
            <Grid item className={classes.title}>
              <Typography variant="h4" align="center">
                What is mymui?
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.tab} variant='body1'>
                mymui allows you to customize your Material UI theme without
                having to look at the documentation. The interface is user
                friendly, and gives you a step by step guide on the features you
                are customizing. Once finished, you can download the json file
                and copy an paste the code into your own file.
              </Typography>
              <Typography className={classes.tab} variant='body1'>
                mymui utilizes the{' '}
                <Link href='https://material-ui.com/customization/theming/'>
                  Theme Provider
                </Link>{' '}
                component that allows you to inject a theme into your
                application. To learn more about Material UI{' '}
                <Link href='https://material-ui.com/customization/theming/'>
                  Theming
                </Link>{' '}
                and the{' '}
                <Link href='https://material-ui.com/customization/theming/'>
                  Theme Provider
                </Link>{' '}
                component, visit the documentation{' '}
                <Link href='https://material-ui.com/customization/theming/'>
                  here
                </Link>
                .
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
}
