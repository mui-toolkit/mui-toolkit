import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab/';

export const PreviewAlert = () => {
	return (
		<React.Fragment>
			<Alert severity="error">
				<AlertTitle>Error</AlertTitle>
				This is an error alert — check it out!
			</Alert>
			<Alert severity="warning">
				<AlertTitle>Warning</AlertTitle>
				This is a warning alert — check it out!
			</Alert>
			<Alert severity="info">
				<AlertTitle>Info</AlertTitle>
				This is an info alert — check it out!
			</Alert>
			<Alert severity="success">
				<AlertTitle>Success</AlertTitle>
				This is a success alert — check it out!
			</Alert>
		</React.Fragment>
	);
};
