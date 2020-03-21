import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { GridListTile } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

import { firebase, db } from "../config/firebase";

const useStyles = makeStyles(theme => ({}));

function Test(props) {
  // const [primary, setPrimary] = useState("");
  // const [secondary, setSecondary] = useState("");
  // const palette = { primary, secondary };
  // console.log("Test -> palette", palette);

  const foundUser = db
    .collection("Users")
    .doc("eqrjmljO97c2ccaabw9K")
    .get()
    .then(doc => {
      console.log(doc.data());
    })
    .catch(err => {
      console.log("Error getting document", err);
    });
  console.log("Test -> users", foundUser);

  // const [user, updateUser] = useState({});
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [themes, setThemes] = useState([]);

  // const useStyles = makeStyles({
  //   table: {
  //     minWidth: 650
  //   }
  // });
  // const classes = useStyles();

  return !foundUser ? (
    <div>No User found!</div>
  ) : (
    <div>
      <ul>
        {foundUser.themes.map(theme => {
          return <li>theme.Id</li>;
        })}
      </ul>
    </div>
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Customized Themes</TableCell>
    //         <TableCell align="right">Id</TableCell>
    //         <TableCell align="right">Palette Primary</TableCell>
    //         <TableCell align="right">Palette Secondary</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {foundUser.themes.map((theme, i) => (
    //         <TableRow key={i}>
    //           <TableCell component="th" scope="row">
    //             Some Name
    //             {/* {row.name} */}
    //           </TableCell>
    //           <TableCell align="right">{theme.id}</TableCell>
    //           <TableCell align="right">Primary</TableCell>
    //           <TableCell align="right">Secondary</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
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
