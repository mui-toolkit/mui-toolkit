import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function PreviewAppBar(props) {
	const useStyles = makeStyles((theme) => ({
		root: {
			padding: theme.spacing.unit
		},
		primary: {
			background: `${props.color}`
		},
		toolBarMargin: {
			...theme.mixins.toolbar
		}
	}));
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar className={classes.primary}>
				<Toolbar>
					<Typography>Primary Color</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
