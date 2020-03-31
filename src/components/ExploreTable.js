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

function ExploreTable({
  themesToMap,
  setStarClicked,
  setBookmarkClicked,
  starClicked,
  bookmarkClicked
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [favoriteTheme, setFavoriteTheme] = useState({});
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateFavoriteTheme = async (identifier, favoriteTheme) => {
    console.log("updateFavoriteTheme -> favoriteTheme", favoriteTheme);
    if (identifier === "bookmarked") {
      await db
        .collection("FavoritedThemes")
        .doc(`${favoriteTheme.thisThemeId}`)
        .update({ bookmarked: bookmarkClicked })
        .then(() => {
          console.log("updated explore bookmarked status");
        })
        .catch(err => {
          console.log("Error getting favorite themes", err);
        });
    } else if (identifier === "starred") {
      await db
        .collection("FavoritedThemes")
        .doc(`${favoriteTheme.thisThemeId}`)
        .update({ starred: starClicked })
        .then(() => {
          console.log("updated explore starred status");
        })
        .catch(err => {
          console.log("Error getting favorite themes", err);
        });
    }
  };
  const getFavoriteTheme = async (identifier, userId, themeId) => {
    console.log("getFavoriteTheme -> themeId", themeId);
    console.log("getFavoriteTheme -> userId", userId);
    var updateFav = {};
    await db
      .collection("FavoritedThemes")
      .where("signedInUserId", "==", `${userId}`)
      .where("themeId", "==", `${themeId}`)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach(theme => {
          console.log(theme.id, "=>", theme.data());
          if (identifier === "bookmarked") {
            updateFav = {
              ...theme.data(),
              bookmarked: bookmarkClicked,
              thisThemeId: theme.id
            };
          } else if (identifier === "starred") {
            updateFav = { ...theme.data(), starred: starClicked };
          }
          setFavoriteTheme(updateFav);
        });
      })
      .catch(err => {
        console.log("Error getting favorite theme", err);
      });
  };

  const handleFav = async (identifier, userId, themeId) => {
    console.log("handleFav -> userId", userId);
    console.log("handleFav -> themeId", themeId);

    if (identifier === "starred") {
      setStarClicked(!starClicked);
    } else if (identifier === "bookmarked") {
      setBookmarkClicked(!bookmarkClicked);
    }
    console.log("handleFav -> starClicked", starClicked);
    console.log("handleFav -> bookmarkClicked", bookmarkClicked);

    await getFavoriteTheme(identifier, userId, themeId);
    await updateFavoriteTheme(identifier, favoriteTheme);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  console.log(
    "BUTTON",
    themesToMap,
    starClicked,
    bookmarkClicked,
    favoriteTheme.id
  );
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {themesToMap.map(theme => (
        <Grid item key={theme.themeId} style={{ padding: "1em" }}>
          <GridListTile style={{ color: "white" }}>
            <img src={theme.img} width="300px" />
            <GridListTileBar
              title={theme.themeName}
              subtitle={<span>by: {theme.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${theme.themeId}`}
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
                    handleFav("starred", theme.userId, theme.themeId)
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
                    handleFav("bookmarked", theme.userId, theme.themeId)
                  }
                >
                  <Badge badgeContent={theme.bookmarksCount} color="secondary">
                    {bookmarkClicked ? (
                      <BookmarkIcon />
                    ) : (
                      <BookmarkBorderIcon />
                    )}
                  </Badge>
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
