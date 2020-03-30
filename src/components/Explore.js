import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Typography,
  Paper,
  Button,
  GridListTileBar,
  GridListTile,
  Popover,
  Tooltip,
  IconButton,
  Badge
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExploreAdd from "./ExploreAdd";
import { db } from "../config/firebase";

const useStyles = makeStyles({
  title: {
    padding: "1em"
  },
  container: {
    padding: "5em 2em 5em 2em"
  },
  tab: {
    textIndent: "30px"
  },
  filterButton: {
    margin: "10px"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export default function Explore() {
  const classes = useStyles();
  let location = useLocation();
  let savedThemes = location.state.themes.slice();

  const [anchorEl, setAnchorEl] = useState(null);
  const [exploreThemes, setExploreThemes] = useState([]);

  useEffect(() => {
    const explore = [];
    const response = async () => {
      // get favorite theme to pass
      await db
        .collection("CustomizedThemes")
        .where("explore", "==", true)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No publicly displayed themes yet");
            return;
          }
          snapshot.forEach(doc => {
            console.log(doc.id, "explored=>", doc.data());
            explore.push({ ...doc.data(), exploreId: doc.id });
            setExploreThemes([...explore]);
          });
        })
        .catch(err => {
          console.log("Error getting explored themes", err);
        });
    };
    response();
  }, []);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // get from database
  //url to the preview (web)
  //img
  //user ==> username
  // name: name of theme
  // theme id dynamic // only if user adds to explore page

  // *************
  savedThemes.map(themeObj => {
    themeObj.img = `https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
    themeObj.user = themeObj.createdBy;
    themeObj.url = `https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
  });
  // console.log("Explore -> savedThemes", savedThemes);
  // *************

  // console.log("Explore -> exploreThemes", exploreThemes);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        <Paper style={{ padding: "1em" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginBottom: "2em" }}
          >
            <Grid item style={{ marginRight: "2em" }}>
              <Button variant="outlined" className={classes.filterButton}>
                Trending
              </Button>
              <Button variant="outlined" className={classes.filterButton}>
                Popular
              </Button>
              <Button variant="outlined" className={classes.filterButton}>
                Recently Added
              </Button>
              <Button variant="outlined" className={classes.filterButton}>
                Most Stars
              </Button>
            </Grid>

            <ExploreAdd savedThemes={savedThemes} />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            {exploreThemes.map(theme => (
              <Grid item key={theme.themeName} style={{ padding: "1em" }}>
                <GridListTile style={{ color: "white" }}>
                  <img src={theme.img} width="300px" />
                  <GridListTileBar
                    title={theme.themeName}
                    subtitle={<span>by: {theme.user}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${theme.themeName}`}
                        className={classes.icon}
                        onClick={handleClick}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  // elevation={1}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                >
                  <Paper style={{ padding: "1em" }}>
                    <Tooltip title="Star">
                      <IconButton>
                        <Badge badgeContent={8} color="secondary">
                          <StarBorderIcon />
                        </Badge>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Preview Theme">
                      <IconButton
                        component={Link}
                        to={`/webpreview/${theme.url}`}
                        target="_blank"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Bookmark">
                      <IconButton>
                        <BookmarkIcon />
                      </IconButton>
                    </Tooltip>
                  </Paper>
                </Popover>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
