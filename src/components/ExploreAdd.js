import React, { useState } from "react";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import M from "minimatch";
import { updateExpression } from "@babel/types";
import { db } from "../config/firebase";

export default function ExploreAdd({
  savedThemes,
  setExploreThemes,
  setStarClicked,
  setBookmarkClicked
}) {
  console.log("ExploreAdd -> savedThemes", savedThemes);
  const [open, setOpen] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState("");
  const [favorites, setFavorites] = useState([]);

  // const countStarsAndBookmarks = async themeObject => {
  //   const faves = [];
  //   await db
  //     .collection("FavoritedThemes")
  //     .where("themeId", "==", `${themeObject.themeId}`)
  //     .get()
  //     .then(snapshot => {
  //       if (snapshot.empty) {
  //         console.log("Nothing favorited yet");
  //         return;
  //       }
  //       snapshot.forEach(doc => {
  //         console.log(doc.id, "favorited=>", doc.data());
  //         faves.push(doc.data());
  //         // setFavorites([...faves]);
  //       });
  //     })
  //     .catch(err => {
  //       console.log("Error getting favorite themes", err);
  //     });

  //   const bookmarked = faves.filter(themeObj => themeObj.bookmarked === true)
  //     .length;
  //   const starred = faves.filter(themeObj => themeObj.starred === true).length;
  //   // themeObject.bookmarksCount = bookmarked;
  //   // themeObject.starsCount = starred;
  //   console.log(
  //     "TESTING BOOKMARKS AND STARS COUNTS=====",

  //     bookmarked,
  //     starred
  //   );
  //   // set signedInUserId's fav preferences on each explore theme
  //   // await setFavStatus() ??
  //   return [bookmarked, starred];
  // };

  const updateExplore = async themeObject => {
    // need to update bookmarksCount and starsCount in exploreTheme before updating
    await db
      .collection("CustomizedThemes")
      .doc(`${themeObject.themeId}`)
      .update({
        explore: true
      })
      .then(() => {
        console.log("updated explore status");
      })
      .then(response => {
        setExploreThemes(prevThemes => [...prevThemes, themeObject]);
      });
  };
  const handleChange = event => {
    setSelectedTheme(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = async () => {
    const [exploreTheme] = savedThemes.filter(
      themeObject => themeObject.themeId === selectedTheme
    );
    console.log("handleAdd -> exploreTheme", exploreTheme);
    // const [bookmarksCount, starsCount] = await countStarsAndBookmarks(
    //   exploreTheme
    // );
    // await updateExplore(exploreTheme, bookmarksCount, starsCount);
    await updateExplore(exploreTheme);
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Grid item>
        <IconButton onClick={handleClickOpen}>
          <Icon fontSize="large">add_circle</Icon>
        </IconButton>
      </Grid>
      <Grid item>
        <Typography>Add a Theme</Typography>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Share a Theme</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: "1em" }}>
            Add you're own theme to the explore page so others can see your
            work!
          </DialogContentText>
          <InputLabel id="demo-simple-select-label">Select a Theme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedTheme}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {savedThemes.map(theme => (
              <MenuItem value={theme.themeId}>{theme.themeName}</MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
