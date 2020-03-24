import React, { useState } from 'react';
import { Build } from '../build';
import { createMuiTheme } from '@material-ui/core/';
import { ThemeProvider } from '@material-ui/styles';

export const Store = () => {
	const [ color, setColor ] = useState('#3f51b5');
	const [ secondaryColor, setSecondaryColor ] = useState('#f50057');
	const [ defaultColor, setDefaultColor ] = useState('#fafafa');
	const [ paperColor, setPaperColor ] = useState('#FFF');
	const [ expanded, setExpanded ] = React.useState('panel1');
	const [ displayColorPicker, setDisplayColorPicker ] = useState(false);
	const [ displaySecondaryColorPicker, setDisplaySecondaryColorPicker ] = useState(false);

	const [ displayDefaultColorPicker, setDisplayDefaultColorPicker ] = useState(false);

	const [ displayPaperColorPicker, setDisplayPaperColorPicker ] = useState(false);

	const [ tab, setTab ] = useState(0);

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

	const changeExpanded = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const changeTab = (event, newTab) => {
		setTab(newTab);
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
					secondaryColor={secondaryColor}
					defaultColor={defaultColor}
					paperColor={paperColor}
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
				/>
			</ThemeProvider>
		</React.Fragment>
	);
};
