import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SaveTheme, BuildNav } from "../build";
import { PreviewAppBar, PreviewTabs } from "../preview";
import Download from "../Download";
import ColorGenerator from "../ColorGenerator";

import { Grid, Paper } from "@material-ui/core/";

import { makeStyles } from "@material-ui/styles";
import { db } from "../../config/firebase";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  preview: {
    padding: "2em",
    textAlign: "center"
  },
  previewPaper: {
    marginTop: "5em",
    textAlign: "center",
    background: "#fff",
    height: "100%"
  },
  builderPaper: {
    marginTop: "5em",
    textAlign: "center",
    background: "#fff"
  }
}));

export const Build = props => {
  const classes = useStyles();

  const { savedTheme } = useParams();
  console.log("savedTheme Name: ", savedTheme);

  const {
    color,
    secondaryColor,
    defaultColor,
    paperColor,
    expanded,
    displayColorPicker,
    changeColor,
    changeSecondaryColor,
    changePaperColor,
    changeDefaultColor,
    changeExpanded,
    changeColorPickerDisplayed,
    displaySecondaryColorPicker,
    changeSecondaryColorPickerDisplayed,
    displayDefaultColorPicker,
    changeDefaultColorPickerDisplayed,
    displayPaperColorPicker,
    changePaperColorPickerDisplayed,
    tab,
    setTab,
    changeTab,
    downloadTheme,
    setColor,
    setSecondaryColor,
    setDefaultColor,
    setPaperColor,
    fontStyle,
    setFontStyle,
    primaryTextColor,
    secondaryTextColor,
    primaryTextColorPicker,
    secondaryTextColorPicker,
    changePrimaryTextColor,
    changeSecondaryTextColor,
    customTheme,
    //buttons
    buttonRipple,
    changeButtonRipple,
    buttonElevation,
    changeButtonElevation,
    buttonHoverColor,
    changeButtonHoverColor,
    buttonHoverOpacity,
    changeButtonHoverOpacity,
    buttonFontWeight,
    changeButtonFontWeight,
    buttonFontSize,
    changeButtonFontSize,
    buttonTextTransform,
    changeButtonTextTransform,
    open,
    setOpen,
    buttonHeight,
    changeButtonHeight,
    buttonPadding,
    changeButtonPadding,
    buttonBorderRadius,
    changeButtonBorderRadius
  } = props;

  // Will render when a user selects to view a saved theme
  useEffect(() => {
    if (savedTheme) {
      const response = async () => {
        await db
          .collection("CustomizedThemes")
          .doc(`${savedTheme}`)
          .get()
          .then(doc => {
            console.log("saved Theme doc", doc.data());
            if (doc.data().palette.primary.main)
              setColor(doc.data().palette.primary.main);
            if (doc.data().palette.secondary.main)
              setSecondaryColor(doc.data().palette.secondary.main);
            if (doc.data().palette.background.default)
              setDefaultColor(doc.data().palette.background.default);
            if (doc.data().palette.background.paper)
              setPaperColor(doc.data().palette.background.paper);
          })
          .catch(err => {
            console.log("Error getting documents", err);
          });
      };
      response();
    }
  }, []);

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        {/* BUILD NAV START */}
        <Grid item xs={3}>
          <Paper className={classes.builderPaper}>
            <ColorGenerator
              setColor={setColor}
              setSecondaryColor={setSecondaryColor}
              setDefaultColor={setDefaultColor}
              setPaperColor={setPaperColor}
            />
            <BuildNav
              expanded={expanded}
              changeExpanded={changeExpanded}
              color={color}
              secondaryColor={secondaryColor}
              defaultColor={defaultColor}
              paperColor={paperColor}
              changeColor={changeColor}
              changeSecondaryColor={changeSecondaryColor}
              changeDefaultColor={changeDefaultColor}
              changePaperColor={changePaperColor}
              displayColorPicker={displayColorPicker}
              changeColorPickerDisplayed={changeColorPickerDisplayed}
              displaySecondaryColorPicker={displaySecondaryColorPicker}
              changeSecondaryColorPickerDisplayed={
                changeSecondaryColorPickerDisplayed
              }
              displayDefaultColorPicker={displayDefaultColorPicker}
              changeDefaultColorPickerDisplayed={
                changeDefaultColorPickerDisplayed
              }
              displayPaperColorPicker={displayPaperColorPicker}
              changePaperColorPickerDisplayed={changePaperColorPickerDisplayed}
              //buttons
              buttonRipple={buttonRipple}
              changeButtonRipple={changeButtonRipple}
              buttonElevation={buttonElevation}
              changeButtonElevation={changeButtonElevation}
              buttonHoverColor={buttonHoverColor}
              changeButtonHoverColor={changeButtonHoverColor}
              buttonHoverOpacity={buttonHoverOpacity}
              changeButtonHoverOpacity={changeButtonHoverOpacity}
              buttonFontWeight={buttonFontWeight}
              changeButtonFontWeight={changeButtonFontWeight}
              buttonFontSize={buttonFontSize}
              changeButtonFontSize={changeButtonFontSize}
              buttonTextTransform={buttonTextTransform}
              changeButtonTextTransform={changeButtonTextTransform}
              open={open}
              setOpen={setOpen}
              buttonHeight={buttonHeight}
              changeButtonHeight={changeButtonHeight}
              buttonPadding={buttonPadding}
              changeButtonPadding={changeButtonPadding}
              buttonBorderRadius={buttonBorderRadius}
              changeButtonBorderRadius={changeButtonBorderRadius}
              //Typography
              fontStyle={fontStyle}
              setFontStyle={setFontStyle}
              primaryTextColor={primaryTextColor}
              secondaryTextColor={secondaryTextColor}
              primaryTextColorPicker={primaryTextColorPicker}
              secondaryTextColorPicker={secondaryTextColorPicker}
              changePrimaryTextColor={changePrimaryTextColor}
              changeSecondaryTextColor={changeSecondaryTextColor}
              setTab={setTab}
            />
            <Grid item>
              <Download downloadTheme={downloadTheme} />
              <SaveTheme downloadTheme={downloadTheme} />
            </Grid>
          </Paper>
        </Grid>
        {/* BUILD NAV END */}
        {/* Preview Start */}
        <Grid item xs={9} className={classes.preview}>
          <Paper
            className={classes.previewPaper}
            style={{ background: `${defaultColor}` }}
          >
            <ThemeProvider theme={customTheme}>
              <PreviewAppBar
                secondaryColor={secondaryColor}
                color={color}
                className={classes.container}
              />
              <PreviewTabs tab={tab} changeTab={changeTab} />
            </ThemeProvider>
          </Paper>
        </Grid>
        {/* Preview End */}
      </Grid>
    </section>
  );
};
