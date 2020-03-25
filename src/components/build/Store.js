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
	const [ buttonHoverColor, setButtonHoverColor ] = useState('');
	const [ buttonHoverOpacity, setButtonHoverOpacity ] = useState('');
	const [ buttonFontWeight, setButtonFontWeight ] = useState('');
	const [ buttonFontSize, setButtonFontSize ] = useState('');
	//none, capitalize, uppercase, lowercase, initial, inherit
	const [ buttonTextTransform, setButtonTestTransform ] = useState('');
	const [ buttonHeight, setButtonHeight ] = useState('');
	const [ buttonPadding, setButtonPadding ] = useState('');
	const [ buttonBorderRadius, setButtonBorderRadius ] = useState('');

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

	//Material-Ui handlers
	const changeExpanded = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const changeTab = (event, newTab) => {
		setTab(newTab);
	};

	let downloadTheme = {
		palette: {
			primary: { main: `${color}` ? `${color}` : '#3f51b5' },
			secondary: {
				main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057'
			},
			background: {
				paper: `${paperColor}`,
				default: `${defaultColor}`
			}
		}
	};

	const customTheme = createMuiTheme({
		palette: {
			primary: { main: `${color}` ? `${color}` : '#3f51b5' },
			secondary: {
				main: `${secondaryColor}` ? `${secondaryColor}` : '#f50057'
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
