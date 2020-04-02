import React from 'react';
import { Grid, Typography, Switch, Slider, Select, Button, FormControl, MenuItem, Link } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(() => ({
	typography: {
		color: '#000',
		fontSize: 16,
		fontFamily: 'Roboto',
		lineHeight: 3,
		marginLeft: '15px'
	}
}));

export const Buttons = (props) => {
	const classes = useStyles();

	const {
		buttonRipple,
		changeButtonRipple,
		buttonElevation,
		changeButtonElevation,
		buttonHoverOpacity,
		buttonFontWeight,
		buttonFontSize,
		buttonTextTransform,
		changeButtonTextTransform,
		open,
		setOpen,
		buttonHeight,
		buttonPadding,
		buttonBorderRadius,
		setTab,
		setButtonHoverOpacity,
		setButtonFontWeight,
		setButtonFontSize,
		setButtonHeight,
		setButtonBorderRadius,
		setButtonPadding
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

	const changeButtonHoverOpacity = (e, hoverOpacity) => {
		setButtonHoverOpacity(hoverOpacity);
	};

	const changeButtonFontWeight = (e, buttonFontWeight) => {
		setButtonFontWeight(buttonFontWeight);
	};

	const changeButtonFontSize = (e, buttonFontSize) => {
		setButtonFontSize(buttonFontSize);
	};

	const changeButtonHeight = (e, buttonHeight) => {
		setButtonHeight(buttonHeight);
	};

	const changeButtonBorderRadius = (e, buttonBorderRadius) => {
		setButtonBorderRadius(buttonBorderRadius);
	};

	const buttonPaddingConversion = (buttonPadding) => {
		if (typeof buttonPadding === 'string') {
			return Number(buttonPadding.slice(0, -2));
		} else {
			return buttonPadding;
		}
	};
	const changeButtonPadding = (e, buttonPadding) => {
		setButtonPadding(buttonPadding);
	};
	return (
		<React.Fragment>
			<Grid container direction="column">
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					{<Switch checked={!buttonRipple} onChange={changeButtonRipple} />}
					<Typography className={classes.typography}>Button Ripple</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					{<Switch checked={!buttonElevation} onChange={changeButtonElevation} />}
					<Typography className={classes.typography}>Button Elevation</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Hover Opacity</Typography>
					{
						<Slider
							// defaultValue={buttonHoverOpacity}
							value={buttonHoverOpacity}
							step={0.01}
							min={0.0}
							max={1.0}
							valueLabelDisplay="auto"
							// getAriaValueText={changeButtonHoverOpacity}
							onChange={changeButtonHoverOpacity}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Font Weight</Typography>
					{
						<Slider
							value={buttonFontWeight}
							step={100}
							min={100}
							max={700}
							valueLabelDisplay="auto"
							onChange={changeButtonFontWeight}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Font Size</Typography>

					{
						<Slider
							value={buttonFontSize}
							step={1}
							min={9}
							max={18}
							valueLabelDisplay="auto"
							onChange={changeButtonFontSize}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Text Transform</Typography>
					<Button onClick={handleOpen} />
					<Grid container direction="column">
						<FormControl>
							<Select
								open={open}
								onClose={handleClose}
								onOpen={handleOpen}
								value={buttonTextTransform}
								onChange={handleChange}
							>
								<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'none'}>
									None
								</MenuItem>
								<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'capitalize'}>
									Capitalize
								</MenuItem>
								<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'uppercase'}>
									Uppercase
								</MenuItem>
								<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'lowercase'}>
									Lowercase
								</MenuItem>
								<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'initial'}>
									Initial
								</MenuItem>
								<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'inherit'}>
									Inherit
								</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Border Radius </Typography>

					{
						<Slider
							value={buttonBorderRadius}
							step={1}
							min={0}
							max={25}
							valueLabelDisplay="auto"
							onChange={changeButtonBorderRadius}
						/>
					}
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Height </Typography>

					{
						<Slider
							value={buttonHeight}
							step={1}
							min={20}
							max={100}
							valueLabelDisplay="auto"
							onChange={changeButtonHeight}
						/>
					}
				</Grid>

				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Typography className={classes.typography}>Button Padding </Typography>

					{
						<Slider
							value={buttonPaddingConversion(buttonPadding)}
							step={1}
							min={0}
							max={200}
							valueLabelDisplay="auto"
							onChange={changeButtonPadding}
						/>
					}
				</Grid>
				<Link onClick={() => setTab(1)}>
					<Typography variant="outlined" className={classes.typography}>
						Preview <VisibilityIcon />
					</Typography>
				</Link>
			</Grid>
		</React.Fragment>
	);
};
