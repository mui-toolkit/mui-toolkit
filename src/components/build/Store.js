import React, { useState } from 'react';
import { Build } from '../build';
import { createMuiTheme } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles';

export const Store = () => {
  //General
  const [color, setColor] = useState('#3f51b5');
  const [secondaryColor, setSecondaryColor] = useState('#f50057');
  const [defaultColor, setDefaultColor] = useState('#fff');
  const [paperColor, setPaperColor] = useState('#fff');

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [
    displaySecondaryColorPicker,
    setDisplaySecondaryColorPicker,
  ] = useState(false);
  const [displayDefaultColorPicker, setDisplayDefaultColorPicker] = useState(
    false,
  );
  const [displayPaperColorPicker, setDisplayPaperColorPicker] = useState(false);

  //Typography
  const [fontFamily, setFontFamily] = useState('Robot');
  const [fontSize, setFontSize] = useState('14');
  const [fontWeightReg, setFontWeightReg] = useState('400');
  const [fontWeightBold, setfontWeightBold] = useState('700');

  const [h1, setH1] = useState({
    color: '#000',
    fontWeight: 300,
    fontSize: '6rem',
  });

  //Material-UI states
  const [expanded, setExpanded] = useState('panel1');
  const [tab, setTab] = useState(0);

  //General Handlers
  const changeColor = color => {
    setColor(color.hex);
  };

  const changeSecondaryColor = secondaryColor => {
    setSecondaryColor(secondaryColor.hex);
  };

  const changeDefaultColor = defaultColor => {
    setDefaultColor(defaultColor.hex);
  };

  const changePaperColor = paperColor => {
    setPaperColor(paperColor.hex);
  };

  const changeColorPickerDisplayed = () => {
    setDisplayColorPicker(!displayColorPicker ? true : false);
  };

  const changeSecondaryColorPickerDisplayed = () => {
    setDisplaySecondaryColorPicker(!displaySecondaryColorPicker ? true : false);
  };

  const changeDefaultColorPickerDisplayed = () => {
    setDisplayDefaultColorPicker(!displayDefaultColorPicker ? true : false);
  };

  const changePaperColorPickerDisplayed = () => {
    setDisplayPaperColorPicker(!displayPaperColorPicker ? true : false);
  };

  //Typography
  const changeH1 = style => {
    if (style.color) {
      setH1({ ...h1, color: style.color });
    }
    if (style.fontWeight) {
      setH1({ ...h1, fontWeight: style.fontWeight });
    }
    if (style.fontSize) {
      setH1({ ...h1, fontSize: style.fontSize });
    }
  };

  //Material-Ui handlers
  const changeExpanded = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const changeTab = (event, newTab) => {
    setTab(newTab);
  };

  let downloadTheme = {
    palette: {
      primary: { main: `${color}` ? `${color}` : '#3f51b5' },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057',
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`,
      },
    },
    typography: {
      h1: {
        color: `${h1.color}`,
        fontWeight: `${h1.fontWeight}`,
        fontSize: `${h1.fontSize}`,
      },
    },
  };

  const customTheme = createMuiTheme({
    palette: {
      primary: { main: `${color}` ? `${color}` : '#3f51b5' },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057',
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`,
      },
    },
    typography: {
      h1: {
        color: `${h1.color}`,
        fontWeight: `${h1.fontWeight}`,
        fontSize: `${h1.fontSize}`,
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <Build
          color={color}
          setColor={setColor}
          secondaryColor={secondaryColor}
          setSecondaryColor={setSecondaryColor}
          defaultColor={defaultColor}
          setDefaultColor={setDefaultColor}
          paperColor={paperColor}
          setPaperColor={setPaperColor}
          expanded={expanded}
          tab={tab}
          displayColorPicker={displayColorPicker}
          changeColor={changeColor}
          changeSecondaryColor={changeSecondaryColor}
          changeDefaultColor={changeDefaultColor}
          changePaperColor={changePaperColor}
          changeExpanded={changeExpanded}
          changeTab={changeTab}
          changeColorPickerDisplayed={changeColorPickerDisplayed}
          downloadTheme={downloadTheme}
          displaySecondaryColorPicker={displaySecondaryColorPicker}
          changeSecondaryColorPickerDisplayed={
            changeSecondaryColorPickerDisplayed
          }
          displayDefaultColorPicker={displayDefaultColorPicker}
          changeDefaultColorPickerDisplayed={changeDefaultColorPickerDisplayed}
          displayPaperColorPicker={displayPaperColorPicker}
          changePaperColorPickerDisplayed={changePaperColorPickerDisplayed}
          downloadTheme={downloadTheme}
        />
      </ThemeProvider>
    </React.Fragment>
  );
};
