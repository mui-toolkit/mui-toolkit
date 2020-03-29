import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FaceIcon from "@material-ui/icons/Face";
import PaletteIcon from "@material-ui/icons/Palette";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PostAddIcon from "@material-ui/icons/PostAdd";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import StarIcon from "@material-ui/icons/Star";
import ThemesTable from "./ThemesTable";
import UserProfile from "./UserProfile";
import firebase from "firebase";
import "firebase/auth";
import { db } from "../config/firebase";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
    // backgroundColor: theme.palette.background.paper
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    maxHeight: "80vh"
  },
  fixedHeight: {
    maxHeight: "80vh"
  },
  button: {
    marginRight: "20px",
    "&:hover": {
      backgroundColor: "transparent"
    },
    fontWeight: 400,
    textTransform: "none",
    borderRadius: 5,
    height: 46,
    padding: 10
  }
}));

export default function WebPreview({ user }) {
  console.log("Dashboard -> user", user);
  const [themes, setThemes] = useState([]);
  const [foundUser, setFoundUser] = useState("");

  useEffect(() => {
    const response = async () => {
      await db
        .collection("Users")
        .doc(`${user.uid}`)
        .onSnapshot(doc => {
          // .get()
          // .then(doc => {
          console.log("FOUND USER", doc.data());

          setFoundUser(doc.data());
        });
      // let foundUser = doc.data();
      // if (foundUser.themes) {
      //     Promise.all(
      //       foundUser.themes.map(theme => {
      //         db.collection("CustomizedThemes")
      //           .doc(`${theme.id}`)
      //           // .get()
      //           // .then(theme => {
      //           .onSnapshot(theme => {
      //             // console.log("themes", theme.data());
      //             userThemes.push(theme.data());
      //             // console.log("response -> userThemes", userThemes);
      //             setThemes([...userThemes]);
      //           });
      //       })
      //     );
      //   // }
      // });
      // .catch(err => {
      //   console.log("Error getting document", err);
      // });
    };
    response();
  }, []);

  useEffect(() => {
    const userThemes = [];
    const unsub = async () => {
      await db
        .collection("CustomizedThemes")
        .where("userId", "==", `${user.uid}`)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No matching documents.");
            return;
          }
          snapshot.forEach(theme => {
            console.log(theme.id, "=>", theme.data());
            userThemes.push({ ...theme.data(), themeId: theme.id });
            setThemes([...userThemes]);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    };
    unsub();
  }, []);

  console.log("UsersThemes -> foundUser", foundUser, foundUser.themes);
  console.log("USERS SAVED THEMES", themes);

  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        style={{ background: "#fff" }}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
            style={{ color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            component={Link}
            to="/"
            disableRipple
            style={{
              fontFamily: "Roboto",
              fontWeight: 200,
              fontSize: 28,
              color: "#000"
            }}
            className={classes.button}
          >
            mymui.
          </Button>
          <IconButton color="black">
            {/* make star number this dynamic */}
            <Badge badgeContent={8} color="secondary">
              <StarIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary="My Saved Themes" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarked Users" />
          </ListItem>
          <ListItem button component={Link} to="/design">
            <ListItemIcon>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add New Project" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </div>
        {/* <Divider />
        public/private themes */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {selectedIndex === 0 && <div>SOME COOL USER DATA COMING</div>}
                {selectedIndex === 1 && (
                  <UserProfile user={foundUser} uid={user.uid} />
                )}
                {selectedIndex === 2 && <ThemesTable setThemes={setThemes} themes={themes} />}
                {selectedIndex === 3 && (
                  <div>ALL YOUR FAVORITE USERS YOU FOLLOW:</div>
                )}
              </Paper>
            </Grid>
            {/* PREVIEW */}
            {selectedIndex === 2 && (
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {/* <PreviewComponent theme={theme}????/> */}
                  PREVIEW PLACEHOLDER (MODAL? GROW, ZOOM, POPOVER transitions??)
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
