import React, { useState } from 'react';
import { Build } from '../build';
import { createMuiTheme } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles';

export const Store = () => {
  const [color, setColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [defaultColor, setDefaultColor] = useState('');
  const [paperColor, setPaperColor] = useState('');

  //BuildNav
  const [expanded, setExpanded] = React.useState('panel1');
  const [tab, setTab] = React.useState(0);

  const changeExpanded = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

  // MUI change handlers
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
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <Build
          color={color}
          secondaryColor={secondaryColor}
          defaultColor={defaultColor}
          paperColor={paperColor}
          expanded={expanded}
          tab={tab}
          setTab={setTab}
          changeColor={changeColor}
          changeSecondaryColor={changeSecondaryColor}
          changeDefaultColor={changeDefaultColor}
          changePaperColor={changePaperColor}
          changeExpanded={changeExpanded}
          changeTab={changeTab}
          downloadTheme={downloadTheme}
        />
      </ThemeProvider>
    </React.Fragment>
  );
};
