import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const PreviewAppBar = () => {
  return (
    <React.Fragment>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography>AppBar (Primary Color)</Typography>
        </Toolbar>
      </AppBar>
      <br />
    </React.Fragment>
  );
};
