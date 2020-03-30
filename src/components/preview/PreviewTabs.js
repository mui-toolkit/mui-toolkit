import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PreviewButton, PreviewTypography, PreviewGeneral, PreviewAlert } from '../preview';
import { Box, Typography } from '@material-ui/core';

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

export function PreviewTabs(props) {
	const { tab, changeTab, fontStyle } = props;
	return (
		<React.Fragment>
			<div>
				<Tabs value={tab} onChange={changeTab} aria-label="simple tabs example" centered>
					<Tab label="General" />
					<Tab label="Buttons" />
					<Tab label="Typography" />
					<Tab label="Alerts" />
				</Tabs>
				<TabPanel value={tab} index={0}>
					<PreviewGeneral />
				</TabPanel>
				<TabPanel value={tab} index={1}>
					<PreviewButton />
				</TabPanel>
				<TabPanel value={tab} index={2}>
					<PreviewTypography />
				</TabPanel>
				<TabPanel value={tab} index={3}>
					<PreviewAlert />
				</TabPanel>
			</div>
		</React.Fragment>
	);
}
