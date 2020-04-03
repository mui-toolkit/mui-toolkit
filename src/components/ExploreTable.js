import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Paper,
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
import StarIcon from "@material-ui/icons/Star";
import firebase from "firebase";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import HomeIcon from "@material-ui/icons/Home";
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

function ExploreTable({ signedInUserId, themesToMap }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (signedInUserId !== "guest") {
      const unsubscribe = async () => {
        await db
          .collection("Users")
          .doc(`${signedInUserId}`)
          .get()
          .then(async doc => {
            if (doc.data().bookmarked) {
              setBookmarks(doc.data().bookmarked);
            } else {
              setBookmarks([]);
            }
          })
          .catch(err => {
            console.error(err);
          });

        await db
          .collection("Users")
          .doc(`${signedInUserId}`)
          .get()
          .then(async doc => {
            if (doc.data().starred) {
              setStars(doc.data().starred);
            } else {
              setStars([]);
            }
          })
          .catch(err => {
            console.error(err);
          });
      };
      unsubscribe();
    }
  }, []);

  const handleClick = (event, theme) => {
    setAnchorEl(event.currentTarget);
    setSelected(theme);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFavStar = async themeId => {
    if (stars.includes(themeId)) {
      // remove from users star array, decrement count
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          starred: firebase.firestore.FieldValue.arrayRemove(`${themeId}`)
        })
        .then(() => {
          console.log(`removed ${themeId} from users starred array`);
          setStars(stars.filter(id => id !== themeId));
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .update({
          starsCount: firebase.firestore.FieldValue.increment(-1)
        })
        .then(() => {
          console.log("decrement starsCount");
        });
    } else {
      // add to users star array, increment count
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          starred: firebase.firestore.FieldValue.arrayUnion(`${themeId}`)
        })
        .then(() => {
          console.log(`added ${themeId} to users starred array`);
          setStars(prevStars => [...prevStars, themeId]);
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .update({
          starsCount: firebase.firestore.FieldValue.increment(1)
        })
        .then(() => {
          console.log("incremented starsCount");
        });
    }
  };
  const handleFavBookmark = async themeId => {
    if (bookmarks.includes(themeId)) {
      // remove from users bookmark array, decrement count
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          bookmarked: firebase.firestore.FieldValue.arrayRemove(`${themeId}`)
        })
        .then(() => {
          console.log(`removed ${themeId} from users bookmarked array`);
          setBookmarks(bookmarks.filter(id => id !== themeId));
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .update({
          bookmarksCount: firebase.firestore.FieldValue.increment(-1)
        })
        .then(() => {
          console.log("decrement bookmarkscount");
        });
    } else {
      // add to users bookmark array, increment count
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          bookmarked: firebase.firestore.FieldValue.arrayUnion(`${themeId}`)
        })
        .then(() => {
          console.log(`added ${themeId} to users bookmarked array`);
          setBookmarks(prevBookmarks => [...prevBookmarks, themeId]);
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .update({
          bookmarksCount: firebase.firestore.FieldValue.increment(1)
        })
        .then(() => {
          console.log("incremented bookmarkscount");
        });
    }
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {themesToMap.map(theme => (
        <Grid item key={theme.themeId} style={{ padding: "1em" }}>
          <GridListTile style={{ color: "white" }}>
            <img src={theme.img} width="300px" />

            <GridListTileBar
              title={theme.themeName}
              subtitle={<span>by: {theme.userName}</span>}
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={e => handleClick(e, theme)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
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
              {signedInUserId !== "guest" ? (
                <Grid>
                  <Tooltip title="Star">
                    <IconButton
                      aria-label="star"
                      onClick={() => handleFavStar(selected.themeId)}
                    >
                      <Badge color="secondary">
                        {stars.includes(selected.themeId) ||
                        stars.length === 0 ? (
                          <StarIcon />
                        ) : (
                          <StarBorderIcon />
                        )}
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Preview Theme">
                    <IconButton
                      component={Link}
                      to={`/webpreview/${selected.themeId}`}
                      target="_blank"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton
                      aria-label="bookmark"
                      onClick={() => handleFavBookmark(selected.themeId)}
                    >
                      <Badge color="secondary">
                        {bookmarks.includes(selected.themeId) ||
                        bookmarks.length === 0 ? (
                          <BookmarkIcon />
                        ) : (
                          <BookmarkBorderIcon />
                        )}
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Grid>
              ) : (
                <Tooltip title="Access to extra features requires login">
                  <IconButton component={Link} to={`/signup`}>
                    <HomeIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Paper>
          </Popover>
        </Grid>
      ))}
    </Grid>
  );
}

export default ExploreTable;
