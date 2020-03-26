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
  Grid,
  Button,
  Link,
} from '@material-ui/core';
import { ColorPop } from './index';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const CustomTypography = props => {
  // const [age, setAge] = React.useState('');

  // const handleChange = event => {
  //   setAge(event.target.value);
  // };

  return (
    <React.Fragment>
      <Grid container direction='column' justify='flex'>
        <Grid
          container
          direction='row'
          style={{ marginBottom: '1em' }}
          justify='flex-start'
          alignItems='center'
        >
          <Grid item xs={6} align='left'>
            <Typography
              style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}
            >
              Font Family
            </Typography>
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <Grid item xs={6} align='left'>
            <Typography
              style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}
            >
              Font Size (1-39)
            </Typography>
          </Grid>
          <Grid item item xs={6}>
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
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <ColorPop
            color={props.primaryTextColor}
            changeColor={props.changePrimaryTextColor}
            displayColorPicker={props.primaryTextColorPicker}
            changeColorPickerDisplayed={() =>
              props.changeColorPickerDisplayed('primaryText')
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
            Primary Text Color
          </Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <ColorPop
            color={props.secondaryTextColor}
            changeColor={props.changeSecondaryTextColor}
            displayColorPicker={props.secondaryTextColorPicker}
            changeColorPickerDisplayed={() =>
              props.changeColorPickerDisplayed('secondaryText')
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
            Secondary Text Color
          </Typography>
        </Grid>
        <Link onClick={() => props.setTab(2)}>
          <Typography
            variant='outlined'
            style={{
              marginLeft: '15px',
              color: '#000',
              fontSize: 16,
              fontFamily: 'Roboto',
            }}
            onClick={() => console.log('ON CLICK!')}
          >
            Preview <VisibilityIcon />
          </Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
};
