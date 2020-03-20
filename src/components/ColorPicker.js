import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import PreviewAppBar from './preview/PreviewAppBar';
import Palette from './Palette';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import saveAs from 'file-saver';
import { makeStyles } from '@material-ui/styles';

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

export const ColorPicker = () => {
  const [color, setColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const classes = useStyles();

  const changeColor = color => {
    setColor(color.hex);
  };

  const changeSecondaryColor = secondaryColor => {
    setSecondaryColor(secondaryColor.hex);
  };

  return (
    <section className={classes.root}>
      <Grid container>
        <div className={classes.selector}>
          <Palette color={color} />
          <SketchPicker color={color} onChange={changeColor} />
          <SketchPicker
            color={secondaryColor}
            onChange={changeSecondaryColor}
          />
        </div>
        <Grid container className={classes.container}>
          <PreviewAppBar
            secondaryColor={secondaryColor}
            color={color}
            className={classes.container}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default ColorPicker;
