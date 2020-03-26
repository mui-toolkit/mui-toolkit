import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { ColorPop } from './index';
import { SketchPicker } from 'react-color';

export const General = props => {
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
          <Typography
            style={{
              marginLeft: '15px',
              color: '#000',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}
          >
            Primary Color
          </Typography>
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
          <Typography
            style={{
              marginLeft: '15px',
              color: '#000',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}
          >
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
          <Typography
            style={{
              marginLeft: '15px',
              color: '#000',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}
          >
            Default Color
          </Typography>
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
          <Typography
            style={{
              marginLeft: '15px',
              color: '#000',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}
          >
            Paper Color
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
