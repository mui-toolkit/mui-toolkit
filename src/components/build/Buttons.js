import React from 'react';
import {
	Grid,
	Typography,
	Switch,
	Slider,
	Select,
	Button,
	FormControl,
	InputLabel,
	MenuItem
} from '@material-ui/core/';

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
		open,
		setOpen,
		buttonHeight,
		changeButtonHeight,
		buttonPadding,
		changeButtonPadding,
		buttonBorderRadius,
		changeButtonBorderRadius
	} = props;

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleChange = (e) => {
		changeButtonTextTransform(e.target.value);
	};
	return (
		<React.Fragment>
			<Grid container direction="column" justify="flex">
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					{<Switch checked={!buttonRipple} onChange={changeButtonRipple} />}
					<Typography style={{ marginLeft: '15px' }}>Button Ripple</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					{<Switch checked={!buttonElevation} onChange={changeButtonElevation} />}
					<Typography style={{ marginLeft: '15px' }}>Button Elevation</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography style={{ marginLeft: '15px' }}>Button Hover Opacity</Typography>
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
					<Typography style={{ marginLeft: '15px' }}>Button Font Weight</Typography>
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
					<Typography style={{ marginLeft: '15px' }}>Button Font Size</Typography>

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
					<Typography style={{ marginLeft: '15px' }}>Button Text Transform</Typography>
					<Button onClick={handleOpen} />
					<Grid container direction="column">
						<FormControl>
							<Select
								labelId="demo-controlled-open-select-label"
								id="demo-controlled-open-select"
								open={open}
								onClose={handleClose}
								onOpen={handleOpen}
								value={buttonTextTransform}
								onChange={handleChange}
							>
								<MenuItem value={'none'}>None</MenuItem>
								<MenuItem value={'capitalize'}>Capitalize</MenuItem>
								<MenuItem value={'uppercase'}>Uppercase</MenuItem>
								<MenuItem value={'lowercase'}>Lowercase</MenuItem>
								<MenuItem value={'initial'}>Initial</MenuItem>
								<MenuItem value={'inherit'}>Inherit</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography style={{ marginLeft: '15px' }}>Button Border Radius </Typography>

					{
						<Slider
							defaultValue={buttonBorderRadius}
							step={1}
							min={0}
							max={25}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonBorderRadius}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography style={{ marginLeft: '15px' }}>Button Height </Typography>

					{
						<Slider
							defaultValue={buttonHeight}
							step={1}
							min={20}
							max={100}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonHeight}
						/>
					}
				</Grid>

				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography style={{ marginLeft: '15px' }}>Button Padding </Typography>

					{
						<Slider
							defaultValue={buttonPadding}
							step={1}
							min={0}
							max={200}
							valueLabelDisplay="auto"
							getAriaValueText={changeButtonPadding}
						/>
					}
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
