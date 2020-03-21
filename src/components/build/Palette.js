import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SketchPicker } from 'react-color';

export const Palette = props => {
  console.log('PROPS ====', props);

  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid item>
          <p>Primary color is {props.color} </p>
          <SketchPicker color={props.color} onChange={props.changeColor} />
        </Grid>
        <Grid item>
          <p>Secondary color is {props.secondaryColor}</p>
          <SketchPicker
            color={props.secondaryColor}
            onChange={props.changeSecondaryColor}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Palette;
