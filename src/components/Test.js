import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
// import { GridListTile } from '@material-ui/core';

import { firebase, db } from '../config/firebase';

const useStyles = makeStyles((theme) => ({}));

export function Test(props) {
	const [ primary, setPrimary ] = useState('');
	const [ secondary, setSecondary ] = useState('');

	const foundUser = db
		.collection('Users')
		.doc('eqrjmljO97c2ccaabw9K')
		.get()
		.then((doc) => {
			console.log(doc.data());
		})
		.catch((err) => {
			console.log('Error getting document', err);
		});
	console.log('Test -> users', foundUser);

	// console.log('Test -> palette', palette);

	// const useStyles = makeStyles({
	//   table: {
	//     minWidth: 650
	//   }
	// });
	// const classes = useStyles();

	///

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('button fired');
		let newTheme = db
			.collection('CustomizedThemes')
			.add(
				{
					// palette
				}
			)
			.then((ref) => {
				console.log('Added Theme ', ref.id);
			});
		console.log('Test -> newTheme', newTheme);
	};

	return (
		<Grid container direction="row">
			<Grid item container direction="column" justify="center" alignItems="center">
				<Grid item container direction="column">
					<Grid item container direction="column" justify="center" alignItems="center">
						<Typography variant="h2">Customized Theme</Typography>
					</Grid>
				</Grid>
				<Grid item container style={{ maxWidth: '20em' }} justify="center" alignItems="center">
					{/* <Grid item container justify="center"> */}
					<form onSubmit={handleSubmit}>
						<Input
							label="Palette Primary"
							id="primary"
							value={primary}
							onChange={(e) => setPrimary(e.target.value)}
						/>
						<Input
							label="Palette Secondary"
							id="secondary"
							value={secondary}
							onChange={(e) => setSecondary(e.target.value)}
						/>
						{/* </Grid> */}
						<Button>
							<input type="submit" value="Post object" />
						</Button>
					</form>
				</Grid>
			</Grid>
		</Grid>
	);
}
/// TESTING CONNECTION TO CUSTOMIZEDTHEMES and USERS collections
// db.collection("CustomizedThemes")
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       console.log("Test -> doc", doc.data());
//       // theme.palette = doc.data().palette;
//       // theme.typography = doc.data().typography;
//     });
//   })
//   .catch(err => {
//     console.log("Error getting documents", err);
//   });
// db.collection('Users')
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       // console.log("Home -> doc", doc.data().firstName);
//       user.firstName = doc.data().firstName;
//       user.lastName = doc.data().lastName;
//       user.email = doc.data().email;
//       user.themes = doc.data().themes;
//     });
//   })
//   .catch(err => {
//     console.log('Error getting documents', err);
//   });

///

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert("button fired");
//     let newTheme = db
//       .collection("CustomizedThemes")
//       .add({
//         palette
//       })
//       .then(ref => {
//         console.log("Added Theme ", ref.id);
//       });
//     console.log("Test -> newTheme", newTheme);
//   };

//   return (
//     <Grid container direction="row">
//       <Grid
//         item
//         container
//         direction="column"
//         justify="center"
//         alignItems="center"
//       >
//         <Grid item container direction="column">
//           <Grid
//             item
//             container
//             direction="column"
//             justify="center"
//             alignItems="center"
//           >
//             <Typography variant="h2">Customized Theme</Typography>
//           </Grid>
//         </Grid>
//         <Grid
//           item
//           container
//           style={{ maxWidth: "20em" }}
//           justify="center"
//           alignItems="center"
//         >
//           {/* <Grid item container justify="center"> */}
//           <form onSubmit={handleSubmit}>
//             <Input
//               label="Palette Primary"
//               id="primary"
//               value={primary}
//               onChange={e => setPrimary(e.target.value)}
//             />
//             <Input
//               label="Palette Secondary"
//               id="secondary"
//               value={secondary}
//               onChange={e => setSecondary(e.target.value)}
//             />
//             {/* </Grid> */}
//             <Button>
//               <input type="submit" value="Post object" />
//             </Button>
//           </form>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

export default Test;
