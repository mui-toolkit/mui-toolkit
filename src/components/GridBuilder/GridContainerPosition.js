import React from 'react';
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

export const GridContainerPosition = props => {
  const {
    direction,
    setDirection,
    justify,
    setJustify,
    alignItems,
    setAlignItems,
  } = props;

  const handleDirectionChange = event => {
    setDirection(event.target.value);
  };
  const handleJustifyChange = event => {
    setJustify(event.target.value);
  };
  const handleAlignChange = event => {
    setAlignItems(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography
        variant='h6'
        style={{
          fontWeight: 400,
          color: '#9eb341',
          border: '2px dashed #da0000',
          padding: '0px 0px 0px 3px',
        }}
        gutterBottom
      >
        Grid Container Prop Settings
      </Typography>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Direction</FormLabel>
        <RadioGroup
          row
          aria-label='direction'
          name='direction'
          value={direction}
          onChange={handleDirectionChange}
        >
          <FormControlLabel value='row' control={<Radio />} label='row' />
          <FormControlLabel
            value='row-reverse'
            control={<Radio />}
            label='row-reverse'
          />
          <FormControlLabel value='column' control={<Radio />} label='column' />
          <FormControlLabel
            value='column-reverse'
            control={<Radio />}
            label='column-reverse'
          />
          <FormControlLabel value='' control={<Radio />} label='none' />
        </RadioGroup>
        <FormLabel component='legend'>Justify</FormLabel>
        <RadioGroup
          row
          aria-label='justify'
          name='justify'
          value={justify}
          onChange={handleJustifyChange}
        >
          <FormControlLabel
            value='flex-start'
            control={<Radio />}
            label='flex-start'
          />
          <FormControlLabel value='center' control={<Radio />} label='center' />
          <FormControlLabel
            value='flex-end'
            control={<Radio />}
            label='flex-end'
          />
          <FormControlLabel
            value='space-between'
            control={<Radio />}
            label='space-between'
          />
          <FormControlLabel
            value='space-around'
            control={<Radio />}
            label='space-around'
          />
          <FormControlLabel
            value='space-evenly'
            control={<Radio />}
            label='space-evenly'
          />
          <FormControlLabel value='' control={<Radio />} label='none' />
        </RadioGroup>

        <FormLabel component='legend'>Align Items</FormLabel>
        <RadioGroup
          row
          aria-label='align-items'
          name='align-items'
          value={alignItems}
          onChange={handleAlignChange}
        >
          <FormControlLabel
            value='flex-start'
            control={<Radio />}
            label='flex-start'
          />
          <FormControlLabel value='center' control={<Radio />} label='center' />
          <FormControlLabel
            value='flex-end'
            control={<Radio />}
            label='flex-end'
          />
          <FormControlLabel
            value='stretch'
            control={<Radio />}
            label='stretch'
          />
          <FormControlLabel
            value='baseline'
            control={<Radio />}
            label='baseline'
          />
          <FormControlLabel value='' control={<Radio />} label='none' />
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};
