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

  const [h1, setH1] = useState({
    color: '#000',
    fontWeight: 300,
    fontSize: '6rem',
  });
  const [h2, setH2] = useState({
    color: '#000',
    fontWeight: 300,
    fontSize: '3.75rem',
  });

  const [fontColorPicker, setFontColorPicker] = useState(false);

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
  };

  // const changeSecondaryColorPickerDisplayed = () => {
  //   setDisplaySecondaryColorPicker(!displaySecondaryColorPicker ? true : false);
  // };

  // const changeDefaultColorPickerDisplayed = () => {
  //   setDisplayDefaultColorPicker(!displayDefaultColorPicker ? true : false);
  // };

  // const changePaperColorPickerDisplayed = () => {
  //   setDisplayPaperColorPicker(!displayPaperColorPicker ? true : false);
  // };

  //Typography

  // const changeFontSize = event => {
  //   setFontSize(Number(event.target.value));
  // };

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
  const changeH2 = style => {
    if (style.color) {
      setH2({ ...h2, color: style.color });
    }
    if (style.fontWeight) {
      setH2({ ...h2, fontWeight: style.fontWeight });
    }
    if (style.fontSize) {
      setH2({ ...h2, fontSize: style.fontSize });
    }
  };

  //Material-Ui handlers
  const changeExpanded = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const changeTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleFontColorPicker = () => {
    setFontColorPicker(!fontColorPicker ? true : false);
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
      fontFamily: `${fontStyle.fontFamily}`,
      fontSize: `${fontStyle.fontSize}`,
      h1: {
        color: `${h1.color}`,
        fontWeight: `${h1.fontWeight}`,
      },
      h2: {
        color: `${h2.color}`,
        fontWeight: `${h2.fontWeight}`,
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
      fontFamily: `${fontStyle.fontFamily}`,
      fontSize: `${fontStyle.fontSize}`,
      h1: {
        color: `${h1.color}`,
        fontWeight: `${h1.fontWeight}`,
      },
      h2: {
        color: `${h2.color}`,
        fontWeight: `${h2.fontWeight}`,
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
          // changeSecondaryColorPickerDisplayed={
          //   changeSecondaryColorPickerDisplayed
          // }
          displayDefaultColorPicker={displayDefaultColorPicker}
          // changeDefaultColorPickerDisplayed={changeDefaultColorPickerDisplayed}
          displayPaperColorPicker={displayPaperColorPicker}
          // changePaperColorPickerDisplayed={changePaperColorPickerDisplayed}
          downloadTheme={downloadTheme}
          //Typography
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
          h1={h1}
          changeH1={changeH1}
          h2={h2}
          changeH2={changeH2}
          handleFontColorPicker={handleFontColorPicker}
        />
      </ThemeProvider>
    </React.Fragment>
  );
};
