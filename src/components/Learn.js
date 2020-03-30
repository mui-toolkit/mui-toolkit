import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import muiLogo from '.././imgs/material-ui-logo.png';
import Grid from '@material-ui/core/Grid';
import { Typography, Paper, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: 'black',
    height: '100%',
    marginBottom: '10em',
  },
  title: {
    padding: '1em',
  },
  container: {
    paddingTop: '5em',
    paddingLeft: '200px',
    paddingRight: '200px',
  },
  tab: {
    textIndent: '30px',
  },
  paragraph: {
    color: '#818181',
  },
  hr: {
    marginTop: '8em',
    marginBottom: '2em',
  },
  contentLinks: {
    color: '#818181',
    fontSize: 20,
    lineHeight: 2,
    fontFamily: 'Roboto',
    fontWeight: 100,
  },
});

export default function Learn() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant='h3' align='left' gutterBottom>
              Learn
            </Typography>
            <Typography
              variant='body1'
              align='left'
              className={classes.paragraph}
              gutterBottom
            >
              New to mymui? This information page will give you guidance on all
              the features that mymui has to offer. Use this page as a resource
              for setting up you're environment and get started designing your
              custome Material-UI theme.
            </Typography>
            <br />
            <Typography> CONTENTS</Typography>
            <Link
              className={classes.contentLinks}
              href='https://material-ui.com/customization/theming/'
            >
              What is Material-Ui?
            </Link>
            <br />
            <Link
              className={classes.contentLinks}
              href='https://material-ui.com/customization/theming/'
            >
              What is myui?
            </Link>
            <br />
            <Link
              className={classes.contentLinks}
              href='https://material-ui.com/customization/theming/'
            >
              Dowload
            </Link>
            <br />
            <Link
              className={classes.contentLinks}
              href='https://material-ui.com/customization/theming/'
            >
              Save
            </Link>
            <br />
            <Link
              className={classes.contentLinks}
              href='https://material-ui.com/customization/theming/'
            >
              Share
            </Link>
          </Grid>
          <Grid item align='center' className={classes.title} xs={6}>
            <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
          </Grid>
        </Grid>
        <hr className={classes.hr} />
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant='h3' align='left' gutterBottom>
              Material-UI
            </Typography>
            <Typography gutterBottom style={{ fontSize: 20 }}>
              {' '}
              What is material-ui?
            </Typography>
            <Typography
              variant='body1'
              align='left'
              gutterBottom
              className={classes.paragraph}
            >
              Material UI is a popular React UI Framework with 55.5k stars on
              Github. Material UI has created what's called a{' '}
              <Link href='https://material-ui.com/customization/theming/'>
                Theme Provider
              </Link>{' '}
              component that allows you to inject a theme into your application.
              <br />
              <br />
              ThemeProvider relies on the context feature of React in order to
              pass your custom theme down to the components. This means the
              ThemeProvider component will need to be the parent component that
              wraps all your other components you want styled. This feature
              allows for less in-line styling and keeps a consistent style
              throughout your application. Visit{' '}
              <Link href='https://material-ui.com/customization/theming/'>
                Material UI
              </Link>{' '}
              to learn more about Theming.
            </Typography>
          </Grid>
          <Grid item align='center' className={classes.title} xs={6}>
            <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
          </Grid>
        </Grid>
        <hr className={classes.hr} />
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant='h3' align='left' gutterBottom>
              mymui.
            </Typography>
            <Typography style={{ fontSize: 20 }} gutterBottom>
              What is mymui?
            </Typography>
            <Typography
              variant='body1'
              align='left'
              className={classes.paragraph}
              gutterBottom
            >
              mymui allows you to customize your Material UI theme without
              having to look at the documentation. The interface is user
              friendly, and gives you a step by step guide on the features you
              are customizing. Once finished, you can download the json file and
              copy and paste the code into your own file.
            </Typography>
          </Grid>
          <Grid item align='center' className={classes.title} xs={6}>
            <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
          </Grid>
        </Grid>
        <hr className={classes.hr} />
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant='h3' align='left' gutterBottom>
              Download
            </Typography>
            <Typography style={{ fontSize: 20 }} gutterBottom>
              What do I do with my download?
            </Typography>
            <Typography
              variant='body1'
              align='left'
              className={classes.paragraph}
              gutterBottom
            >
              Once downloaded, open up the json file and copy the object into
              your 'createMuiTheme' function. This will generate a theme based
              on the object you copied and pasted into it.
              <br />
              <br />
              Visit the{' '}
              <Link href='https://material-ui.com/customization/theming/#api'>
                Material UI API
              </Link>{' '}
              documentation to understand more about how this works.
            </Typography>
          </Grid>
          <Grid item align='center' className={classes.title} xs={6}>
            <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
          </Grid>
        </Grid>
        <hr className={classes.hr} />
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant='h3' align='left' gutterBottom>
              Save
            </Typography>
            <Typography style={{ fontSize: 20 }} gutterBottom>
              Saving your themes.
            </Typography>
            <Typography
              variant='body1'
              align='left'
              className={classes.paragraph}
              gutterBottom
            >
              mymui allows signed up users to save their progress. As a signed
              in user, you're themes will be stored in a user dashboard where
              you can save, edit, preview, and delete your themes.
            </Typography>
          </Grid>
          <Grid item align='center' className={classes.title} xs={6}>
            <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
          </Grid>
        </Grid>
        <hr className={classes.hr} />
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.container}
        >
          <Grid item className={classes.title} xs={6}>
            <Typography variant='h3' align='left' gutterBottom>
              Share
            </Typography>
            <Typography style={{ fontSize: 20 }} gutterBottom>
              Share and Explore.
            </Typography>
            <Typography
              variant='body1'
              align='left'
              className={classes.paragraph}
              gutterBottom
            >
              Upload and share your custom theme in mymui's explore page. The
              explore page allows users to view, star, and bookmark themes that
              inspire them. The explore page is a source of inspiration to get
              started on you're custom Material-UI theme.
            </Typography>
          </Grid>
          <Grid item align='center' className={classes.title} xs={6}>
            <img alt='mui logo' src={muiLogo} style={{ width: '20%' }} />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
