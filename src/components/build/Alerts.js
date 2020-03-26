import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { ColorPop } from './index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	typography: {
		marginLeft: '15px',
		color: '#000',
		fontSize: 16,
		fontFamily: 'Roboto'
	}
}));

export const Alerts = (props) => {
	const classes = useStyles();
	const {
		errorColor,
		warningColor,
		infoColor,
		successColor,
		errorColorPicker,
		warningColorPicker,
		infoColorPicker,
		successColorPicker,
		changeErrorColor,
		changeWarningColor,
		changeInfoColor,
		changeSuccessColor,
		changeColorPickerDisplayed
	} = props;

	console.log('change error color', changeErrorColor);

	return (
		<React.Fragment>
			<Grid container direction="column" justify="flex">
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={errorColor}
						changeColor={changeErrorColor}
						displayColorPicker={errorColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('error')}
					/>
					<Typography className={classes.typography}>Error Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={warningColor}
						changeColor={changeWarningColor}
						displayColorPicker={warningColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('warning')}
					/>
					<Typography className={classes.typography}>Warning Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={infoColor}
						changeColor={changeInfoColor}
						displayColorPicker={infoColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('info')}
					/>
					<Typography className={classes.typography}>Info Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={successColor}
						changeColor={changeSuccessColor}
						displayColorPicker={successColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('error')}
					/>
					<Typography className={classes.typography}>successColor Color</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
