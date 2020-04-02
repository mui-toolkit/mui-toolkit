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
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { sign } from "crypto";

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

export const SaveTheme = ({ downloadTheme, user, themeId, signedInUserId }) => {
  console.log("SaveTheme -> themeId", themeId);
  console.log("SaveTheme -> downloadTheme", downloadTheme);
  console.log("SaveTheme -> user", user);
  console.log("SaveTheme -> signedInUserId", signedInUserId);
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [themeName, setSaveThemeName] = useState(downloadTheme.themeName);
  const [message, setMessage] = useState("");
  let history = useHistory();

  const handleClickOpen = () => {
    // if (
    //   downloadTheme.userId !== signedInUserId ||
    //   downloadTheme.userId !== "guest"
    // ) {
    //   console.log("someone elses theme");
    //   setOpen(true);
    // }
    // need to test if coming from themes table
    if (!user) {
      setOpen(false);
      setMessage("Theme Edited and Saved");
      setSnackOpen(true);
      setSaveThemeName(downloadTheme.themeName);
      editAndSavePalette(themeName);
    }
    // not loggedin should send user to signup
    else if (!user.loggedIn) {
      setMessage(
        "You need to signup for an account in order to save. It's free!"
      );
      setSnackOpen(true);
      setTimeout(function() {
        history.push("/signup");
      }, 4000);
    } else {
      setOpen(true);
    }
  };

  const handleCancel = e => {
    setOpen(false);
    setSnackOpen(false);
  };
  const handleSnackCancel = e => {
    setSnackOpen(false);
  };

  const duplicateNameChecker = async themeName => {
    const checkDuplicate = await db
      .collection("Users")
      .where("themes", "array-contains", `${themeName}`)
      .get()
      .then(querySnapshot => {
        console.log("SaveTheme -> querySnapshot", querySnapshot.empty);
        return !querySnapshot.empty;
      });
    console.log("SaveTheme -> checkDuplicate", checkDuplicate);
    return checkDuplicate;
  };

  const handleSave = async e => {
    setOpen(false);

    //test for duplicate names
    const duplicateTest = await duplicateNameChecker(themeName);
    if (duplicateTest) {
      setMessage("That name is a popular name. Please choose another name!");
      setOpen(true);
      setSnackOpen(true);
    } else {
      saveNewPalette(themeName);
      setMessage("New Customized Theme Saved");
      setSnackOpen(true);
    }
  };

  const saveNewTheme = async themeName => {
    // if (!signedInUserId) {
    downloadTheme.userId = user.uid;
    downloadTheme.themeName = themeName;
    downloadTheme.createdBy = user.email;
    // } else {
    //   downloadTheme.userId = signedInUserId;
    //   downloadTheme.themeName = themeName;
    // }
    // new customized theme
    await db
      .collection("CustomizedThemes")
      .add({ ...downloadTheme })
      .then(function(docRef) {
        console.log(`Added Theme ${themeName} to collection`, docRef.id);
        downloadTheme.themeId = docRef.id;
      })
      .catch(function(error) {
        console.log("Error creating a new theme: ", error);
      });
  };
  const addThemeToUser = async (themeName, userId) => {
    await db
      .collection("Users")
      .doc(`${userId}`)
      .update({
        themes: firebase.firestore.FieldValue.arrayUnion(`${themeName}`)
      })
      .then(() => {
        console.log("updated user with reference to theme");
      });
  };

  // const saveNewPalette = async themeName => {
  //   await saveNewTheme(themeName);
  //   if (signedInUserId) {
  //     await addThemeToUser(themeName, signedInUserId);
  //   } else await addThemeToUser(themeName, user.uid);
  // };
  const saveNewPalette = async themeName => {
    await saveNewTheme(themeName);
    await addThemeToUser(themeName, user.uid);
    // setNewFavoriteTheme(downloadTheme);
  };
  const updateTheme = async oldThemeName => {
    downloadTheme.lastEditAt = new Date();
    await db
      .collection("CustomizedThemes")
      .doc(`${themeId}`)
      .set({ ...downloadTheme })
      .then(function() {
        console.log(`Update ${oldThemeName} to collection`);
      })
      .catch(function(error) {
        console.log("Error updating a previously svaed theme: ", error);
      });
  };

  const updateUsersTheme = async (oldThemeName, userId) => {
    //delete from users array
    await db
      .collection("Users")
      .doc(`${userId}`)
      .update({
        themes: firebase.firestore.FieldValue.arrayRemove(`${oldThemeName}`)
      })
      .then(() => {
        console.log("deleted reference to this theme");
      });
    // add updated to users array
    await db
      .collection("Users")
      .doc(`${userId}`)
      .update({
        themes: firebase.firestore.FieldValue.arrayUnion(`${themeName}`)
      })
      .then(() => {
        console.log("updated user with reference to theme");
      });
  };

  const editAndSavePalette = async => {
    updateTheme(downloadTheme.themeName);
    updateUsersTheme(downloadTheme.themeName, downloadTheme.userId);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        style={{
          fontFamily: "Roboto",
          fontSize: 14,
          marginBottom: "2em",
          color: "#f50057"
        }}
        className={classes.button}
      >
        {!user ? "Update and Save" : "Save"}{" "}
        <SaveIcon style={{ marginLeft: "5px" }} />
      </Button>
      <Snackbar
        autoHideDuration={4000}
        open={snackOpen}
        onClose={handleSnackCancel}
        message={message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <Paper style={{ backgroundColor: "#fff" }}>
          <Typography
            id="form-dialog-title"
            align="center"
            style={{
              color: "#000",
              fontSize: 18,
              fontFamily: "Roboto",
              lineHeight: 3
            }}
          >
            YOUR THEME
          </Typography>
          <DialogContent>
            <DialogContentText
              style={{
                color: "#000",
                fontSize: 16,
                fontFamily: "Roboto",
                lineHeight: 3
              }}
            >
              Name your saved theme something quirky
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="themeName"
              type="text"
              value={themeName}
              onChange={e => setSaveThemeName(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCancel}
              style={{
                fontFamily: "Roboto",
                fontSize: 14,
                marginBottom: "2em",
                color: "#f50057"
              }}
              className={classes.button}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              style={{
                fontFamily: "Roboto",
                fontSize: 14,
                marginBottom: "2em",
                color: "#3F51B5"
              }}
              className={classes.button}
            >
              Save
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
};
