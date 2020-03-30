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

export default function ExploreAdd() {
  const [open, setOpen] = React.useState(false);

  const [selectedTheme, setSelectedTheme] = React.useState("");

  const handleChange = event => {
    setSelectedTheme(event.target.value);
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
