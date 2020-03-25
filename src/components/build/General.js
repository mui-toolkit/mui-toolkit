import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { ColorPop } from './index';
import { SketchPicker } from 'react-color';

export const General = (props) => {
	const {
		color,
		changeColor,
		displayColorPicker,
		changeColorPickerDisplayed,
		secondaryColor,
		changeSecondaryColor,
		displaySecondaryColorPicker,
		changeSecondaryColorPickerDisplayed,
		defaultColor,
		changeDefaultColor,
		displayDefaultColorPicker,
		changeDefaultColorPickerDisplayed,
		paperColor,
		changePaperColor,
		displayPaperColorPicker,
		changePaperColorPickerDisplayed
	} = props;

	return (
		<React.Fragment>
			<Grid container direction="column" justify="flex">
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={color}
						changeColor={changeColor}
						displayColorPicker={displayColorPicker}
						changeColorPickerDisplayed={changeColorPickerDisplayed}
					/>
					<Typography style={{ marginLeft: '15px' }}>Primary Color</Typography>
				</Grid>

				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={secondaryColor}
						changeColor={changeSecondaryColor}
						displayColorPicker={displaySecondaryColorPicker}
						changeColorPickerDisplayed={changeSecondaryColorPickerDisplayed}
					/>
					<Typography style={{ marginLeft: '15px' }}>Secondary Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={defaultColor}
						changeColor={changeDefaultColor}
						displayColorPicker={displayDefaultColorPicker}
						changeColorPickerDisplayed={changeDefaultColorPickerDisplayed}
					/>
					<Typography style={{ marginLeft: '15px' }}>Default Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={paperColor}
						changeColor={changePaperColor}
						displayColorPicker={displayPaperColorPicker}
						changeColorPickerDisplayed={changePaperColorPickerDisplayed}
					/>
					<Typography style={{ marginLeft: '15px' }}>Paper Color</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
