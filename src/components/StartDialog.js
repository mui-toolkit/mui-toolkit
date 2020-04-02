import React from 'react';
import { Link } from 'react-router-dom';
import Links from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import themingTool from '.././imgs/themingtool.png';
import gridBuilder from '.././imgs/gridbuilder.png';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Grid,
  Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({}));

export default function StartDialog(props) {
  const classes = useStyles();
  const { handleClose, open } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        fullWidth={true}
        maxWidth={true}
      >
        <DialogContent syle={{ width: '100px' }}>
          <Grid container align='center' spacing={2}>
            <Grid item xs={6}>
              <Button
                component={Link}
                to='/design'
                disableRipple
                variant='contained'
                color='primary'
                style={{ marginBottom: '1em' }}
                onClick={handleClose}
              >
                STYLE A THEME
              </Button>

              <Links component={Link} to='/design' onClick={handleClose}>
                <img
                  alt='theming tool'
                  src={themingTool}
                  style={{ width: '100%' }}
                />
              </Links>

              <Typography
                gutterBottom
                style={{ marginTop: '1em', color: '#818181' }}
              >
                Style your Material-UI Theme Provider component with our styling
                tool.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                color='secondary'
                style={{ marginBottom: '1em' }}
                component={Link}
                to='/gridbuilder'
                disableRipple
                onClick={handleClose}
              >
                BUILD A GRID LAYOUT
              </Button>
              <Links component={Link} to='/gridbuilder'>
                <img
                  alt='grid builder'
                  src={gridBuilder}
                  style={{ width: '100%' }}
                  onClick={handleClose}
                />
              </Links>
              <Typography
                gutterBottom
                style={{ marginTop: '1em', color: '#818181' }}
              >
                Build Material-UI grid layouts with our Grid Builder.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
