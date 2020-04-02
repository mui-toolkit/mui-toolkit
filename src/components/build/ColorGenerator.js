import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CasinoTwoToneIcon from '@material-ui/icons/CasinoTwoTone';
import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@ant-design/colors';
import { generate, presetPalettes } from '@ant-design/colors';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const useStyles = makeStyles(() => ({
  button: {
    marginRight: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontWeight: 400,
    textTransform: 'none',
    borderRadius: 5,
    height: 46,
    padding: 10,
  },
}));

export const ColorGenerator = props => {
  const classes = useStyles();
  const { setColor, setSecondaryColor, setDefaultColor, setPaperColor } = props;

  // const { setColor, setSecondaryColor, setDefaultColor, setPaperColor } = props;
  // const url = 'http://colormind.io/api/';
  // let data = {
  //   model: 'default',
  //   input: ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'],
  // };
  // let palette;

  const colorGeneration = () => {
    // const palette = generate('#FB8C00', {
    //   theme: 'dark',
    //   backgroundColor: '#141414',
    // });
    const colors = [
      '#FF8A65',
      '#6A1B9A',
      '#FF5722',
      '#43A047',
      '#D81B60',
      '#6A1B9A',
      '#AFB42B',
      '#FF5722',
      '#FF6D00',
      '#FFEA00',
      '#69F0AE',
      '#1DE9B6',
      '#18FFFF',
      '#A5D6A7',
      '#64DD17',
      '#E040FB',
      '#01579B',
      '#006064',
      '#00796B',
      '#BF360C',
      '#311B92',
      '#0D47A1',
      '#8BC34A',
      '#E65100',
      '#1A237E',
      '#311B92',
      red.primary,
      volcano.primary,
      gold.primary,
      yellow.primary,
      lime.primary,
      green.primary,
      cyan.primary,
      blue.primary,
      geekblue.primary,
      purple.primary,
      magenta.primary,
    ];
    console.log('COLORS LENGTH', colors.length);

    const palette = generate(
      colors[Math.floor(Math.random() * Math.floor(33))],
    );

    const secondPalette = generate(
      colors[Math.floor(Math.random() * Math.floor(33))],
    );

    let randomColorArray = [];
    let secondaryRandomColorArray = [];

    palette.forEach(colorArray => {
      randomColorArray.push(colorArray);
    });

    secondPalette.forEach(colorArray => {
      secondaryRandomColorArray.push(colorArray);
    });

    setColor(secondPalette[3].toString());
    setSecondaryColor(randomColorArray[3].toString());
    setDefaultColor(randomColorArray[1].toString());
    setPaperColor(randomColorArray[0].toString());
  };
  return (
    <div>
      <Button
        onClick={colorGeneration}
        style={{
          fontFamily: 'Roboto',
          fontSize: 14,
          color: '#000',
        }}
        className={classes.button}
      >
        <CasinoTwoToneIcon /> CLICK FOR RANDOM COLORS <CasinoTwoToneIcon />
      </Button>
    </div>
  );
};
