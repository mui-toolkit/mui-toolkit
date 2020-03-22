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
import Button from '@material-ui/core/Button';
import PreviewButton from '../preview/PreviewButton';
import PrevTypography from '../preview/PrevTypography';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flex: 3,
    // flexDirection: 'column',
  },
  buttonRoot: {
    padding: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  selector: {
    // alignSelf: 'center',
    margin: theme.spacing.unit,
  },
  container: {
    // align: 'center',
    flex: 1,
    overflow: 'auto',
    width: '50%',
    // background: '#000',
  },
  builderPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  previewPaper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    // height: '100vh',
    // background: '#000',
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
          <Paper className={classes.builderPaper}>
            <Palette
              color={color}
              secondaryColor={secondaryColor}
              changeColor={changeColor}
              changeSecondaryColor={changeSecondaryColor}
            />
            {/* Theme Builder End */}
          </Paper>
        </Grid>
        <Grid item className={classes.container}>
          <Paper className={classes.previewPaper}>
            {/* Preview Start */}
            <Grid item>
              <PreviewAppBar
                secondaryColor={secondaryColor}
                color={color}
                className={classes.container}
              />
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <PreviewButton />
                </Grid>
                <Grid item xs={12}>
                  <PrevTypography />
                </Grid>
              </Grid>
            </Grid>

            <button onClick={sendPalette}>SEND</button>
            <Download customTheme={customTheme} />
            {/* Preview End */}
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Build;
