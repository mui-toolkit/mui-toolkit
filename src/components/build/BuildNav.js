import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { General, CustomTypography, Buttons, Alerts } from './index';
import { makeStyles, withStyles } from '@material-ui/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const useStyles = makeStyles(theme => ({
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

const ExpansionPanelDetails = withStyles(theme => ({
  // root: {
  //   padding: theme.spacing(2),
  // },
}))(MuiExpansionPanelDetails);

export function BuildNav(props) {
  const classes = useStyles();
  const { expanded, changeExpanded } = props;
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
              color={props.color}
              secondaryColor={props.secondaryColor}
              defaultColor={props.defaultColor}
              paperColor={props.paperColor}
              changeColor={props.changeColor}
              changeSecondaryColor={props.changeSecondaryColor}
              changeDefaultColor={props.changeDefaultColor}
              changePaperColor={props.changePaperColor}
              displayColorPicker={props.displayColorPicker}
              changeColorPickerDisplayed={props.changeColorPickerDisplayed}
              displaySecondaryColorPicker={props.displaySecondaryColorPicker}
              changeSecondaryColorPickerDisplayed={
                props.changeSecondaryColorPickerDisplayed
              }
              displayDefaultColorPicker={props.displayDefaultColorPicker}
              changeDefaultColorPickerDisplayed={
                props.changeDefaultColorPickerDisplayed
              }
              displayPaperColorPicker={props.displayPaperColorPicker}
              changePaperColorPickerDisplayed={
                props.changePaperColorPickerDisplayed
              }
              shadow={props.shadow}
              changeShadow={props.changeShadow}
              setShadow={props.setShadow}
              shadowTrue={props.shadowTrue}
              shadowFalse={props.shadowFalse}
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
              buttonRipple={props.buttonRipple}
              changeButtonRipple={props.changeButtonRipple}
              buttonElevation={props.buttonElevation}
              changeButtonElevation={props.changeButtonElevation}
              buttonHoverColor={props.buttonHoverColor}
              changeButtonHoverColor={props.changeButtonHoverColor}
              buttonHoverOpacity={props.buttonHoverOpacity}
              changeButtonHoverOpacity={props.changeButtonHoverOpacity}
              buttonFontWeight={props.buttonFontWeight}
              changeButtonFontWeight={props.changeButtonFontWeight}
              buttonFontSize={props.buttonFontSize}
              changeButtonFontSize={props.changeButtonFontSize}
              buttonTextTransform={props.buttonTextTransform}
              changeButtonTextTransform={props.changeButtonTextTransform}
              open={props.open}
              setOpen={props.setOpen}
              buttonHeight={props.buttonHeight}
              changeButtonHeight={props.changeButtonHeight}
              buttonPadding={props.buttonPadding}
              changeButtonPadding={props.changeButtonPadding}
              buttonBorderRadius={props.buttonBorderRadius}
              changeButtonBorderRadius={props.changeButtonBorderRadius}
              setTab={props.setTab}
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
                color={props.color}
                changeColor={props.changeColor}
                displayColorPicker={props.displayColorPicker}
                changeColorPickerDisplayed={props.changeColorPickerDisplayed}
                fontStyle={props.fontStyle}
                setFontStyle={props.setFontStyle}
                primaryTextColor={props.primaryTextColor}
                secondaryTextColor={props.secondaryTextColor}
                primaryTextColorPicker={props.primaryTextColorPicker}
                secondaryTextColorPicker={props.secondaryTextColorPicker}
                changePrimaryTextColor={props.changePrimaryTextColor}
                changeSecondaryTextColor={props.changeSecondaryTextColor}
                setTab={props.setTab}
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
              errorColor={props.errorColor}
              warningColor={props.warningColor}
              infoColor={props.infoColor}
              successColor={props.successColor}
              errorColorPicker={props.errorColorPicker}
              warningColorPicker={props.warningColorPicker}
              infoColorPicker={props.infoColorPicker}
              successColorPicker={props.successColorPicker}
              changeErrorColor={props.changeErrorColor}
              changeWarningColor={props.changeWarningColor}
              changeInfoColor={props.changeInfoColor}
              changeSuccessColor={props.changeSuccessColor}
              changeColorPickerDisplayed={props.changeColorPickerDisplayed}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </React.Fragment>
  );
}
