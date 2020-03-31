import React, { useState } from "react";
import { db } from "../../config/firebase";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
  Fade,
  Grow,
  Snackbar
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Grid } from "@material-ui/core/";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";

const useStyles = makeStyles(theme => ({
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

export const FavoriteTheme = ({
  downloadTheme,
  user,
  themeId,
  signedInUserId,
  favorite
}) => {
  const classes = useStyles();
  const [starClicked, setStarClicked] = useState(favorite.starred);
  const [bookmarkClicked, setBookmarkClicked] = useState(favorite.bookmarked);

  const handleStar = () => {
    setStarClicked(!starClicked);
    //// star boolean = starClicked

    // pass clicked to update button
    // add star to starCount of theme

    // add theme to user favoriteTheme array
  };
  const handleBookmark = () => {
    setBookmarkClicked(!bookmarkClicked);
  };
  // const duplicateFavoriteChecker = async themeName => {
  //   const checkDuplicateFav = await db
  //     .collection("FavoritedThemes")
  //     .where("signedInUserId", "==", `${signedInUserId}`)
  //     .where("themeId", "==", `${themeId}`)
  //     .get()
  //     .then(querySnapshot => {
  //       console.log("SaveTheme -> querySnapshot", querySnapshot.empty);
  //       return !querySnapshot.empty;
  //     });
  //   console.log("SaveTheme -> checkDuplicateFav", checkDuplicateFav);
  //   return checkDuplicateFav;
  // };
  const updateFavoriteThemes = async () => {
    const favPalette = {
      primary: { main: downloadTheme.palette.primary.main },
      secondary: { main: downloadTheme.palette.secondary.main }
    };
    const favTypography = {
      fontFamily: downloadTheme.typography.fontFamily
    };
    // const favoriteTheme = {
    //   downloadTheme,
    //   themeId,
    //   bookmarked: !!bookmarkClicked,
    //   starred: !!starClicked,
    //   signedInUserId,
    //   themeName: downloadTheme.themeName,
    //   lastEditAt: downloadTheme.lastEditAt,
    //   palette: favPalette,
    //   typography: favTypography,
    // };
    const favoriteTheme = {
      ...favorite
    };
    favoriteTheme.bookmarked = !!bookmarkClicked;
    favoriteTheme.starred = !!starClicked;

    // await db
    //   .collection("FavoritedThemes")
    //   .where("signedInUserId", "==", `${signedInUserId}`)
    //   .where("themeId", "==", `${themeId}`)
    //   .get(querySnapshot => {
    //     querySnapshot
    //       .forEach(document => {
    //         document.ref.update(favoriteTheme);
    //         console.log(`Added bookmark to ${downloadTheme.themeName} `);
    //       })
    //       .catch(error => {
    //         console.log("Error bookmarking theme: ", error);
    //       });
    //   });
    await db
      .collection("FavoritedThemes")
      .doc(`${favoriteTheme.favId}`)
      .set({ favoriteTheme })
      .then(function() {
        console.log(`Added bookmark to ${favoriteTheme.themeName} `);
      })
      .catch(function(error) {
        console.log("Error bookmarking theme: ", error);
      });

    // await db
    //   .collection("FavoritedThemes")
    //   .doc(`${favoriteTheme.favId}`)
    //   .update({ ...favoriteTheme })
    //   .then(function() {
    //     console.log(`Added bookmark to ${favoriteTheme.themeName} `);
    //   })
    //   .catch(function(error) {
    //     console.log("Error bookmarking theme: ", error);
    //   });
  };

  console.log(
    "FAVORITETHEME.JS============>>>>>>",
    starClicked,
    bookmarkClicked,
    user,
    themeId,
    downloadTheme,
    favorite.bookmarked,
    favorite.starred
  );
  return (
    <div>
      <Grid>
        {themeId && (
          <Tooltip title="Star this theme">
            <IconButton aria-label="star" onClick={handleStar}>
              {starClicked ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </Tooltip>
        )}
        {themeId && (
          <Tooltip title="Bookmark this theme">
            <IconButton aria-label="bookmark" onClick={handleBookmark}>
              {bookmarkClicked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          </Tooltip>
        )}
        {themeId && (
          <Tooltip title="Update favorites">
            <IconButton aria-label="update" onClick={updateFavoriteThemes}>
              <ThumbsUpDownIcon />
            </IconButton>
          </Tooltip>
        )}
      </Grid>

      {/* <Snackbar
        autoHideDuration={4000}
        open={snackOpen}
        onClose={handleSnackCancel}
        message={message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      /> */}
    </div>
  );
};
