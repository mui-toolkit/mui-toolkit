import React, { useState } from 'react';
import { Grid, Typography, Switch, Link } from '@material-ui/core/';
import { ColorPop } from './index';
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

export const General = (props) => {
	const {
		setShadow,
		shadowTrue,
		shadowFalse,
		color,
		changeColor,
		displayColorPicker,
		changeColorPickerDisplayed,
		secondaryColor,
		changeSecondaryColor,
		displaySecondaryColorPicker,
		defaultColor,
		changeDefaultColor,
		displayDefaultColorPicker,
		paperColor,
		changePaperColor,
		displayPaperColorPicker,
		setTab,
		shadow
	} = props;

	const classes = useStyles();

	const isChecked = (shadow) => {
		if (shadow == shadowTrue) {
			return true;
		} else {
			return false;
		}
	};

	const [ checked, setChecked ] = useState(false);

	const toggleChecked = () => {
		setChecked((checked) => !checked);

		if (checked) {
			setShadow(shadowFalse);
		} else if (!checked) {
			setShadow(shadowTrue);
		}
	};

	return (
		<React.Fragment>
			<Grid container direction="column">
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={color}
						changeColor={changeColor}
						displayColorPicker={displayColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('primary')}
					/>
					<Typography className={classes.typography}>Primary Color</Typography>
				</Grid>

				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={secondaryColor}
						changeColor={changeSecondaryColor}
						displayColorPicker={displaySecondaryColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('secondary')}
					/>
					<Typography className={classes.typography}>Secondary Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={defaultColor}
						changeColor={changeDefaultColor}
						displayColorPicker={displayDefaultColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('default')}
					/>
					<Typography className={classes.typography}>Default Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<ColorPop
						color={paperColor}
						changeColor={changePaperColor}
						displayColorPicker={displayPaperColorPicker}
						changeColorPickerDisplayed={() => changeColorPickerDisplayed('paper')}
					/>
					<Typography className={classes.typography}>Paper Color</Typography>
				</Grid>
				<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
					<Switch
						checked={checked}
						onChange={toggleChecked}
						name="shadows"
						// inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					<Typography className={classes.typography}>Shadows</Typography>
				</Grid>
				<Link onClick={() => setTab(0)}>
					<Typography className={classes.typography}>
						Preview <VisibilityIcon />
					</Typography>
				</Link>
			</Grid>
		</React.Fragment>
	);
};
