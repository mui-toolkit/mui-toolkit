import React from 'react';
import { withStyles } from '@material-ui/styles';
import PreviewAppBar from './PreviewAppBar';

export const Container = (props) => {
	return (
		<div>
			<PreviewAppBar color={props.color} />
		</div>
	);
};

export default Container;
