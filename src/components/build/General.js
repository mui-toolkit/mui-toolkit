import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { ColorPop } from './index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  typography: {
    marginLeft: '15px',
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
}));

export const General = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction='column' justify='flex'>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <ColorPop
            color={props.color}
            changeColor={props.changeColor}
            displayColorPicker={props.displayColorPicker}
            changeColorPickerDisplayed={() =>
              props.changeColorPickerDisplayed('primary')
            }
          />
          <Typography className={classes.typography}>Primary Color</Typography>
        </Grid>

        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <ColorPop
            color={props.secondaryColor}
            changeColor={props.changeSecondaryColor}
            displayColorPicker={props.displaySecondaryColorPicker}
            changeColorPickerDisplayed={() =>
              props.changeColorPickerDisplayed('secondary')
            }
          />
          <Typography className={classes.typography}>
            Secondary Color
          </Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <ColorPop
            color={props.defaultColor}
            changeColor={props.changeDefaultColor}
            displayColorPicker={props.displayDefaultColorPicker}
            changeColorPickerDisplayed={() =>
              props.changeColorPickerDisplayed('default')
            }
          />
          <Typography className={classes.typography}>Default Color</Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <ColorPop
            color={props.paperColor}
            changeColor={props.changePaperColor}
            displayColorPicker={props.displayPaperColorPicker}
            changeColorPickerDisplayed={() =>
              props.changeColorPickerDisplayed('paper')
            }
          />
          <Typography className={classes.typography}>Paper Color</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
