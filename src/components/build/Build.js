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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flex: 3,
    // flexDirection: 'column',
  },
  // buttonRoot: {
  //   padding: theme.spacing.unit,
  // },
  // selector: {
  //   // alignSelf: 'center',
  //   // margin: theme.spacing.unit,
  // },
  container: {
    // align: 'center',
    flex: 1,
    overflow: 'auto',
    width: '50%',
    // background: '#000',
  },
  builderPaper: {
    padding: '1em',
    marginTop: '5em',
    textAlign: 'center',
    background: '#fff',
    // color: theme.palette.text.secondary,
  },
  previewPaper: {
    padding: '5em',
    marginTop: '2em',
    textAlign: 'center',
    background: '#fff',

    // color: theme.palette.text.secondary,
    // height: '100vh',
    // background: '#000',
  },
}));

export const Build = () => {
  const [color, setColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [defaultColor, setDefaultColor] = useState('');
  const [paperColor, setPaperColor] = useState('');
  const classes = useStyles();

  const changeColor = color => {
    setColor(color.hex);
  };

  const changeSecondaryColor = secondaryColor => {
    setSecondaryColor(secondaryColor.hex);
  };

  const changeDefaultColor = defaultColor => {
    setDefaultColor(defaultColor.hex);
  };
  const changePaperColor = paperColor => {
    setPaperColor(paperColor.hex);
  };

  let downloadTheme = {
    palette: {
      primary: { main: `${color}` ? `${color}` : '#3f51b5' },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057',
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`,
      },
    },
  };

  const customTheme = createMuiTheme({
    palette: {
      primary: { main: `${color}` ? `${color}` : '#3f51b5' },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057',
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`,
      },
    },
  });

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
              defaultColor={defaultColor}
              paperColor={paperColor}
              changeColor={changeColor}
              changeSecondaryColor={changeSecondaryColor}
              changeDefaultColor={changeDefaultColor}
              changePaperColor={changePaperColor}
            />
            {/* Theme Builder End */}
          </Paper>
        </Grid>
        <Grid item className={classes.container}>
          <ThemeProvider theme={customTheme}>
            <Paper
              className={classes.previewPaper}
              style={{ background: `${defaultColor}` }}
            >
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
              <Download customTheme={downloadTheme} />
              {/* Preview End */}
            </Paper>
          </ThemeProvider>
        </Grid>
      </Grid>
    </section>
  );
};

export default Build;
