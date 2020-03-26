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
  const [fontStyle, setFontStyle] = useState({
    fontFamily: 'Roboto',
    fontSize: 14,
  });
  const [primaryTextColor, setPrimaryTextColor] = useState('#000');
  const [secondaryTextColor, setSecondaryTextColor] = useState('#000');
  const [primaryTextColorPicker, setPrimaryTextColorPicker] = useState(false);
  const [secondaryTextColorPicker, setSecondaryTextColorPicker] = useState(
    false,
  );

  //Material-UI states
  const [expanded, setExpanded] = useState('panel1');
  const [tab, setTab] = useState(0);

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

  const changePrimaryTextColor = textColor => {
    setPrimaryTextColor(textColor.hex);
  };

  const changeSecondaryTextColor = textColor => {
    setSecondaryTextColor(textColor.hex);
  };

  const changeColorPickerDisplayed = type => {
    if (type === 'primary') {
      setDisplayColorPicker(!displayColorPicker ? true : false);
    }
    if (type === 'secondary') {
      setDisplaySecondaryColorPicker(
        !displaySecondaryColorPicker ? true : false,
      );
    }
    if (type === 'default') {
      setDisplayDefaultColorPicker(!displayDefaultColorPicker ? true : false);
    }
    if (type === 'paper') {
      setDisplayPaperColorPicker(!displayPaperColorPicker ? true : false);
    }
    if (type === 'primaryText') {
      setPrimaryTextColorPicker(!primaryTextColorPicker ? true : false);
    }
    if (type === 'secondaryText') {
      setSecondaryTextColorPicker(!secondaryTextColorPicker ? true : false);
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
      text: {
        primary: `${primaryTextColor}`,
        secondary: `${secondaryTextColor}`,
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`,
      },
    },
    typography: {
      fontFamily: `${fontStyle.fontFamily}`,
      fontSize: `${fontStyle.fontSize}`,
    },
  };

  const customTheme = createMuiTheme({
    palette: {
      primary: { main: `${color}` ? `${color}` : '#3f51b5' },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057',
      },
      text: {
        primary: `${primaryTextColor}`,
        secondary: `${secondaryTextColor}`,
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`,
      },
    },
    typography: {
      fontFamily: `${fontStyle.fontFamily}`,
      fontSize: `${fontStyle.fontSize}`,
    },
  });

  return (
    <React.Fragment>
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
        setTab={setTab}
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
        displayDefaultColorPicker={displayDefaultColorPicker}
        displayPaperColorPicker={displayPaperColorPicker}
        downloadTheme={downloadTheme}
        //Typography
        fontStyle={fontStyle}
        setFontStyle={setFontStyle}
        primaryTextColor={primaryTextColor}
        secondaryTextColor={secondaryTextColor}
        primaryTextColorPicker={primaryTextColorPicker}
        secondaryTextColorPicker={secondaryTextColorPicker}
        changePrimaryTextColor={changePrimaryTextColor}
        changeSecondaryTextColor={changeSecondaryTextColor}
        customTheme={customTheme}
      />
    </React.Fragment>
  );
};
