import React from 'react';
import { Palette, SaveTheme, BuildNav } from '../build';
import { PreviewButton, PreviewTypography, PreviewAppBar, Panels } from '../preview';
import Download from '../Download';

import { Grid, Paper, Typography, Avatar } from '@material-ui/core/';

import { makeStyles, withStyles } from '@material-ui/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
// 	const { children, tab, index, ...other } = props;

// 	return (
// 		<Typography
// 			component="div"
// 			role="tabpanel"
// 			hidden={tab !== index}
// 			id={`simple-tabpanel-${index}`}
// 			aria-labelledby={`simple-tab-${index}`}
// 			{...other}
// 		>
// 			{tab === index && <Box p={4}>{children}</Box>}
// 		</Typography>
// 	);
// }

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

	// const [ value, setValue ] = React.useState(0);

	const {
		color,
		secondaryColor,
		defaultColor,
		paperColor,
		expanded,
		tab,
		changeColor,
		changeSecondaryColor,
		changePaperColor,
		changeDefaultColor,
		changeExpanded,
		changeTab,
		downloadTheme
	} = props;

	// const handleTabChange = (event, newValue) => {
	// 	setValue(newValue);
	// };
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
									value={tab}
									onChange={changeTab}
									aria-label="simple tabs example"
									className={classes.tabContainer}
									centered
								>
									<Tab label="Item One" />
									<Tab label="Buttons" />
									<Tab label="Typography" />
									<Tab label="Alerts" />
								</Tabs>
								<Panels tab={tab} />
							</div>
						</Grid>
					</Paper>
				</Grid>
				{/* Preview End */}
			</Grid>
		</section>
	);
};
