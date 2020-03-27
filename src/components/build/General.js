import React, { useState } from 'react';
import { Grid, Typography, Switch, Link } from '@material-ui/core/';
import { ColorPop } from './index';
import { makeStyles } from '@material-ui/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  typography: {
    marginLeft: '15px',
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
}));

export const General = props => {
  const [checked, setChecked] = useState(true);

  const { changeShadow, setShadow, shadowTrue, shadowFalse } = props;

  const handleAnotherChange = event => {
    setChecked(!event.target.checked);
    if (checked) {
      setShadow(shadowTrue);
    } else if (!checked) {
      setShadow(shadowFalse);
    }
  };
  const classes = useStyles();
  console.log('changecolor', props.changeColor);
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
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <Switch
            checked={!checked}
            onChange={handleAnotherChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />

          <Typography className={classes.typography}>Shadows</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
