import React, { useState } from 'react';
import { Build } from '../build';
import { createMuiTheme } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles';

export const Store = () => {
	//General
	const [ color, setColor ] = useState('#3f51b5');
	const [ secondaryColor, setSecondaryColor ] = useState('#f50057');
	const [ defaultColor, setDefaultColor ] = useState('#fafafa');
	const [ paperColor, setPaperColor ] = useState('#fff');
	const [ displayColorPicker, setDisplayColorPicker ] = useState(false);
	const [ displaySecondaryColorPicker, setDisplaySecondaryColorPicker ] = useState(false);
	const [ displayDefaultColorPicker, setDisplayDefaultColorPicker ] = useState(false);
	const [ displayPaperColorPicker, setDisplayPaperColorPicker ] = useState(false);

	//Buttons
	const [ buttonRipple, setButtonRipple ] = useState(false);
	const [ buttonElevation, setButtonElevation ] = useState(false);
	const [ buttonHoverColor, setButtonHoverColor ] = useState('#000000');
	const [ buttonHoverOpacity, setButtonHoverOpacity ] = useState(0.04);
	const [ buttonFontWeight, setButtonFontWeight ] = useState(500);
	const [ buttonFontSize, setButtonFontSize ] = useState('0.875');
	//none, capitalize, uppercase, lowercase, initial, inherit
	const [ buttonTextTransform, setButtonTestTransform ] = useState('none');
	const [ buttonHeight, setButtonHeight ] = useState(48);
	const [ buttonPadding, setButtonPadding ] = useState('0 30px');
	const [ buttonBorderRadius, setButtonBorderRadius ] = useState(0);

	//Material-UI states
	const [ expanded, setExpanded ] = useState('panel1');
	const [ tab, setTab ] = useState(0);

	//General Handlers
	const changeColor = (color) => {
		setColor(color.hex);
	};
	const changeSecondaryColor = (secondaryColor) => {
		setSecondaryColor(secondaryColor.hex);
	};
	const changeDefaultColor = (defaultColor) => {
		setDefaultColor(defaultColor.hex);
	};
	const changePaperColor = (paperColor) => {
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

	//Buttons handlers
	const changeButtonRipple = () => {
		setButtonRipple(!buttonRipple ? true : false);
	};
	const changeButtonElevation = () => {
		setButtonElevation(!buttonElevation ? true : false);
	};
	const changeButtonHoverColor = (buttonHoverColor) => {
		setButtonHoverColor(buttonHoverColor.hex);
	};
	const changeButtonHoverOpacity = (buttonHoverOpacity) => {
		setButtonHoverOpacity(buttonHoverOpacity);
	};
	const changeButtonFontWeight = (buttonFontWeight) => {
		setButtonFontWeight(buttonFontWeight);
	};
	const changeButtonFontSize = (buttonFontSize) => {
		setButtonFontSize(buttonFontWeight);
	};
	const changeButtonTextTransform = (buttonTextTransform) => {
		setButtonTextTransform(buttonTextTransform);
	};
	const changeButtonHeight = (buttonHeight) => {
		setButtonHeight(buttonHeight);
	};
	const changeButtonPadding = (buttonPadding) => {
		setButtonPadding(buttonPadding);
	};
	const changeButtonBorderRadius = (buttonBorderRadius) => {
		setButtonBorderRadius(buttonBorderRadius);
	};

	//Material-Ui handlers
	const changeExpanded = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const changeTab = (event, newTab) => {
		setTab(newTab);
	};

	let downloadTheme = {
		palette: {
			primary: { main: `${color}` },
			secondary: {
				main: `${secondaryColor}`
			},
			background: {
				paper: `${paperColor}`,
				default: `${defaultColor}`
			},
			action: {
				// active: 'rgba(0, 0, 0, 0.54)',
				hover: `${buttonHoverColor}`,
				hoverOpacity: `${buttonHoverOpacity}`
				// selected: 'rgba(0, 0, 0, 0.04)',
				// selectedOpacity: 0.08
			}
		},
		typography: {
			button: {
				fontWeight: `${buttonFontWeight}`,
				fontSize: `${buttonFontSize}`,
				textTransform: `${buttonTextTransform}`
			}
		},
		props: {
			MuiButtonBase: {
				disableRipple: `${buttonRipple}`
			},
			MuiButton: {
				disableElevation: `${buttonElevation}`
			}
		},
		overrides: {
			MuiButton: {
				root: {
					borderRadius: `${buttonBorderRadius}`,
					height: `${buttonHeight}`,
					padding: `${buttonPadding}`
				}
			}
		}
	};

	const customTheme = createMuiTheme({
		palette: {
			primary: { main: `${color}` },
			secondary: {
				main: `${secondaryColor}`
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
					changeSecondaryColorPickerDisplayed={changeSecondaryColorPickerDisplayed}
					displayDefaultColorPicker={displayDefaultColorPicker}
					changeDefaultColorPickerDisplayed={changeDefaultColorPickerDisplayed}
					displayPaperColorPicker={displayPaperColorPicker}
					changePaperColorPickerDisplayed={changePaperColorPickerDisplayed}
					downloadTheme={downloadTheme}
					//buttons
					buttonRipple={buttonRipple}
					setButtonRipple={setButtonRipple}
					buttonElevation={buttonElevation}
					setButtonElevation={setButtonElevation}
					buttonHoverColor={buttonHoverColor}
					setButtonHoverColor={setButtonHoverColor}
					buttonHoverOpacity={buttonHoverOpacity}
					setButtonHoverOpacity={setButtonHoverOpacity}
					buttonFontWeight={buttonFontWeight}
					setButtonFontWeight={setButtonFontWeight}
					buttonFontSize={buttonFontSize}
					setButtonFontSize={setButtonFontSize}
					buttonTextTransform={buttonTextTransform}
					setButtonTestTransform={setButtonTestTransform}
					buttonHeight={buttonHeight}
					setButtonHeight={setButtonHeight}
					buttonPadding={buttonPadding}
					setButtonPadding={setButtonPadding}
					buttonBorderRadius={buttonBorderRadius}
					setButtonBorderRadius={setButtonBorderRadius}
				/>
			</ThemeProvider>
		</React.Fragment>
	);
};
