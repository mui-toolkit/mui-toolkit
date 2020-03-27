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
  MenuItem,
  Link,
} from '@material-ui/core/';
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
		changeButtonBorderRadius,
		setTab
	} = props;

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

  const handleChange = e => {
    changeButtonTextTransform(e.target.value);
  };
  return (
    <React.Fragment>
      <Grid container direction='column' justify='flex'>
        <Grid container direction='row' justify='center'>
          <Link onClick={() => props.setTab(1)}>
            <Typography
              variant='outlined'
              className={classes.typography}
              onClick={() => console.log('ON CLICK!')}
            >
              Preview <VisibilityIcon />
            </Typography>
          </Link>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          {<Switch checked={!buttonRipple} onChange={changeButtonRipple} />}
          <Typography className={classes.typography}>Button Ripple</Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          {
            <Switch
              checked={!buttonElevation}
              onChange={changeButtonElevation}
            />
          }
          <Typography className={classes.typography}>
            Button Elevation
          </Typography>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <Typography className={classes.typography}>
            Button Hover Opacity
          </Typography>
          {
            <Slider
              defaultValue={buttonHoverOpacity}
              step={0.01}
              min={0.0}
              max={1.0}
              valueLabelDisplay='auto'
              getAriaValueText={changeButtonHoverOpacity}
            />
          }
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <Typography className={classes.typography}>
            Button Font Weight
          </Typography>
          {
            <Slider
              defaultValue={buttonFontWeight}
              step={100}
              min={100}
              max={700}
              valueLabelDisplay='auto'
              getAriaValueText={changeButtonFontWeight}
            />
          }
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          style={{ marginBottom: '1em' }}
        >
          <Typography className={classes.typography}>
            Button Font Size
          </Typography>

	return (
		<React.Fragment>
			<Grid container direction="column" justify="flex">
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
					<Typography className={classes.typography}>Button Font Weight</Typography>
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
					<Typography className={classes.typography}>Button Font Size</Typography>

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
					<Typography className={classes.typography}>Button Text Transform</Typography>
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
					<Typography className={classes.typography}>Button Height </Typography>

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
					<Typography className={classes.typography}>Button Padding </Typography>

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
				<Link onClick={() => setTab(1)}>
					<Typography variant="outlined" className={classes.typography}>
						Preview <VisibilityIcon />
					</Typography>
				</Link>
			</Grid>
		</React.Fragment>
	);
};
