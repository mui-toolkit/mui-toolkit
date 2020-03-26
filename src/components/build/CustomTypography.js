import React from 'react';
import { ColorPop } from './index';
import { SketchPicker } from 'react-color';
import {
  Typography,
  MenuItem,
  Select,
  TextField,
  Grid,
  Link,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  typography: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto',
    lineHeight: 3,
  },
}));

export const CustomTypography = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction='column' justify='flex'>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
        >
          <Grid item xs={6} align='left'>
            <Typography className={classes.typography}>Font Family</Typography>
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
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={6} align='left'>
            <Typography className={classes.typography}>
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
        <Grid container direction='row' alignItems='center'>
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
              lineHeight: 4,
            }}
          >
            Primary Text Color
          </Typography>
        </Grid>
        <Grid container direction='row' alignItems='center'>
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
              lineHeight: 4,
            }}
          >
            Secondary Text Color
          </Typography>
        </Grid>
        <Link onClick={() => props.setTab(2)}>
          <Typography
            variant='outlined'
            className={classes.typography}
            onClick={() => console.log('ON CLICK!')}
          >
            Preview <VisibilityIcon />
          </Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
};