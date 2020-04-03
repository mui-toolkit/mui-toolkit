import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import muiLogo from '.././imgs/material-ui-logo.png';
import Grid from '@material-ui/core/Grid';
import { Typography, Link } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';
import GitHubIcon from '@material-ui/icons/GitHub';

import mui1 from '.././imgs/mui1.jpg';
import mui2 from '.././imgs/mui2.jpg';
import mui3 from '.././imgs/mui3.jpg';
import mui4 from '.././imgs/mui4.jpg';
import mui5 from '.././imgs/mui5.jpg';
import mui6 from '.././imgs/mui6.jpg';
import mui7 from '.././imgs/mui7.jpg';
import mui8 from '.././imgs/mui8.jpg';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
	root: {
		color: 'black',
		height: '100%',
		marginBottom: '10em'
	},
	title: {
		padding: '1em'
	},
	container: {
		paddingTop: '5em',
		paddingLeft: '200px',
		paddingRight: '200px'
	},
	tab: {
		textIndent: '30px'
	},
	paragraph: {
		color: '#818181'
	},
	hr: {
		marginTop: '8em',
		marginBottom: '2em'
	},
	contentLinks: {
		color: '#818181',
		fontSize: 20,
		lineHeight: 2,
		fontFamily: 'Roboto',
		fontWeight: 100
	}
});

export default function Learn() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Grid id="learn" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Learn
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							New to mymui? This information page will give you guidance on all the features that mymui
							has to offer. Use this page as a resource to get started on designing your Material-UI
							components.
						</Typography>
						<br />
						<Typography> CONTENTS</Typography>
						<HashLink smooth to="#what-is-material-ui" className={classes.contentLinks}>
							What is Material-Ui?
						</HashLink>
						<br />
						<HashLink className={classes.contentLinks} smooth to="#what-is-mymui">
							What is mymui?
						</HashLink>
						<br />
						<HashLink smooth to="#grid-builder" className={classes.contentLinks}>
							Grid Builder
						</HashLink>
						<br />
						<HashLink to="#theme-styler" className={classes.contentLinks}>
							Theme Styler
						</HashLink>
						<br />
						<HashLink smooth to="#download" className={classes.contentLinks}>
							Download
						</HashLink>
						<br />
						<HashLink smooth to="#save" className={classes.contentLinks}>
							Save
						</HashLink>
						<br />
						<HashLink smooth to="#share" className={classes.contentLinks}>
							Share
						</HashLink>
						<br />
						<HashLink smooth to="#about" className={classes.contentLinks}>
							About
						</HashLink>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui logo" src={mui1} />
					</Grid>
				</Grid>
				<hr className={classes.hr} />
				<Grid
					id="what-is-material-ui"
					container
					direction="row"
					alignItems="center"
					className={classes.container}
				>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Material-UI
						</Typography>
						<Typography gutterBottom style={{ fontSize: 20 }}>
							{' '}
							What is Material-UI?
						</Typography>
						<Typography variant="body1" align="left" gutterBottom className={classes.paragraph}>
							Material-UI is a popular React UI Framework with 55.5k stars on Github. Material-UI has
							created what's called a{' '}
							<Link href="https://material-ui.com/styles/api/#themeprovider">ThemeProvider</Link>{' '}
							component that allows you to inject a theme into your application.
							<br />
							<br />
							ThemeProvider relies on the context feature of React in order to pass your custom theme down
							to the components. This means the ThemeProvider component will need to be the parent
							component that wraps all the other components you want styled. This feature allows for less
							in-line styling, and allows for consistent styling throughout your application. Check out
							Material-Ui's documentation to learn more about{' '}
							<Link href="https://material-ui.com/customization/theming/">theming</Link>
							.
						</Typography>
					</Grid>

					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui2" src={mui2} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>
				<hr className={classes.hr} />
				<Grid id="what-is-mymui" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							mymui.
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							What is mymui?
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							mymui provides two tools for styling and building Material-UI components quickly and easily.{' '}
							<br />
							<br />
							The first is the{' '}
							<Link href="/design">
								<b>Theme Styler</b>
							</Link>
							, which allows you to customize your Material-UI theme without having to frequently refer to
							documentation. The dynamic interface provides a step by step guide on the parameters you can
							manipulate within the ThemeProvider. Once finished, you can download the json file and copy
							and paste the code into your own project.
							<br />
							<br />
							The second tool is the{' '}
							<Link href="/grid">
								<b>Grid Builder</b>
							</Link>
							. This tool follows the 12 column grid system, and is meant to help users visualize how
							Material-UI structures{' '}
							<Link href="https://material-ui.com/components/grid">grid layouts</Link> and positioning.
						</Typography>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui3" src={mui3} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>
				<hr className={classes.hr} />

				<Grid id="grid-builder" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Grid Builder
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							Drag and drop some grids!
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							If you have trouble understanding grid systems and layouts, this tool is for you!{' '}
							<Link href="/grid">
								<b>Grid Builder</b>
							</Link>{' '}
							helps visualize how Material-UI uses{' '}
							<Link href="https://material-ui.com/components/grid/">grid containers and items</Link>
							. It also helps you understand how to position and align your items to achieve your desired
							layout.
						</Typography>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui4" src={mui4} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>

				<hr className={classes.hr} />

				<Grid id="theme-styler" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Theme Styler
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							Style your Material-UI Theme Provider
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							Our{' '}
							<Link href="design">
								<b>Theme Styler</b>
							</Link>{' '}
							allows you to style your ThemeProvider component with a dynamic and visual interface. No
							need to look at the documentation — just select the colors and styles you want and download
							your theme!
						</Typography>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui5" src={mui5} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>

				<hr className={classes.hr} />

				<Grid id="download" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Download
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							What do I do with my downloaded file?
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							Once you've downloaded the file created by our{' '}
							<Link href="/design">
								<b>Theme Styler</b>
							</Link>
							, open up the json file and copy the object into your createMuiTheme function. This will
							generate a theme based on the custom object you provide!
							<br />
							<br />
							Visit the{' '}
							<Link href="https://material-ui.com/customization/theming/#api">
								Material-UI's API
							</Link>{' '}
							documentation for more information on this works.
						</Typography>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui6" src={mui6} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>
				<hr className={classes.hr} />
				<Grid id="save" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Save
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							Saving your themes.
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							mymui allows logged in users to save their themes when using our{' '}
							<Link href="/design">
								<b>Theme Styler</b>
							</Link>
							. As a logged in user, your themes will be stored in a user{' '}
							<Link href="/dashboard">
								<b>dashboard</b>
							</Link>{' '}
							where you can save, edit, preview, and delete your themes.
						</Typography>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui8" src={mui8} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>
				<hr className={classes.hr} />
				<Grid id="share" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							Share
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							Share and Explore.
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							Upload and share your the themes you've created on our{' '}
							<Link href="/explore">
								{' '}
								<b>explore page</b>
							</Link>
							! The explore page allows you to view, star, and bookmark themes created by other users, and
							share your custom themes with the mymui community.
						</Typography>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui7" src={mui7} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>
				<hr className={classes.hr} />
				<Grid id="about" container direction="row" alignItems="center" className={classes.container}>
					<Grid item className={classes.title} xs={6}>
						<Typography variant="h3" align="left" gutterBottom>
							About
						</Typography>
						<Typography style={{ fontSize: 20 }} gutterBottom>
							Team
						</Typography>
						<Typography variant="body1" align="left" className={classes.paragraph} gutterBottom>
							mymui was conceptulized and built by Manny Garcia, Nelson Liu, Rana Quadri, and Alexander
							Wang. <br /> <br />Created with React, Firebase, Firestore, Material-UI, FileSaver, and
							thum.io.
						</Typography>
						<Link href="https://github.com/mui-toolkit/mui-toolkit">
							<GitHubIcon />
						</Link>
					</Grid>
					<Grid item align="center" className={classes.title} xs={6}>
						<img alt="mui7" src={mui7} style={{ width: '100%' }} />
					</Grid>
					<Grid container direction="row-reverse" alignItems="flex-end">
						<HashLink to="#learn">
							<ArrowUpwardIcon />
						</HashLink>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
}
