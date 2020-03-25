import React from 'react';
import { SketchPicker } from 'react-color';
import {
  Typography,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  TextField,
} from '@material-ui/core';

export const CustomTypography = props => {
  // const [age, setAge] = React.useState('');

  // const handleChange = event => {
  //   setAge(event.target.value);
  // };

  return (
    <React.Fragment>
      <Typography>Font Family</Typography>
      <p>
        {/* <InputLabel id='fontFamily'>Font Family</InputLabel> */}
        <Select
          labelId='demo-simple-select-label'
          id='fontFamily'
          value={props.fontStyle.fontFamily}
          onChange={event =>
            props.setFontStyle({
              ...props.fontStyle,
              fontFamily: event.target.value,
            })
          }
        >
          <MenuItem value={'Roboto'}>Roboto</MenuItem>
          <MenuItem value={'"Helvetica Neue"'}>Helvetica</MenuItem>
          <MenuItem value={'sans-serif'}>San-Serif</MenuItem>
          <MenuItem value={'"Segoe UI"'}>Segoe Ui</MenuItem>
          <MenuItem value={'Arial'}>Arial</MenuItem>
          <MenuItem value={'-apple-system'}>Apple System</MenuItem>
          <MenuItem value={'BlinkMacSystemFont'}>Mac Stystem</MenuItem>
        </Select>
      </p>
      <Typography>Font Size (1-39)</Typography>
      <form
        onChange={event =>
          event.target.value &&
          Number(event.target.value) < 40 &&
          Number(event.target.value) > 0
            ? props.setFontStyle({
                ...props.fontStyle,
                fontSize: Number(event.target.value),
              })
            : null
        }
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-basic'
          defaultValue={`${props.fontStyle.fontSize}`}
        />
      </form>
    </React.Fragment>
  );
};
