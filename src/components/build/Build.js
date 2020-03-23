import React, { useState } from "react";
import PreviewAppBar from "../preview/PreviewAppBar";
import Palette from "./Palette";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import saveAs from "file-saver";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Download from "../Download";
import { firebase, db } from "../../config/firebase";
import Button from "@material-ui/core/Button";
import PreviewButton from "../preview/PreviewButton";
import PrevTypography from "../preview/PrevTypography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flex: 3,
    // flexDirection: 'column',
  },
  // buttonRoot: {
  //   padding: theme.spacing.unit,
  // },
  // selector: {
  //   // alignSelf: 'center',
  //   // margin: theme.spacing.unit,
  // },
  container: {
    // align: 'center',
    flex: 1,
    overflow: "auto",
    width: "50%"
    // background: '#000',
  },
  builderPaper: {
    padding: "1em",
    marginTop: "5em",
    textAlign: "center",
    background: "#fff"
    // color: theme.palette.text.secondary,
  },
  previewPaper: {
    padding: "5em",
    marginTop: "2em",
    textAlign: "center",
    background: "#fff"

    // color: theme.palette.text.secondary,
    // height: '100vh',
    // background: '#000',
  }
}));

export const Build = () => {
  const [color, setColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [defaultColor, setDefaultColor] = useState("");
  const [paperColor, setPaperColor] = useState("");
  const classes = useStyles();

  const changeColor = color => {
    setColor(color.hex);
  };

  const changeSecondaryColor = secondaryColor => {
    setSecondaryColor(secondaryColor.hex);
  };

  const changeDefaultColor = defaultColor => {
    setDefaultColor(defaultColor.hex);
  };
  const changePaperColor = paperColor => {
    setPaperColor(paperColor.hex);
  };

  let downloadTheme = {
    palette: {
      primary: { main: `${color}` ? `${color}` : "#3f51b5" },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : "#f50057"
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`
      }
    }
  };

  const customTheme = createMuiTheme({
    palette: {
      primary: { main: `${color}` ? `${color}` : "#3f51b5" },
      secondary: {
        main: `${secondaryColor}` ? `${secondaryColor}` : "#f50057"
      },
      background: {
        paper: `${paperColor}`,
        default: `${defaultColor}`
      }
    }
  });

  // needs a themeName pop up so user can name their theme and it will be referenced in the table of Saved Themes.  .collection('CT').doc(`${themeName}`.set({})) should create a new collection in CustomizedThemes with doc name themeName and allow the collection to contain any/all fields

  const [open, setOpen] = useState(false);
  const [themeName, setThemeName] = useState("untitled");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = e => {
    setOpen(false);

    sendPalette(themeName);
  };

  const sendPalette = async themeName => {
    console.log(downloadTheme);
    alert("New Customized Theme Saved");
    let newTheme = await db
      .collection("CustomizedThemes")
      .doc(`${themeName}`)
      .set(downloadTheme)
      // .update({ timestamp: firebase.firestore.FieldValue.serverTimestamp() })
      .then(ref => {
        console.log("Added Theme ", ref.id);
      })
      .catch(function(error) {
        console.log("Error creating a new theme: ", error);
      });
    console.log("Test -> newTheme", newTheme);
  };

  return (
    <section className={classes.root}>
      <Grid container>
        <Grid item className={classes.selector}>
          <Paper className={classes.builderPaper}>
            <Palette
              color={color}
              secondaryColor={secondaryColor}
              defaultColor={defaultColor}
              paperColor={paperColor}
              changeColor={changeColor}
              changeSecondaryColor={changeSecondaryColor}
              changeDefaultColor={changeDefaultColor}
              changePaperColor={changePaperColor}
            />
            {/* Theme Builder End */}
          </Paper>
        </Grid>
        <Grid item className={classes.container}>
          <ThemeProvider theme={customTheme}>
            <Paper
              className={classes.previewPaper}
              style={{ background: `${defaultColor}` }}
            >
              {/* Preview Start */}

              <Grid item>
                <PreviewAppBar
                  secondaryColor={secondaryColor}
                  color={color}
                  className={classes.container}
                />
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <PreviewButton />
                  </Grid>
                  <Grid item xs={12}>
                    <PrevTypography />
                  </Grid>
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Save your theme
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
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
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Dialog>

              <Download customTheme={downloadTheme} />
              {/* Preview End */}
            </Paper>
          </ThemeProvider>
        </Grid>
      </Grid>
    </section>
  );
};

export default Build;
