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
	const [ buttonRipple, setButtonRipple ] = useState(true);
	const [ buttonElevation, setButtonElevation ] = useState(true);
	const [ buttonHoverColor, setButtonHoverColor ] = useState('#000000');
	const [ buttonHoverOpacity, setButtonHoverOpacity ] = useState(0.04);
	const [ buttonFontWeight, setButtonFontWeight ] = useState(500);
	const [ buttonFontSize, setButtonFontSize ] = useState(0.875);
	const [ buttonTextTransform, setButtonTextTransform ] = useState('none');
	const [ open, setOpen ] = useState(false);
	const [ buttonHeight, setButtonHeight ] = useState(46);
	const [ buttonPadding, setButtonPadding ] = useState(10);
	const [ buttonBorderRadius, setButtonBorderRadius ] = useState(5);

	//Typography
	const [ fontStyle, setFontStyle ] = useState({
		fontFamily: 'Roboto',
		fontSize: 14
	});
	const [ primaryTextColor, setPrimaryTextColor ] = useState('#000');
	const [ secondaryTextColor, setSecondaryTextColor ] = useState('#000');
	const [ primaryTextColorPicker, setPrimaryTextColorPicker ] = useState(false);
	const [ secondaryTextColorPicker, setSecondaryTextColorPicker ] = useState(false);

	//Material-UI states
	const [ expanded, setExpanded ] = useState('panel1');
	const [ tab, setTab ] = useState(0);

	//On Change Handlers

	//Alerts

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
	// const changeColorPickerDisplayed = () => {
	// 	setDisplayColorPicker(!displayColorPicker ? true : false);
	// };
	// const changeSecondaryColorPickerDisplayed = () => {
	// 	setDisplaySecondaryColorPicker(!displaySecondaryColorPicker ? true : false);
	// };
	// const changeDefaultColorPickerDisplayed = () => {
	// 	setDisplayDefaultColorPicker(!displayDefaultColorPicker ? true : false);
	// };
	// const changePaperColorPickerDisplayed = () => {
	// 	setDisplayPaperColorPicker(!displayPaperColorPicker ? true : false);
	// };

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
		setButtonFontSize(buttonFontSize);
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

	const changePrimaryTextColor = (textColor) => {
		setPrimaryTextColor(textColor.hex);
	};

	const changeSecondaryTextColor = (textColor) => {
		setSecondaryTextColor(textColor.hex);
	};

	const changeColorPickerDisplayed = (type) => {
		if (type === 'primary') {
			setDisplayColorPicker(!displayColorPicker ? true : false);
		}
		if (type === 'secondary') {
			setDisplaySecondaryColorPicker(!displaySecondaryColorPicker ? true : false);
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

	const changeTab = (event, newTab) => {
		setTab(newTab);
	};

	let downloadTheme = {
		palette: {
			primary: { main: `${color}` },
			secondary: {
				main: `${secondaryColor}`
			},
			text: {
				primary: `${primaryTextColor}`,
				secondary: `${secondaryTextColor}`
			},
			background: {
				paper: `${paperColor}`,
				default: `${defaultColor}`
			}
		},
		typography: {
			fontFamily: `${fontStyle.fontFamily}`,
			fontSize: `${fontStyle.fontSize}`,
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
			text: {
				primary: `${primaryTextColor}`,
				secondary: `${secondaryTextColor}`
			},
			background: {
				paper: `${paperColor}`,
				default: `${defaultColor}`
			}
		},
		typography: {
			fontFamily: `${fontStyle.fontFamily}`,
			fontSize: `${fontStyle.fontSize}`,
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
	});

	return (
		<React.Fragment>
			<Build
				//General
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
				customTheme={customTheme}
			/>
		</React.Fragment>
	);
};
