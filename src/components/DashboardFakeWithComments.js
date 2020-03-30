// TO BE DELETED. SORRY LOTS OF POTENTIAL CODE HERE

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import HomeIcon from "@material-ui/icons/Home";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import FaceIcon from "@material-ui/icons/Face";
// import PaletteIcon from "@material-ui/icons/Palette";
// import GroupAddIcon from "@material-ui/icons/GroupAdd";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import PostAddIcon from "@material-ui/icons/PostAdd";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import StarIcon from "@material-ui/icons/Star";
// import ThemesTable from "./ThemesTable";
// import UserProfile from "./UserProfile";
// import firebase from "firebase";
// import "firebase/auth";
// import { db } from "../config/firebase";
// import Button from "@material-ui/core/Button";
// import ImageSearchIcon from "@material-ui/icons/ImageSearch";
// import BookmarksIcon from "@material-ui/icons/Bookmarks";
// import StarsIcon from "@material-ui/icons/Stars";

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//     // backgroundColor: theme.palette.background.paper
//   },
//   toolbar: {
//     paddingRight: 24 // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   menuButton: {
//     marginRight: 36
//   },
//   menuButtonHidden: {
//     display: "none"
//   },
//   title: {
//     flexGrow: 1
//   },
//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },
//   drawerPaperClose: {
//     overflowX: "hidden",
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     width: theme.spacing(7),
//     [theme.breakpoints.up("sm")]: {
//       width: theme.spacing(9)
//     }
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto"
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4)
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//     maxHeight: "80vh"
//   },
//   fixedHeight: {
//     maxHeight: "80vh"
//   },
//   button: {
//     marginRight: "20px",
//     "&:hover": {
//       backgroundColor: "transparent"
//     },
//     fontWeight: 400,
//     textTransform: "none",
//     borderRadius: 5,
//     height: 46,
//     padding: 10
//   }
// }));

// export default function Dashboard({ user }) {
//   console.log("Dashboard -> user", user);
//   const [themes, setThemes] = useState([]);
//   const [starredThemes, setStarredThemes] = useState([]);
//   const [bookmarkedThemes, setBookmarkedThemes] = useState([]);
//   const [foundUser, setFoundUser] = useState("");

//   const arrayOfIdsToObjects = async array => {
//     return;
//     array.map(async themeId => {
//       return await db
//         .collection("CustomizedThemes")
//         .doc(`${themeId}`)
//         .get()
//         .then(doc => {
//           console.log("EACH THEME OBJECT from ARRAY", doc.data());
//         })
//         .catch(err => {
//           console.log("Error getting documents", err);
//         });
//     });
//   };

//   useEffect(() => {
//     const saved = [];
//     const starred = [];
//     const bookmarked = [];
//     const response = async () => {
//       await db
//         .collection("Users")
//         .doc(`${user.uid}`)
//         .get()
//         .then(async doc => {
//           if (!doc.exists) {
//             console.log("No such document!");
//           } else {
//             console.log("FOUND USER", doc.data());
//             // extract this into a function
//             await setFoundUser(doc.data());
//             // setStarredThemes(arrayOfIdsToObjects(doc.data().starred));
//             // setBookmarkedThemes(arrayOfIdsToObjects(doc.data().bookmarked));
//             // setThemes(arrayOfIdsToObjects(doc.data().themes));
//             doc.data().bookmarked.map(async pk => {
//               console.log("response -> pk", pk);
//               await db
//                 .collection("CustomizedThemes")
//                 .doc(`${pk}`)
//                 .get()
//                 .then(doc => {
//                   console.log(
//                     "EACH THEME OBJECT from bookmarked ARRAY",
//                     doc.data()
//                   );
//                   bookmarked.push({ ...doc.data(), themeId: doc.id });
//                   console.log("======>", bookmarked);
//                   setBookmarkedThemes([...bookmarked]);
//                 })
//                 .catch(err => {
//                   console.log("Error getting documents", err);
//                 });
//             });

//             // saved.push({ ...doc.data().themes, themeId: doc.id });
//             // starred.push({ ...doc.data().starred, themeId: doc.id });
//             // bookmarked.push({ ...doc.data().bookmarked, themeId: doc.id });
//             // setThemes([...themes]);
//             // setStarredThemes([...starred]);
//             // setBookmarkedThemes([...bookmarked]);
//           }
//         })
//         .catch(err => {
//           console.log("Error getting document", err);
//         });

//       // await db
//       //   .collection("Users")
//       //   .doc(`${user.uid}`)
//       //   .onSnapshot(async doc => {
//       //     // .get()
//       //     // .then(doc => {
//       //     console.log("FOUND USER", doc.data());

//       //     setFoundUser(doc.data());
//       //     setStarredThemes(await arrayOfIdsToObjects(doc.data().starred));
//       //     setBookmarkedThemes(await arrayOfIdsToObjects(doc.data().bookmarked));
//       //     setThemes(await arrayOfIdsToObjects(doc.data().themes));
//       //   });
//       // // let foundUser = doc.data();
//       // // if (foundUser.themes) {
//       // //     Promise.all(
//       // //       foundUser.themes.map(theme => {
//       // //         db.collection("CustomizedThemes")
//       // //           .doc(`${theme.id}`)
//       // //           // .get()
//       // //           // .then(theme => {
//       // //           .onSnapshot(theme => {
//       // //             // console.log("themes", theme.data());
//       // //             userThemes.push(theme.data());
//       // //             // console.log("response -> userThemes", userThemes);
//       // //             setThemes([...userThemes]);
//       // //           });
//       // //       })
//       // //     );
//       // //   // }
//       // // });
//       // // .catch(err => {
//       // //   console.log("Error getting document", err);
//       // // });
//     };
//     response();
//   }, []);
//   //saved themes

//   // useEffect(() => {
//   //   // const savedThemes = [];
//   //   const unsub = async () => {
//   //     await db
//   //       .collection("Users")
//   //       .doc(`${user.uid}`)
//   //       .get()
//   //       .then(async doc => {
//   //         if (!doc.exists) {
//   //           console.log("No such document!");
//   //         } else {
//   //           console.log("BOOKMARKED ====Document data:", doc.data());
//   //           setStarredThemes(await arrayOfIdsToObjects(doc.data().starred));
//   //           setBookmarkedThemes(
//   //             await arrayOfIdsToObjects(doc.data().bookmarked)
//   //           );
//   //           setThemes(await arrayOfIdsToObjects(doc.data().themes));

//   //           // setStarredThemes(doc.data().starred);
//   //           // setBookmarkedThemes(doc.data().bookmarked);
//   //           // setThemes(doc.data().themes);
//   //           // savedThemes.push({ ...doc.data().themes, themeId: doc.id });
//   //           // setThemes([...savedThemes]);
//   //         }
//   //       })
//   //       .catch(err => {
//   //         console.log("Error getting document", err);
//   //       });

//   //     // console.log("BEFORE USERS SAVED THEMES", themes);
//   //     // console.log("BEFORE STARRED", starredThemes);
//   //     // console.log("BEFORE BOOKMARKED", bookmarkedThemes);
//   //     // await arrayOfIdsToObjects(themes);
//   //     // await arrayOfIdsToObjects(starredThemes);
//   //     // await arrayOfIdsToObjects(bookmarkedThemes);
//   //     // PREVIOUSLY WORKING WITH JUST ONE TABLE!!
//   //     // await db
//   //     //   .collection("CustomizedThemes")
//   //     //   .where("userId", "==", `${user.uid}`)
//   //     //   .get()
//   //     //   .then(snapshot => {
//   //     //     console.log("unsub -> snapshot", snapshot);
//   //     //     if (snapshot.empty) {
//   //     //       console.log("No matching documents.");
//   //     //       return;
//   //     //     }
//   //     //     snapshot.forEach(theme => {
//   //     //       console.log(theme.id, "=>", theme.data());
//   //     //       savedThemes.push({ ...theme.data(), themeId: theme.id });
//   //     //       setThemes([...savedThemes]);
//   //     //     });
//   //     //   })
//   //     //   .catch(err => {
//   //     //     console.log("Error getting documents", err);
//   //     //   });
//   //   };
//   //   unsub();
//   // }, []);

//   //bookmarked themes
//   // const getBookmarkedThemes = () => {

//   // }
//   // const savedThemes = [];
//   // let query = await db
//   //   .collection("BEFORE Users")
//   //   .doc(`${user.uid}`)
//   //   .get()
//   //   .then(doc => {
//   //     if (!doc.exists) {
//   //       console.log("No such document!");
//   //     } else {
//   //       console.log("BOOKMARKED ====Document data:", doc.data());
//   //       setStarredThemes(doc.data().starred);
//   //       setBookmarkedThemes(doc.data().bookmarked);
//   //       savedThemes.push({ ...doc.data().themes, themeId: doc.id });
//   //       setThemes([...savedThemes]);
//   //       // setThemes(doc.data().themes);
//   //     }
//   //   })
//   //   .catch(err => {
//   //     console.log("Error getting document", err);
//   //   });

//   //starred themes

//   console.log(
//     "UsersThemes -> foundUser",
//     foundUser,
//     foundUser.themes,
//     foundUser.starred,
//     foundUser.bookmarked
//   );
//   console.log("USERS SAVED THEMES", themes);
//   console.log("STARRED", starredThemes);
//   console.log("BOOKMARKED", bookmarkedThemes);
//   // const stars = themes.reduce((acc, theme) => theme.starsCount + acc, 0);
//   const stars = 0;
//   const classes = useStyles();

//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [open, setOpen] = useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, open && classes.appBarShift)}
//         style={{ background: "#fff" }}
//       >
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(
//               classes.menuButton,
//               open && classes.menuButtonHidden
//             )}
//             style={{ color: "#000" }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Button
//             component={Link}
//             to="/"
//             disableRipple
//             style={{
//               fontFamily: "Roboto",
//               fontWeight: 200,
//               fontSize: 28,
//               color: "#000"
//             }}
//             className={classes.button}
//           >
//             mymui.
//           </Button>
//           <IconButton syle={{ color: "#000" }}>
//             {/* make star number this dynamic */}
//             <Badge badgeContent={stars} color="secondary">
//               <StarIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <div>
//           <ListItem
//             button
//             selected={selectedIndex === 0}
//             onClick={event => handleListItemClick(event, 0)}
//           >
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" />
//           </ListItem>
//           <ListItem
//             button
//             selected={selectedIndex === 1}
//             onClick={event => handleListItemClick(event, 1)}
//           >
//             <ListItemIcon>
//               <FaceIcon />
//             </ListItemIcon>
//             <ListItemText primary="User Profile" />
//           </ListItem>
//           <Divider variant="inset" />
//           <ListItem
//             button
//             selected={selectedIndex === 2}
//             onClick={event => handleListItemClick(event, 2)}
//           >
//             <ListItemIcon>
//               <PaletteIcon />
//             </ListItemIcon>
//             <ListItemText primary="My Saved Themes" />
//           </ListItem>
//           <ListItem
//             button
//             selected={selectedIndex === 3}
//             onClick={event => handleListItemClick(event, 3)}
//           >
//             <ListItemIcon>
//               <BookmarksIcon />
//             </ListItemIcon>
//             <ListItemText primary="Bookmarked Themes" />
//           </ListItem>
//           <ListItem
//             button
//             selected={selectedIndex === 4}
//             onClick={event => handleListItemClick(event, 4)}
//           >
//             <ListItemIcon>
//               <StarsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Starred Themes" />
//           </ListItem>
//           <Divider variant="inset" />
//           <ListItem button component={Link} to="/explore">
//             <ListItemIcon>
//               <ImageSearchIcon />
//             </ListItemIcon>
//             <ListItemText primary="Explore" />
//           </ListItem>
//           <ListItem button component={Link} to="/design">
//             <ListItemIcon>
//               <PostAddIcon />
//             </ListItemIcon>
//             <ListItemText primary="Add New Project" />
//           </ListItem>
//           <ListItem button component={Link} to="/">
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItem>
//         </div>
//         {/* <Divider />
//         public/private themes */}
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container className={classes.container}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={8} lg={9}>
//               <Paper className={fixedHeightPaper}>
//                 {selectedIndex === 0 && <div>SOME COOL USER DATA COMING</div>}
//                 {selectedIndex === 1 && (
//                   <UserProfile user={foundUser} uid={user.uid} />
//                 )}
//                 {selectedIndex === 2 && (
//                   <ThemesTable
//                     setThemes={setThemes}
//                     themes={themes}
//                     tableTitle={"Saved Themes"}
//                   />
//                 )}
//                 {selectedIndex === 3 && (
//                   <ThemesTable
//                     setThemes={setThemes}
//                     themes={themes}
//                     tableTitle={"Bookmarked Themes"}
//                   />
//                 )}
//                 {selectedIndex === 4 && (
//                   <ThemesTable
//                     setThemes={setThemes}
//                     themes={themes}
//                     tableTitle={"Favorite Themes"}
//                   />
//                 )}
//               </Paper>
//             </Grid>
//             {/* PREVIEW */}
//             {selectedIndex === 2 && (
//               <Grid item xs={12} md={4} lg={3}>
//                 <Paper className={fixedHeightPaper}>
//                   {/* <PreviewComponent theme={theme}????/> */}
//                   PREVIEW PLACEHOLDER (MODAL? GROW, ZOOM, POPOVER transitions??)
//                 </Paper>
//               </Grid>
//             )}
//           </Grid>
//         </Container>
//       </main>
//     </div>
//   );
// }
