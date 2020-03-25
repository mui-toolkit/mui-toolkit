import React from 'react';
import { ColorPop } from './index';
import { Grid, Typography, Switch, Slider, Select } from '@material-ui/core/';

export const Buttons = (props) => {
	const {
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
		buttonHeight,
		changeButtonHeight,
		buttonPadding,
		changeButtonPadding,
		buttonBorderRadius,
		changeButtonBorderRadius
	} = props;
	console.log('PROPS', props);
	return (
		<React.Fragment>
			<Grid container direction="column" justify="flex">
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					Button Ripple {<Switch checked={!buttonRipple} onChange={changeButtonRipple} />}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					Button Elevation {<Switch checked={!buttonElevation} onChange={changeButtonElevation} />}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					Button Hover Opacity
					{
						<Slider
							defaultValue={buttonHoverOpacity}
							step={0.01}
							min={0.0}
							max={1.0}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonHoverOpacity}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					Button Font Weight
					{
						<Slider
							defaultValue={buttonFontWeight}
							step={100}
							min={100}
							max={700}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonFontWeight}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					Button Font Size
					{
						<Slider
							defaultValue={buttonFontSize}
							step={0.1}
							min={0.1}
							max={2}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonFontSize}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					Button Text Transform
					{
						<Slider
							defaultValue={buttonFontSize}
							step={0.1}
							min={0.1}
							max={2}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonFontSize}
						/>
					}
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
