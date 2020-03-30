import React from "react";
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

export default function ExploreAdd({ savedThemes }) {
  console.log("ExploreAdd -> savedThemes", savedThemes);
  const [open, setOpen] = React.useState(false);

  const [selectedTheme, setSelectedTheme] = React.useState("");

  const updateExplore = async themeObject => {
    await db
      .collection("CustomizedThemes")
      .doc(`${themeObject.themeId}`)
      .update({ explore: true })
      .then(() => {
        console.log("updated explore status");
      });
  };
  const handleChange = event => {
    setSelectedTheme(event.target.value);
    const [exploreTheme] = savedThemes.filter(
      themeObject => themeObject.themeId === event.target.value
    );
    updateExplore(exploreTheme);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
