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
  signedInUserId,
  themesToMap,
  setStarClicked,
  setBookmarkClicked,
  starClicked,
  bookmarkClicked,
  bookmarkedIds
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [favoriteTheme, setFavoriteTheme] = useState({});
  const [selected, setSelected] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const temp = [];
    const unsubscribe = async () => {
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .get()
        .then(async doc => {
          setBookmarks(doc.data().bookmarked);
        })
        .catch(err => {
          console.error(err);
        });
    };
    unsubscribe();
  }, []);

  const handleClick = (event, theme) => {
    setAnchorEl(event.currentTarget);
    setSelected(theme);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFav = async exploreId => {
    ///******* post into users bookmarked/starred array */

    // if (identifier === "starred") {
    //   setStarClicked(!starClicked);
    // } else if (identifier === "bookmarked") {
    // setBookmarkClicked(!bookmarkClicked);
    // }

    if (bookmarks.includes(exploreId)) {
      // remove from users bookmark array, decrement count
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          bookmarked: firebase.firestore.FieldValue.arrayRemove(`${exploreId}`)
        })
        .then(() => {
          console.log(`removed ${exploreId} from users bookmarked array`);
          setBookmarks(bookmarks.filter(id => id !== exploreId));
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${exploreId}`)
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
          bookmarked: firebase.firestore.FieldValue.arrayUnion(`${exploreId}`)
        })
        .then(() => {
          console.log(`added ${exploreId} to users bookmarked array`);
          setBookmarks(prevBookmarks => [...prevBookmarks, exploreId]);
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${exploreId}`)
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
        <Grid item key={theme.exploreId} style={{ padding: "1em" }}>
          <GridListTile style={{ color: "white" }}>
            <img
              onClick={e => handleFav(e, theme.exploreId)}
              src={theme.img}
              width="300px"
            />

            <GridListTileBar
              // title={theme.themeName}
              title={theme.exploreId}
              subtitle={<span>by: {theme.themeName}</span>}
              actionIcon={
                <IconButton
                  // aria-label={`info about ${theme.exploreId}`}
                  className={classes.icon}
                  onClick={e => handleClick(e, theme)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <Popover
            // id={id}
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
              <Tooltip title="Star">
                <IconButton
                  aria-label="star"
                  onClick={() =>
                    handleFav(
                      "starred",
                      theme.userId,
                      theme.exploreId,
                      theme.signedInUserId
                    )
                  }
                >
                  <Badge color="secondary">
                    {starClicked ? <StarIcon /> : <StarBorderIcon />}
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Preview Theme">
                <IconButton
                  component={Link}
                  to={`/webpreview/${selected.exploreId}`}
                  target="_blank"
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Bookmark this theme">
                <IconButton
                  aria-label="bookmark"
                  onClick={() => handleFav(selected.exploreId)}
                >
                  <Badge color="secondary">
                    {bookmarks.includes(selected.exploreId) ? (
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
