'use strict';
import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

export const ColorPop = (props) => {
	const { color, changeColor, displayColorPicker, changeColorPickerDisplayed } = props;

	const styles = reactCSS({
		default: {
			color: {
				width: '40px',
				height: '40px',
				borderRadius: '50%',
				background: `${color}`
			},
			swatch: {
				padding: '3px',
				background: '#fff',
				borderRadius: '50%',
				boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
				display: 'inline-block',
				cursor: 'pointer'
			},
			popover: {
				position: 'absolute',
				zIndex: 1300
			},
			cover: {
				position: 'fixed',
				top: '0px',
				right: '0px',
				bottom: '0px',
				left: '0px'
			}
		}
	});

	return (
		<React.Fragment>
			<div style={styles.swatch} onClick={changeColorPickerDisplayed}>
				<div style={styles.color} />
			</div>
			{displayColorPicker ? (
				<div style={styles.popover}>
					<div style={styles.cover} onClick={changeColorPickerDisplayed} />
					<SketchPicker color={color} onChange={changeColor} />
				</div>
			) : null}
		</React.Fragment>
	);
};
