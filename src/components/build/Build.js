import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Palette, SaveTheme, BuildNav } from "../build";
import { PreviewButton, PreviewTypography, PreviewAppBar } from "../preview";
import Download from "../Download";

import { Grid, Paper, Typography, Avatar } from "@material-ui/core/";
import { makeStyles, withStyles } from "@material-ui/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { db } from "../../config/firebase";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  preview: {
    padding: "2em",
    textAlign: "center"
  },
  previewPaper: {
    marginTop: "5em",
    textAlign: "center",
    background: "#fff",
    height: "100%"
  },
  builderPaper: {
    marginTop: "5em",
    textAlign: "center",
    background: "#fff"
  }
}));

export const Build = props => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const { retrievedTheme } = {};

  const { savedTheme } = useParams();
  console.log("savedTheme Name: ", savedTheme);

  const {
    color,
    secondaryColor,
    defaultColor,
    paperColor,
    changeColor,
    changeSecondaryColor,
    changePaperColor,
    changeDefaultColor,
    downloadTheme
  } = props;

  // useState will re set state to a saved theme only IF coming from userDashboard
  const [renderedColor, setColor] = useState(color.hex);
  const [renderedSecondaryColor, setSecondaryColor] = useState(
    secondaryColor.hex
  );
  const [renderedDefaultColor, setDefaultColor] = useState(defaultColor.hex);
  const [renderedPaperColor, setPaperColor] = useState(paperColor.hex);
  const [renderedTheme, setTheme] = useState(downloadTheme);

  useEffect(() => {
    if (savedTheme) {
      const response = async () => {
        await db
          .collection("CustomizedThemes")
          .doc(`${savedTheme}`)
          .get()
          .then(doc => {
            console.log("saved Theme doc", doc.data());

            if (doc.data().palette.primary.main)
              setColor(doc.data().palette.primary.main);
            if (doc.data().palette.secondary.main)
              setSecondaryColor(doc.data().palette.secondary.main);
            if (doc.data().palette.default.main)
              setDefaultColor(doc.data().palette.default.main);
            if (doc.data().background.paper)
              setPaperColor(doc.data().background.paper);
            if (doc.data()) setTheme(doc.data());
          })
          .catch(err => {
            console.log("Error getting documents", err);
          });
      };
      response();
    }
  }, []);

  console.log("renderedTheme", renderedTheme);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.root}>
      <Grid container spacing={1}>
        {/* BUILD START */}
        <Grid item xs={3} className={classes.selector}>
          <Paper className={classes.builderPaper}>
            <BuildNav />
            <Grid item>
              <Download downloadTheme={renderedTheme} />
              <SaveTheme downloadTheme={renderedTheme} />
              <Palette
                color={renderedColor}
                secondaryColor={renderedSecondaryColor}
                defaultColor={renderedDefaultColor}
                paperColor={renderedPaperColor}
                changeColor={changeColor}
                changeSecondaryColor={changeSecondaryColor}
                changeDefaultColor={changeDefaultColor}
                changePaperColor={changePaperColor}
              />
            </Grid>
          </Paper>
        </Grid>
        {/* BUILD END */}
        {/* Preview Start */}
        <Grid item xs={9}>
          <Paper
            className={classes.previewPaper}
            style={{ background: `${defaultColor}` }}
          >
            <PreviewAppBar
              secondaryColor={renderedSecondaryColor}
              color={renderedColor}
              className={classes.container}
            />
            <Grid item className={classes.preview}>
              <div className={classes.root}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  className={classes.tabContainer}
                  centered
                >
                  <Tab label="Item One" />
                  <Tab label="Buttons" />
                  <Tab label="Typography" />
                  <Tab label="Alerts" />
                </Tabs>
                <TabPanel value={value} index={0}>
                  item one
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid item xs={12}>
                    <PreviewButton />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid item xs={12}>
                    <PreviewTypography />
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Alerts
                </TabPanel>
              </div>
            </Grid>
          </Paper>
        </Grid>
        {/* Preview End */}
      </Grid>
    </section>
  );
};
