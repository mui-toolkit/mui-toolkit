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
	const [ buttonRipple, setButtonRipple ] = useState([ true ]);
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

	const shadowTrue = [
		'none',
		'0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		'0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
		'0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
		'0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
		'0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
		'0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
		'0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
		'0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
		'0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px…gba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
		'0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px…gba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
		'0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px…gba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
		'0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px…gba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
		'0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px…gba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
		'0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px…gba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
		'0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2p…gba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
		'0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2p…gba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
		'0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2p…gba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
		'0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2p…gba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
		'0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3…gba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
		'0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3…gba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
		'0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3…gba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
		'0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3…gba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
		'0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3…gba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
	];

	const shadowFalse = [ 'none' ];
	//Shadows
	const [ shadow, setShadow ] = useState([]);

	//Typography
	const [ fontStyle, setFontStyle ] = useState({
		fontFamily: 'Roboto',
		fontSize: 14
	});
	const [ primaryTextColor, setPrimaryTextColor ] = useState('#000');
	const [ secondaryTextColor, setSecondaryTextColor ] = useState('#000');
	const [ primaryTextColorPicker, setPrimaryTextColorPicker ] = useState(false);
	const [ secondaryTextColorPicker, setSecondaryTextColorPicker ] = useState(false);

	//Alerts
	const [ errorColor, setErrorColor ] = useState('#f22983');
	const [ warningColor, setWarningColor ] = useState('#ffd034');
	const [ infoColor, setInfoColor ] = useState('#2dbde2');
	const [ successColor, setSuccessColor ] = useState('#5dd24d');

	const [ errorColorPicker, setErrorColorPicker ] = useState(false);
	const [ warningColorPicker, setWarningColorPicker ] = useState(false);
	const [ infoColorPicker, setInfoColorPicker ] = useState(false);
	const [ successColorPicker, setSuccessColorPicker ] = useState(false);

	//Material-UI states
	const [ expanded, setExpanded ] = useState('panel1');
	const [ tab, setTab ] = useState(0);

	//On Change Handlers

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

	//Alerts Handlers
	const changeErrorColor = (errorColor) => {
		setErrorColor(errorColor.hex);
	};
	const changeWarningColor = (warningColor) => {
		setWarningColor(warningColor.hex);
	};
	const changeInfoColor = (infoColor) => {
		setInfoColor(infoColor.hex);
	};
	const changeSuccessColor = (successColor) => {
		setSuccessColor(successColor.hex);
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
		if (type === 'error') {
			setErrorColorPicker(!errorColorPicker ? true : false);
		}
		if (type === 'warning') {
			setWarningColorPicker(!warningColorPicker ? true : false);
		}
		if (type === 'info') {
			setInfoColorPicker(!infoColorPicker ? true : false);
		}
		if (type === 'success') {
			setSuccessColorPicker(!successColorPicker ? true : false);
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
			},
			error: {
				main: `${errorColor}`
			},
			warning: {
				main: `${warningColor}`
			},
			info: {
				main: `${infoColor}`
			},
			success: {
				main: `${successColor}`
			},
			action: {
				hoverOpacity: `${buttonHoverOpacity}`
			}
		},
		typography: {
			fontFamily: `${fontStyle.fontFamily}`,
			fontSize: `${fontStyle.fontSize}`,
			button: {
				fontWeight: `${buttonFontWeight}`,
				fontSize: `${buttonFontSize}rem`,
				textTransform: `${buttonTextTransform}`
			}
		},
		props: {
			MuiButtonBase: {
				disableRipple: buttonRipple
			},
			MuiButton: {
				disableElevation: buttonElevation
			}
		},
		overrides: {
			MuiButton: {
				root: {
					borderRadius: buttonBorderRadius,
					height: buttonHeight,
					padding: `${buttonPadding}px`
				}
			}
		}
	};

	const customTheme = createMuiTheme({
		shadows: shadow,
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
			},
			error: {
				main: `${errorColor}`
			},
			warning: {
				main: `${warningColor}`
			},
			info: {
				main: `${infoColor}`
			},
			success: {
				main: `${successColor}`
			},
			action: {
				// active: 'rgba(0, 0, 0, 0.54)',
				hoverOpacity: `${buttonHoverOpacity}`
				// selected: 'rgba(0, 0, 0, 0.04)',
				// selectedOpacity: 0.08
			}
		},
		typography: {
			fontFamily: `${fontStyle.fontFamily}`,
			fontSize: `${fontStyle.fontSize}`,
			button: {
				fontWeight: `${buttonFontWeight}`,
				fontSize: `${buttonFontSize}rem`,
				textTransform: `${buttonTextTransform}`
			}
		},
		props: {
			MuiButtonBase: {
				disableRipple: buttonRipple
			},
			MuiButton: {
				disableElevation: buttonElevation
			}
		},
		overrides: {
			MuiButton: {
				root: {
					borderRadius: buttonBorderRadius,
					height: buttonHeight,
					padding: `${buttonPadding}px`
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
				//Shadow
				shadow={shadow}
				setShadow={setShadow}
				shadowTrue={shadowTrue}
				shadowFalse={shadowFalse}
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
			/>
		</React.Fragment>
	);
};
