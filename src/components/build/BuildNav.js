import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { General, CustomTypography, Buttons, Alerts } from './index';
import { makeStyles, withStyles } from '@material-ui/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const useStyles = makeStyles(() => ({
  bubble: {
    borderColor: '#c2c2c2',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  expansionPanel: {
    background: '#fff',
  },
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({}))(
  MuiExpansionPanelDetails,
);

export function BuildNav(props) {
  const classes = useStyles();
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
    setTab,
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
    setButtonPadding,
    //Typography
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
    setButtonBorderRadius,
  } = props;

  return (
    <React.Fragment>
      <Grid Item>
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={changeExpanded('panel1')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            aria-controls='panel1d-content'
            id='panel1d-header'
          >
            <Typography
              style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}
            >
              General
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <General
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
              shadow={shadow}
              changeShadow={changeShadow}
              setShadow={setShadow}
              shadowTrue={shadowTrue}
              shadowFalse={shadowFalse}
              setTab={setTab}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={changeExpanded('panel2')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            aria-controls='panel2d-content'
            id='panel2d-header'
          >
            <Typography
              style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}
            >
              Buttons
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Buttons
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
              setTab={setTab}
              setButtonHoverOpacity={setButtonHoverOpacity}
              setButtonFontWeight={setButtonFontWeight}
              setButtonFontSize={setButtonFontSize}
              setButtonHeight={setButtonHeight}
              setButtonBorderRadius={setButtonBorderRadius}
              setButtonPadding={setButtonPadding}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={changeExpanded('panel3')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            aria-controls='panel3d-content'
            id='panel3d-header'
          >
            <Typography
              style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}
            >
              Typography
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <CustomTypography
                color={color}
                changeColor={changeColor}
                displayColorPicker={displayColorPicker}
                changeColorPickerDisplayed={changeColorPickerDisplayed}
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
              />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel4'}
          onChange={changeExpanded('panel4')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            aria-controls='panel4d-content'
            id='panel4d-header'
          >
            <Typography
              style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}
            >
              Alerts
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Alerts
              setTab={setTab}
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
              changeColorPickerDisplayed={changeColorPickerDisplayed}
              alertVariant={alertVariant}
              changeAlertVariant={changeAlertVariant}
              setOpen={setOpen}
              open={open}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </React.Fragment>
  );
}
