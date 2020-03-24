import React from 'react';
import { Palette, SaveTheme, BuildNav, ColorPop } from '../build';
import { PreviewButton, PreviewTypography, PreviewAppBar } from '../preview';
import Download from '../Download';

import { Grid, Paper, Typography, Avatar, Tabs, Tab, Box } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={4}>{children}</Box>}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	preview: {
		padding: '2em',
		textAlign: 'center'
	},
	previewPaper: {
		marginTop: '5em',
		textAlign: 'center',
		background: '#fff',
		height: '100%'
	},
	builderPaper: {
		marginTop: '5em',
		textAlign: 'center',
		background: '#fff'
	}
}));

export const Build = (props) => {
	const classes = useStyles();

	const [ value, setValue ] = React.useState(0);

	const {
		color,
		secondaryColor,
		defaultColor,
		paperColor,
		expanded,
		displayColorPicker,
		changeColor,
		changeSecondaryColor,
		changePaperColor,
		changeDefaultColor,
		changeExpanded,
		changeColorPickerDisplayed,
		downloadTheme,
		displaySecondaryColorPicker,
		changeSecondaryColorPickerDisplayed
	} = props;

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	// needs a themeName pop up so user can name their theme and it will be referenced in the table of Saved Themes.  .collection('CT').doc(`${themeName}`.set({})) should create a new collection in CustomizedThemes with doc name themeName and allow the collection to contain any/all fields

	return (
		<section className={classes.root}>
			<Grid container spacing={1}>
				{/* BUILD START */}
				<Grid item xs={3} className={classes.selector}>
					<Paper className={classes.builderPaper}>
						<BuildNav expanded={expanded} changeExpanded={changeExpanded} />
						<Grid item>
							<Download downloadTheme={downloadTheme} />
							<SaveTheme downloadTheme={downloadTheme} />

							<Palette
								color={color}
								secondaryColor={secondaryColor}
								defaultColor={defaultColor}
								paperColor={paperColor}
								changeColor={changeColor}
								changeSecondaryColor={changeSecondaryColor}
								changeDefaultColor={changeDefaultColor}
								changePaperColor={changePaperColor}
								displayColorPicker={displayColorPicker}
								changeColorPickerDisplayed={changeColorPickerDisplayed}
								displaySecondaryColorPicker={displaySecondaryColorPicker}
								changeSecondaryColorPickerDisplayed={changeSecondaryColorPickerDisplayed}
							/>
						</Grid>
					</Paper>
				</Grid>
				{/* BUILD END */}
				{/* Preview Start */}
				<Grid item xs={9}>
					<Paper className={classes.previewPaper} style={{ background: `${defaultColor}` }}>
						<PreviewAppBar secondaryColor={secondaryColor} color={color} className={classes.container} />
						<Grid item className={classes.preview}>
							<div className={classes.root}>
								<Tabs
									value={value}
									onChange={handleChange}
									aria-label="simple tabs example"
									className={classes.tabContainer}
									centered
								>
									<Tab label="Item One" />
									<Tab label="Buttons" />
									<Tab label="Typography" />
									<Tab label="Alerts" />
								</Tabs>
								<TabPanel value={value} index={0}>
									item one
								</TabPanel>
								<TabPanel value={value} index={1}>
									<Grid item xs={12}>
										<PreviewButton />
									</Grid>
								</TabPanel>
								<TabPanel value={value} index={2}>
									<Grid item xs={12}>
										<PreviewTypography />
									</Grid>
								</TabPanel>
								<TabPanel value={value} index={3}>
									Alerts
								</TabPanel>
							</div>
						</Grid>
					</Paper>
				</Grid>
				{/* Preview End */}
			</Grid>
		</section>
	);
};
