import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import VisibilityIcon from "@material-ui/icons/Visibility";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import firebase from "firebase";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

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

function ExploreTable({
  themesToMap,
  setStarClicked,
  setBookmarkClicked,
  starClicked,
  bookmarkClicked
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleStar = () => {
  //   setStarClicked(!starClicked);
  //   //// star boolean = starClicked

  //   // pass clicked to update button
  //   // add star to starsCount of theme

  //   // add theme to user favoriteTheme array
  // };
  // const handleBookmark = () => {
  //   setBookmarkClicked(!bookmarkClicked);
  //   ///// do some stuff here
  // };

  const handleFav = (identifier, userId, exploreId) => {
    if (identifier === "starred") {
      setStarClicked(!starClicked);
    } else if (identifier === "bookmarked") {
      setBookmarkClicked(!bookmarkClicked);
    }
    // where(`${identifer}`,'==', boolean)
    // const exists = checkPreviousFavStatus();
    // if (exists) {
    // } else {
    // }
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {themesToMap.map(theme => (
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
                <IconButton
                  aria-label="star"
                  onClick={() =>
                    handleFav("starred", theme.userId, theme.exploreId)
                  }
                >
                  <Badge badgeContent={theme.starsCount} color="secondary">
                    {starClicked ? <StarIcon /> : <StarBorderIcon />}
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
              <Tooltip title="Bookmark this theme">
                <IconButton
                  aria-label="bookmark"
                  onClick={() =>
                    handleFav("bookmarked", theme.userId, theme.exploreId)
                  }
                >
                  {bookmarkClicked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
              </Tooltip>
            </Paper>
          </Popover>
        </Grid>
      ))}
    </Grid>
  );
}

export default ExploreTable;
