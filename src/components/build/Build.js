import React from 'react';
import { Palette, SaveTheme } from '../build';
import { PreviewButton, PreviewTypography, PreviewAppBar } from '../preview';
import Download from '../Download';

import { Grid, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
		// flex: 3,
		// flexDirection: 'column',
	},
	// buttonRoot: {
	//   padding: theme.spacing.unit,
	// },
	// selector: {
	//   // alignSelf: 'center',
	//   // margin: theme.spacing.unit,
	// },
	container: {
		// align: 'center',
		flex: 1,
		overflow: 'auto',
		width: '50%'
		// background: '#000',
	},
	builderPaper: {
		padding: '1em',
		marginTop: '5em',
		textAlign: 'center',
		background: '#fff'
		// color: theme.palette.text.secondary,
	},
	previewPaper: {
		padding: '5em',
		marginTop: '2em',
		textAlign: 'center',
		background: '#fff'

		// color: theme.palette.text.secondary,
		// height: '100vh',
		// background: '#000',
	}
}));

export const Build = (props) => {
	const classes = useStyles();

	const {
		color,
		secondaryColor,
		defaultColor,
		paperColor,
		changeColor,
		changeSecondaryColor,
		changePaperColor,
		changeDefaultColor,
		downloadTheme
	} = props;

	// needs a themeName pop up so user can name their theme and it will be referenced in the table of Saved Themes.  .collection('CT').doc(`${themeName}`.set({})) should create a new collection in CustomizedThemes with doc name themeName and allow the collection to contain any/all fields

	return (
		<section className={classes.root}>
			<Grid container>
				<Grid item className={classes.selector}>
					<Paper className={classes.builderPaper}>
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
						{/* Theme Builder End */}
					</Paper>
				</Grid>
				<Grid item className={classes.container}>
					<Paper className={classes.previewPaper} style={{ background: `${defaultColor}` }}>
						{/* Preview Start */}

						<Grid item>
							<PreviewAppBar
								secondaryColor={secondaryColor}
								color={color}
								className={classes.container}
							/>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<PreviewButton />
								</Grid>
								<Grid item xs={12}>
									<PreviewTypography />
								</Grid>
							</Grid>
						</Grid>

						<Download downloadTheme={downloadTheme} />
						{/* Preview End */}
						<SaveTheme downloadTheme={downloadTheme} />
					</Paper>
				</Grid>
			</Grid>
		</section>
	);
};
