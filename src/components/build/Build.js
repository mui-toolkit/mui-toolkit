import React from 'react';
import { Palette, SaveTheme, BuildNav } from '../build';
import { PreviewButton, PreviewTypography, PreviewAppBar } from '../preview';
import Download from '../Download';

import { Grid, Paper, Typography, Avatar } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  preview: {
    padding: '2em',
  },
  previewPaper: {
    marginTop: '5em',
    textAlign: 'center',
    background: '#fff',
  },
  builderPaper: {
    marginTop: '5em',
    textAlign: 'center',
    background: '#fff',
  },
  expansionPanel: {
    background: '#fff',
  },
}));

export const Build = props => {
  const classes = useStyles();

  const {
    color,
    secondaryColor,
    defaultColor,
    paperColor,
    changeColor,
    changeSecondaryColor,
    changePaperColor,
    changeDefaultColor,
    downloadTheme,
  } = props;

  // needs a themeName pop up so user can name their theme and it will be referenced in the table of Saved Themes.  .collection('CT').doc(`${themeName}`.set({})) should create a new collection in CustomizedThemes with doc name themeName and allow the collection to contain any/all fields

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        {/* BUILD START */}
        <Grid item xs={3} className={classes.selector}>
          <Paper className={classes.builderPaper}>
            <BuildNav />
            <Grid item>
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
            </Grid>
          </Paper>
        </Grid>
        {/* BUILD END */}
        {/* Preview Start */}
        <Grid item xs={9} className={classes.container}>
          <Paper
            className={classes.previewPaper}
            style={{ background: `${defaultColor}` }}
          >
            <PreviewAppBar
              secondaryColor={secondaryColor}
              color={color}
              className={classes.container}
            />
            <Grid item className={classes.preview}>
              <Grid container>
                <Grid item xs={12}>
                  <PreviewButton />
                </Grid>
                <Grid item xs={12}>
                  <PreviewTypography />
                </Grid>
              </Grid>
            </Grid>

            <Download downloadTheme={downloadTheme} />
            <SaveTheme downloadTheme={downloadTheme} />
          </Paper>
        </Grid>
        {/* Preview End */}
      </Grid>
    </section>
  );
};
