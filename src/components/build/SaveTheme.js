import React, { useState } from "react";
import { db } from "../../config/firebase";
import { Alert, AlertTitle } from "@material-ui/lab/";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/";
import SaveIcon from "@material-ui/icons/Save";

export const SaveTheme = props => {
console.log("props", props)
  const { downloadTheme } = props;

  const [open, setOpen] = useState(false);
  const [themeName, setThemeName] = useState("untitled");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = e => {
    setOpen(false);
  };
  const handleSave = e => {
    setOpen(false);
    sendPalette(themeName);
    alert("New Customized Theme Saved");
  };

  const sendPalette = async themeName => {
    console.log(downloadTheme);
    downloadTheme.createdAt = new Date();
    downloadTheme.themeName = themeName;
    let newTheme = await db
      .collection("CustomizedThemes")
      .doc(`${themeName}`)
      .set({ ...downloadTheme })
      .then(ref => {
        console.log("Added Theme ", `${ref.id}`);
      })
      .catch(function(error) {
        console.log("Error creating a new theme: ", error);
      });
    console.log("Test -> newTheme", newTheme);
    // await db
    //   .collection("Users")
    //   .doc(`${user.uid}`)
    //   .update({ themes: [...themes, downloadTheme] })
    //   .then(() => {
    //     console.log("updated user with reference to theme");
    //   });
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
      >
        Save <SaveIcon style={{ marginLeft: "5px" }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">YOUR THEME</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name your saved theme something quirky
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="themeName"
            label="themeName"
            type="text"
            value={themeName}
            onChange={e => setThemeName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
