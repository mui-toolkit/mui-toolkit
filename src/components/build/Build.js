import React, { useState } from 'react';
import PreviewAppBar from '../preview/PreviewAppBar';
import Palette from './Palette';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import saveAs from 'file-saver';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Download from '../Download';
import { firebase, db } from '../../config/firebase';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
  },
  selector: {
    alignSelf: 'center',
    margin: theme.spacing.unit,
  },
  container: {
    align: 'center',
    flex: 1,
    overflow: 'auto',
    width: '50%',
  },
  desktop: {},
  mobile: {
    maxWidth: 350,
    maxHeight: 650,
  },
}));

export const Build = () => {
  const [color, setColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const classes = useStyles();

  const changeColor = color => {
    setColor(color.hex);
  };

  const changeSecondaryColor = secondaryColor => {
    setSecondaryColor(secondaryColor.hex);
  };

  let customTheme = {
    palette: {
      primary: {
        main: `${color}`,
      },
      secondary: { main: `${secondaryColor}` },
    },
  };

  const sendPalette = () => {
    console.log(customTheme);
    alert('New Customized Theme Sent');
    let newTheme = db
      .collection('CustomizedThemes')
      .add({
        // palette: customTheme.palette
        customTheme,
      })
      .then(ref => {
        console.log('Added Theme ', ref.id);
      });
    console.log('Test -> newTheme', newTheme);
  };

  return (
    <section className={classes.root}>
      <Grid container>
        <Grid item className={classes.selector}>
          {/* Theme Builder Start */}
          <Palette
            color={color}
            secondaryColor={secondaryColor}
            changeColor={changeColor}
            changeSecondaryColor={changeSecondaryColor}
          />
          {/* Theme Builder End */}
        </Grid>
        <Grid item className={classes.container}>
          {/* Preview Start */}
          <PreviewAppBar
            secondaryColor={secondaryColor}
            color={color}
            className={classes.container}
          />
          <button onClick={sendPalette}>SEND</button>
          <Download customTheme={customTheme} />
          {/* Preview End */}
        </Grid>
      </Grid>
    </section>
  );
};

export default Build;
