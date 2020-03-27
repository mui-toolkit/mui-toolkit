import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const useStyles = makeStyles(() => ({
	button: {
		marginRight: '20px',
		'&:hover': {
			backgroundColor: 'transparent'
		},
		fontWeight: 400,
		textTransform: 'none',
		borderRadius: 5,
		height: 46,
		padding: 10
	}
}));

export const ColorGenerator = (props) => {
	const classes = useStyles();

	const { setColor, setSecondaryColor, setDefaultColor, setPaperColor } = props;
	const url = 'http://colormind.io/api/';
	let data = {
		model: 'default',
		input: [ 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N' ]
	};
	let palette;

	const colorGeneration = () => {
		return new Promise(function() {
			let http = new XMLHttpRequest();
			http.onreadystatechange = () => {
				if (http.readyState == 4 && http.status == 200) {
					palette = JSON.parse(http.responseText).result;
					const colorParsing = (palette) => {
						const componentToHex = (c) => {
							const hex = c.toString(16);
							return hex.length == 1 ? '0' + hex : hex;
						};

						const rgbToHex = ([ r, g, b ]) => {
							return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
						};
						const randomColorArray = [];
						palette.forEach((colorArray) => {
							randomColorArray.push(rgbToHex(colorArray));
						});

						setColor(randomColorArray[0].toString());
						setSecondaryColor(randomColorArray[1].toString());
						setDefaultColor(randomColorArray[2].toString());
						setPaperColor(randomColorArray[3].toString());
					};
					colorParsing(palette);
				}
			};
			http.open('POST', url, true);
			http.send(JSON.stringify(data));
		});
	};
	return (
		<div>
			<Button
				onClick={colorGeneration}
				style={{
					fontFamily: 'Roboto',
					fontSize: 14,
					color: '#000'
				}}
				className={classes.button}
			>
				CLICK HERE FOR RANDOM COLORS
			</Button>
		</div>
	);
};
