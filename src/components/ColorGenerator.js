import React from 'react';
import { Button } from '@material-ui/core';
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export const ColorGenerator = (props) => {
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
							var hex = c.toString(16);
							return hex.length == 1 ? '0' + hex : hex;
						};

						const rgbToHex = ([ r, g, b ]) => {
							return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
						};
						let randomColorArray = [];
						palette.forEach((colorArray) => {
							randomColorArray.push(rgbToHex(colorArray));
							// let randomColorArray = [ rgbToHex(colorArray) ];
							// [ ...randomColorArray, rgbToHex(colorArray) ];
							// console.log(randomColorArray);
							// console.log(randomColorArray);
						});
						setColor(randomColorArray[0].toString());
						setSecondaryColor(randomColorArray[1].toString());
						setDefaultColor(randomColorArray[2].toString());
						setPaperColor(randomColorArray[3].toString());

						// changeSecondaryColor(randomColorArray[1]);
						// changeDefaultColor(randomColorArray[2]);
						// changePaperColor(randomColorArray[3]);
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
			<Button onClick={colorGeneration}>CLICK HERE FOR RANDOM COLORS</Button>
		</div>
	);
};

export default ColorGenerator;
