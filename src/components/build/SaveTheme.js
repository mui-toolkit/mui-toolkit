import React, { useState } from "react";
import { db } from "../../config/firebase";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core/";

export const SaveTheme = props => {
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
    let newTheme = await db
      .collection("CustomizedThemes")
      .doc(`${themeName}`)
      .set({ downloadTheme, createdAt: new Date() })
      .then(ref => {
        console.log("Added Theme ", `${ref.themeName}`);
      })
      .catch(function(error) {
        console.log("Error creating a new theme: ", error);
      });
    console.log("Test -> newTheme", newTheme);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Save your theme
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
