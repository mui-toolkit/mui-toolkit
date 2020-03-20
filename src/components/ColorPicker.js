import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import PreviewAppBar from './preview/PreviewAppBar';
import Palette from './Palette';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import saveAs from 'file-saver';

export const ColorPicker = () => {
	const [ color, setColor ] = useState('');

	const changeColor = (color) => {
		setColor(color.hex);
	};

	const defaultTheme = createMuiTheme();

	const customTheme = (defaultTheme.palette.primary.light = color);
	console.log(defaultTheme.palette.primary.light);
	console.log(defaultTheme.palette);

	return (
		<div>
			<Grid container>
				<Grid>
					<Palette color={color} />
					<PreviewAppBar color={color} />
					<SketchPicker color={color} onChange={changeColor} />
				</Grid>
				<Grid>HIIII </Grid>
			</Grid>
		</div>
	);
};

export default ColorPicker;
