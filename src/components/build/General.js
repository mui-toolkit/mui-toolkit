import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { ColorPop } from './index';
import { SketchPicker } from 'react-color';

export const General = props => {
  console.log('PROPS ====', props);

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
            changeColorPickerDisplayed={props.changeColorPickerDisplayed}
          />
          <Typography style={{ marginLeft: '15px' }}>Primary Color</Typography>
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
            changeColorPickerDisplayed={
              props.changeSecondaryColorPickerDisplayed
            }
          />
          <Typography style={{ marginLeft: '15px' }}>
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
            changeColorPickerDisplayed={props.changeDefaultColorPickerDisplayed}
          />
          <Typography style={{ marginLeft: '15px' }}>Default Color</Typography>
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
            changeColorPickerDisplayed={props.changePaperColorPickerDisplayed}
          />
          <Typography style={{ marginLeft: '15px' }}>Paper Color</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
