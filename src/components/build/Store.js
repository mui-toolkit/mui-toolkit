import React, { useState } from "react";
import { Build } from "../build";
import { createMuiTheme } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/styles";

export const Store = props => {
  const [color, setColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [defaultColor, setDefaultColor] = useState("");
  const [paperColor, setPaperColor] = useState("");

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

  let downloadTheme = {
    palette: {
      primary: { main: `${color}` ? `${color}` : "#3f51b5" },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : "#f50057"
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`
      }
    }
  };

  const customTheme = createMuiTheme({
    palette: {
      primary: { main: `${color}` ? `${color}` : "#3f51b5" },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : "#f50057"
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`
      }
    }
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
          changeColor={changeColor}
          changeSecondaryColor={changeSecondaryColor}
          changeDefaultColor={changeDefaultColor}
          changePaperColor={changePaperColor}
          downloadTheme={downloadTheme}
        />
      </ThemeProvider>
    </React.Fragment>
  );
};
