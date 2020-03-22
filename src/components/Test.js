// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Input from "@material-ui/core/Input";
// import { GridListTile } from "@material-ui/core";

// import { firebase, db } from "../config/firebase";

// const useStyles = makeStyles(theme => ({}));

// export const Test = () => {
//   const [themes, setThemes] = useState([]);
//   const [foundUser, setUser] = useState("");

//   const userThemes = [];
//   useEffect(() => {
//     const response = async () => {
//       await db
//         .collection("Users")
//         .doc("eqrjmljO97c2ccaabw9K")
//         .get()
//         .then(doc => {
//           console.log(doc.data());

//           let foundUser = doc.data();
//           Promise.all(
//             foundUser.themes.map(theme => {
//               db.collection("CustomizedThemes")
//                 .doc(`${theme.Id}`)
//                 .get()
//                 .then(theme => {
//                   console.log("themes", theme.data());
//                   userThemes.push(theme.data());
//                   console.log("response -> userThemes", userThemes);
//                   setThemes([...userThemes]);
//                 });
//             })
//           );
//           setUser(doc.data());
//         })
//         .catch(err => {
//           console.log("Error getting document", err);
//         });
//     };
//     response();
//   }, []);

//   console.log("Test -> foundUser", foundUser, foundUser.themes);
//   console.log("THEMES", themes);
//   return themes.length === 0 ? (
//     <div>no themes found!</div>
//   ) : (
//     <div>
//       <h3>
//         {foundUser.firstName} {foundUser.lastName}
//       </h3>
//       {themes.map(theme => {
//         return (
//           <div key={theme.id}>
//             <li>{JSON.stringify(theme)}</li>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Test;
// const fetchThemes = async () => {
//   return await db
//     .collection("CustomizedThemes")
//     .get()
//     .then(snapshot => {
//       snapshot.docs.map(doc => {
//         return {
//           ...doc.data(),
//           id: doc.id,
//           ref: doc.ref
//         };
//       });
//     });
// };

// const userThemes = [];
// foundUser.themes.map(theme => {
//   Promise.all(
//     db
//       .collection("CustomizedThemes")
//       .doc(`${theme.Id}`)
//       .get()
//       .then(doc => {
//         console.log("themes", doc.data());
//         // setThemes(doc.data());
//         userThemes.push(doc.data());
//         // setThemes(userThemes);
//       })
//       .catch(err => {
//         console.log("Error getting document", err);
//       })
//   );
// });
// console.log("Test -> userThemes", userThemes);

// Promise.all(userThemes).then(res => console.log(`We have themes: ${res}!`));

// useEffect(() => {
//   const userThemes = [];
//   const response = async () => {
//     foundUser.themes.map(theme => {
//       db.collection("CustomizedThemes")
//         .doc(`${theme.Id}`)
//         .get()
//         .then(doc => {
//           console.log("themes", doc.data());
//           // setThemes(doc.data());
//           userThemes.push(doc.data());
//           setThemes(userThemes);
//         })
//         .catch(err => {
//           console.log("Error getting document", err);
//         });
//     });
//   };
//   response();
// }, [themes]);

//   console.log("THEMES", themes);
//   return !themes ? (
//     <div>no themes found!</div>
//   ) : (
//     <div>
//       <h3>
//         {foundUser.firstName} {foundUser.lastName}
//       </h3>
//       {themes.map(theme => {
//         return (
//           <div key={theme.id}>
//             <li>{JSON.stringify(theme)}</li>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
//   return !foundUs  er ? (
//     <div>no user found!</div>
//   ) : (
//     foundUser.themes.map(theme => <ul key={theme.id}>{theme.Id}</ul>)
//   );
// };


// let foundUser = null;
// db.collection("Users")
//   .doc("eqrjmljO97c2ccaabw9K")
//   .get()
//   .then(doc => {
//     console.log(doc.data());
//     foundUser = doc.data();
//     foundUser.themes.map(theme => {
//       db.collection("CustomizedThemes")
//         .doc(`${theme.Id}`)
//         .get()
//         .then(theme => {
//           console.log("themes", theme.data());
//         });
//     });
//   })
//   .catch(err => {
//     console.log("Error getting document", err);
//   });
// console.log("Test -> users", foundUser);

// foundUser.themes.map(theme => {
//   db.collection("CustomizedThemes").doc(`${theme.Id}`).get().then(doc => {
//     console.log(doc.data())
//   })
// })
// const [user, updateUser] = useState({});
// const [email, setEmail] = useState("");
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [themes, setThemes] = useState([]);

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

// export default Test;
