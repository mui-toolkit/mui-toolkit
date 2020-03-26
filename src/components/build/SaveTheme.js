import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { Alert, AlertTitle } from '@material-ui/lab/';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: 5,
    height: 46,
    padding: 10,
  },
}));

export const SaveTheme = props => {
  const classes = useStyles();

  const { downloadTheme } = props;

  const [open, setOpen] = useState(false);
  const [themeName, setThemeName] = useState('untitled');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = e => {
    setOpen(false);
  };
  const handleSave = e => {
    setOpen(false);
    sendPalette(themeName);
    alert('New Customized Theme Saved');
  };

  const sendPalette = async themeName => {
    console.log(downloadTheme);
    downloadTheme.createdAt = new Date();
    let newTheme = await db
      .collection('CustomizedThemes')
      .doc(`${themeName}`)
      .set({ ...downloadTheme })
      .then(ref => {
        console.log('Added Theme ', `${ref.id}`);
      })
      .catch(function(error) {
        console.log('Error creating a new theme: ', error);
      });
    console.log('Test -> newTheme', newTheme);
  };
  return (
    <div>
      <Button
        variant='outlined'
        onClick={handleClickOpen}
        style={{
          fontFamily: 'Roboto',
          fontSize: 14,
          marginBottom: '2em',
          color: '#f50057',
        }}
        className={classes.button}
      >
        Save <SaveIcon style={{ marginLeft: '5px' }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby='form-dialog-title'
      >
        <Paper style={{ backgroundColor: '#fff' }}>
          <Typography
            id='form-dialog-title'
            align='center'
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'Roboto',
              lineHeight: 3,
            }}
          >
            YOUR THEME
          </Typography>
          <DialogContent>
            <DialogContentText
              style={{
                color: '#000',
                fontSize: 16,
                fontFamily: 'Roboto',
                lineHeight: 3,
              }}
            >
              Name your saved theme something quirky
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='themeName'
              label='themeName'
              type='text'
              value={themeName}
              onChange={e => setThemeName(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCancel}
              style={{
                fontFamily: 'Roboto',
                fontSize: 14,
                marginBottom: '2em',
                color: '#f50057',
              }}
              className={classes.button}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              style={{
                fontFamily: 'Roboto',
                fontSize: 14,
                marginBottom: '2em',
                color: '#3F51B5',
              }}
              className={classes.button}
            >
              Save
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
};
