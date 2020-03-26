import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Paper, Grid } from '@material-ui/core';

export const PreviewTypography = () => {
  const useStyles = makeStyles(theme => ({
    paper: {
      background: '',
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant='h4' gutterBottom>
          TYPOGRAPHY
        </Typography>
        <Grid container>
          <Grid item xs={6} align='right'>
            <Typography variant='subtitle1' style={{ marginRight: '1em' }}>
              | Primary Text Color |
            </Typography>
          </Grid>
          <Grid item xs={6} align='left'>
            <Typography
              variant='subtitle1'
              color='textSecondary'
              style={{ marginLeft: '1em' }}
            >
              | Secondary Text Color |
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='h1'>h1. Heading</Typography>
        <Typography variant='subtitle1' gutterBottom>
          (h1 in PRIMARY text color)
        </Typography>
        <Typography variant='h2' color='textSecondary'>
          h2. Heading
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          (h2 in SECONDARY text color)
        </Typography>
        <Typography variant='h3'>h3. Heading</Typography>
        <Typography variant='subtitle1' gutterBottom>
          (h3 in Primary text color)
        </Typography>
        <Typography variant='h4' color='textSecondary'>
          h4. Heading
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          (h4 in SECONDARY text color)
        </Typography>
        <Typography variant='h5'>h5. Heading</Typography>
        <Typography variant='subtitle1' gutterBottom>
          (h5 in PRIMARY text color)
        </Typography>
        <Typography variant='h6' color='textSecondary'>
          h6. Heading
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          (h6 in SECONDARY text color)
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='body2' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='button' display='block' gutterBottom>
          button text
        </Typography>
        <Typography variant='caption' display='block' gutterBottom>
          caption text
        </Typography>
        <Typography variant='overline' display='block' gutterBottom>
          overline text
        </Typography>
      </Paper>
    </React.Fragment>
  );
};
