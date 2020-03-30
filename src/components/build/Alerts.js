import React, { useState } from 'react';
import { ColorPop } from './index';
import { Grid, Typography, Link, MenuItem, FormControl, Button, Select } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
		changeColorPickerDisplayed,
		alertVariant,
		changeAlertVariant,
		setTab
	} = props;

	const [ open, setOpen ] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleChange = (e) => {
		changeAlertVariant(e.target.value);
	};

	console.log('changealertvariant', changeAlertVariant);

	return (
		<React.Fragment>
			<Grid
				container
				direction="column"
				alignItems="flex-start"
				style={{ marginBottom: '1em' }}
				justify="flex-start"
			>
				<Grid
					container
					direction="row"
					alignItems="flex-start"
					style={{ marginBottom: '1em' }}
					justify="flex-start"
				>
					<Grid item xs={6}>
						<Typography>Alert Variant</Typography>
					</Grid>
					<Grid item xs={6}>
						<Grid container direction="column">
							<FormControl>
								<Select
									open={open}
									onClose={handleClose}
									onOpen={handleOpen}
									value={alertVariant}
									onChange={handleChange}
								>
									<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'standard'}>
										Standard
									</MenuItem>
									<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'outlined'}>
										Outlined
									</MenuItem>
									<MenuItem style={{ color: '#000', backgroundColor: '#fff' }} value={'filled'}>
										Filled
									</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>

				<Grid container direction="column">
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
							changeColorPickerDisplayed={() => changeColorPickerDisplayed('success')}
						/>
						<Typography className={classes.typography}>Success Color</Typography>
					</Grid>
					<Link onClick={() => setTab(3)}>
						<Typography variant="outlined" className={classes.typography}>
							Preview <VisibilityIcon />
						</Typography>
					</Link>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};
