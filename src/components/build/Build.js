import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SaveTheme, BuildNav, ColorGenerator } from "../build";
import { PreviewAppBar, PreviewTabs } from "../preview";
import Download from "../Download";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Grid, Paper } from "@material-ui/core/";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { db } from "../../config/firebase";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  preview: {
    padding: '2em',
    textAlign: 'center',
  },
  previewPaper: {
    marginTop: '5em',
    textAlign: 'center',
    background: '#fff',
    height: '100%',
  },
  builderPaper: {
    marginTop: '5em',
    textAlign: 'center',
    background: '#fff',
  },
}));

const handleStar = () => {
  // add star to starCount of theme
  // add theme to user favoriteTheme array
};
export const Build = props => {
  const classes = useStyles();

  console.log('themeId Name PASSED FROM STORE ', props.themeId);

  const {
    user,
    themeId,
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
    buttonHoverOpacity,
    buttonFontWeight,
    buttonFontSize,
    buttonTextTransform,
    changeButtonTextTransform,
    open,
    setOpen,
    buttonHeight,
    buttonPadding,
    buttonBorderRadius,
    setButtonFontWeight,
    setButtonFontSize,
    setButtonHeight,
    setButtonBorderRadius,
    setButtonPadding,
    //Fonts
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    //Alerts
    errorColor,
    warningColor,
    infoColor,
    successColor,
    errorColorPicker,
    warningColorPicker,
    infoColorPicker,
    successColorPicker,
    changeErrorColor,
    changeWarningColor,
    changeInfoColor,
    changeSuccessColor,
    alertVariant,
    changeAlertVariant,
    //Shadow
    shadow,
    changeShadow,
    setShadow,
    shadowTrue,
    shadowFalse,
    setButtonHoverOpacity,
  } = props;

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
              buttonHoverOpacity={buttonHoverOpacity}
              buttonFontWeight={buttonFontWeight}
              buttonFontSize={buttonFontSize}
              buttonTextTransform={buttonTextTransform}
              changeButtonTextTransform={changeButtonTextTransform}
              open={open}
              setOpen={setOpen}
              buttonHeight={buttonHeight}
              buttonPadding={buttonPadding}
              buttonBorderRadius={buttonBorderRadius}
              setButtonFontWeight={setButtonFontWeight}
              setButtonFontSize={setButtonFontSize}
              setButtonHeight={setButtonHeight}
              setButtonBorderRadius={setButtonBorderRadius}
              setButtonPadding={setButtonPadding}
              //Shadow
              shadow={shadow}
              changeShadow={changeShadow}
              setShadow={setShadow}
              shadowTrue={shadowTrue}
              shadowFalse={shadowFalse}
              //Typography
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              fontSize={fontSize}
              setFontSize={setFontSize}
              primaryTextColor={primaryTextColor}
              secondaryTextColor={secondaryTextColor}
              primaryTextColorPicker={primaryTextColorPicker}
              secondaryTextColorPicker={secondaryTextColorPicker}
              changePrimaryTextColor={changePrimaryTextColor}
              changeSecondaryTextColor={changeSecondaryTextColor}
              setTab={setTab}
              //Alerts
              errorColor={errorColor}
              warningColor={warningColor}
              infoColor={infoColor}
              successColor={successColor}
              errorColorPicker={errorColorPicker}
              warningColorPicker={warningColorPicker}
              infoColorPicker={infoColorPicker}
              successColorPicker={successColorPicker}
              changeErrorColor={changeErrorColor}
              changeWarningColor={changeWarningColor}
              changeInfoColor={changeInfoColor}
              changeSuccessColor={changeSuccessColor}
              alertVariant={alertVariant}
              changeAlertVariant={changeAlertVariant}
              setButtonHoverOpacity={setButtonHoverOpacity}
            />
            <Grid item>
              <Download downloadTheme={downloadTheme} />
              <SaveTheme user={user} downloadTheme={downloadTheme} />
              <Tooltip title="Star this theme">
                <IconButton aria-label="star" onClick={() => handleStar}>
                  <StarIcon />
                </IconButton>
              </Tooltip>
              {/* <Tooltip title="Star this theme">
                <IconButton aria-label="star" onClick={() => handleStar}>
                  <StarBorderIcon />
                  <StarIcon />
                </IconButton>
              </Tooltip> */}
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
