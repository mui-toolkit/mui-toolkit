// import React from 'react';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// // const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// import {
//   red,
//   volcano,
//   gold,
//   yellow,
//   lime,
//   green,
//   cyan,
//   blue,
//   geekblue,
//   purple,
//   magenta,
//   grey,
// } from '@ant-design/colors';

// const useStyles = makeStyles(theme => ({
//   button: {
//     marginRight: '20px',
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//     fontWeight: 400,
//     textTransform: 'none',
//     borderRadius: 5,
//     height: 46,
//     padding: 10,
//   },
// }));

// export const ColorGenerator = props => {
//   const classes = useStyles();

//   const { setColor, setSecondaryColor, setDefaultColor, setPaperColor } = props;

//   const palette = generate('#1890ff');

//   let randomColorArray = [];

//   palette.forEach(colorArray => {
//     randomColorArray.push(rgbToHex(colorArray));
//   });

//   setColor(randomColorArray[0].toString());
//   setSecondaryColor(randomColorArray[1].toString());
//   setDefaultColor(randomColorArray[2].toString());
//   setPaperColor(randomColorArray[3].toString());
// };
// return (
//   <div>
//     <Button
//       onClick={colorGeneration}
//       style={{
//         fontFamily: 'Roboto',
//         fontSize: 14,
//         color: '#000',
//       }}
//       className={classes.button}
//     >
//       CLICK HERE FOR RANDOM COLORS
//     </Button>
//   </div>
// );

// export default ColorGenerator;
