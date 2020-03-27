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
		borderWidth: 1
	},
	expansionPanel: {
		background: '#fff'
	}
}));

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({}))(MuiExpansionPanelDetails);

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
		changeButtonBorderRadius,
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
		//Shadow
		shadow,
		changeShadow,
		setShadow,
		shadowTrue,
		shadowFalse
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
					<ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
						<Typography style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}>General</Typography>
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
							changeSecondaryColorPickerDisplayed={changeSecondaryColorPickerDisplayed}
							displayDefaultColorPicker={displayDefaultColorPicker}
							changeDefaultColorPickerDisplayed={changeDefaultColorPickerDisplayed}
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
					<ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
						<Typography style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}>Buttons</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Buttons
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
							setTab={setTab}
						/>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel3'}
					onChange={changeExpanded('panel3')}
					className={classes.expansionPanel}
				>
					<ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
						<Typography style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}>
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
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel4'}
					onChange={changeExpanded('panel4')}
					className={classes.expansionPanel}
				>
					<ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
						<Typography style={{ color: '#000', fontSize: 16, fontFamily: 'Roboto' }}>Alerts</Typography>
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
						/>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</Grid>
		</React.Fragment>
	);
}
