import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ColorPop } from './index';
import { SketchPicker } from 'react-color';

export const Palette = (props) => {
	console.log('PROPS ====', props);

	return (
		<React.Fragment>
			<Grid container direction="column">
				<Grid item>
					<p>Primary color is {props.color} </p>
					<ColorPop
						color={props.color}
						changeColor={props.changeColor}
						displayColorPicker={props.displayColorPicker}
						changeColorPickerDisplayed={props.changeColorPickerDisplayed}
					/>
				</Grid>

				<Grid item>
					<p>Secondary color is {props.secondaryColor}</p>
					<ColorPop
						color={props.secondaryColor}
						changeColor={props.changeSecondaryColor}
						displayColorPicker={props.displaySecondaryColorPicker}
						changeColorPickerDisplayed={props.changeSecondaryColorPickerDisplayed}
					/>
					{/* 
					<SketchPicker color={props.secondaryColor} onChange={props.changeSecondaryColor} /> */}
				</Grid>
				<Grid item>
					<p>Default color is {props.defaultColor}</p>
					<ColorPop
						color={props.defaultColor}
						changeColor={props.changeDefaultColor}
						displayColorPicker={props.displayDefaultColorPicker}
						changeColorPickerDisplayed={props.changeDefaultColorPickerDisplayed}
					/>
				</Grid>
				<Grid item>
					<p>Paper color is {props.paperColor}</p>
					<ColorPop
						color={props.paperColor}
						changeColor={props.changePaperColor}
						displayColorPicker={props.displayPaperColorPicker}
						changeColorPickerDisplayed={props.changePaperColorPickerDisplayed}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
