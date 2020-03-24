import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// function TabPanel(props) {
// 	const { children, tab, index, ...other } = props;

// 	<Typography
// 		component="div"
// 		role="tabpanel"
// 		hidden={tab !== index}
// 		id={`simple-tabpanel-${index}`}
// 		aria-labelledby={`simple-tab-${index}`}
// 		{...other}
// 	>
// 		{tab === index && <Box p={4}>{children}</Box>}
// 	</Typography>;
// }

export function Panels(props) {
	const { children, tab, index, ...other } = props;

	return (
		<div>
			<div>
				<Typography
					tab={tab}
					index={0}
					component="div"
					role="tabpanel"
					hidden={tab !== index}
					id={`simple-tabpanel-${index}`}
					aria-labelledby={`simple-tab-${index}`}
					{...other}
				>
					item one
					{tab === index && <Box p={4}>{children}</Box>}
				</Typography>

				<Typography
					tab={tab}
					index={0}
					component="div"
					role="tabpanel"
					hidden={tab !== index}
					id={`simple-tabpanel-${index}`}
					aria-labelledby={`simple-tab-${index}`}
					{...other}
				>
					item two
					{tab === index && <Box p={4}>{children}</Box>}
				</Typography>

				<Typography
					tab={tab}
					index={0}
					component="div"
					role="tabpanel"
					hidden={tab !== index}
					id={`simple-tabpanel-${index}`}
					aria-labelledby={`simple-tab-${index}`}
					{...other}
				>
					item three
					{tab === index && <Box p={4}>{children}</Box>}
				</Typography>

				<Typography
					tab={tab}
					index={0}
					component="div"
					role="tabpanel"
					hidden={tab !== index}
					id={`simple-tabpanel-${index}`}
					aria-labelledby={`simple-tab-${index}`}
					{...other}
				>
					item four
					{tab === index && <Box p={4}>{children}</Box>}
				</Typography>
			</div>

			{/* <TabPanel tab={tab} index={1}>
				<Grid item xs={12}>
					<PreviewButton />
				</Grid>
			</TabPanel>
			<TabPanel tab={tab} index={2}>
				<Grid item xs={12}>
					<PreviewTypography />
				</Grid>
			</TabPanel>
			<TabPanel tab={tab} index={3}>
				Alerts
			</TabPanel> */}
		</div>
	);
}
