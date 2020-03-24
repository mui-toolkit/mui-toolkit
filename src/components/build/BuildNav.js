import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const useStyles = makeStyles((theme) => ({
	bubble: {
		borderColor: '#c2c2c2',
		borderStyle: 'solid',
		borderWidth: 1
	},
	expansionPanel: {
		background: '#fff'
	}
}));

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiExpansionPanelDetails);

export function BuildNav(props) {
	const classes = useStyles();
	const { expanded, changeExpanded } = props;
	// const [expanded, setExpanded] = React.useState('panel1');

	// const handleChange = panel => (event, newExpanded) => {
	//   setExpanded(newExpanded ? panel : false);
	// };

	return (
		<React.Fragment>
			<Grid Item>
				<ExpansionPanel
					square
					expanded={expanded === 'panel1'}
					onChange={changeExpanded('panel1')}
					className={classes.expansionPanel}
				>
					<ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
						<Typography>General</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container direction="column" justify="flex-start">
							<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
								<Avatar
									style={{
										color: '#fff',
										background: '#fff',
										marginRight: '10px'
									}}
									className={classes.bubble}
								/>
								<Typography>Primary Color</Typography>
							</Grid>
							<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
								<Avatar
									style={{
										color: '#fff',
										background: '#fff',
										marginRight: '10px'
									}}
									className={classes.bubble}
								/>
								<Typography>Secondary Color</Typography>
							</Grid>
							<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
								<Avatar
									style={{
										color: '#fff',
										background: '#fff',
										marginRight: '10px'
									}}
									className={classes.bubble}
								/>
								<Typography>Default</Typography>
							</Grid>
							<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
								<Avatar
									style={{
										color: '#fff',
										background: '#fff',
										marginRight: '10px'
									}}
									className={classes.bubble}
								/>
								<Typography>Paper</Typography>
							</Grid>
							<Grid container direction="row" alignItems="center" style={{ marginBottom: '1em' }}>
								<Avatar
									style={{
										color: '#fff',
										background: '#fff',
										marginRight: '10px'
									}}
									className={classes.bubble}
								/>
								<Typography>Drop Shadow</Typography>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel2'}
					onChange={changeExpanded('panel2')}
					className={classes.expansionPanel}
				>
					<ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
						<Typography>Buttons</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
							amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel3'}
					onChange={changeExpanded('panel3')}
					className={classes.expansionPanel}
				>
					<ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
						<Typography>Typography</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
							amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel
					square
					expanded={expanded === 'panel4'}
					onChange={changeExpanded('panel4')}
					className={classes.expansionPanel}
				>
					<ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
						<Typography>Alerts</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
							amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</Grid>
		</React.Fragment>
	);
}
