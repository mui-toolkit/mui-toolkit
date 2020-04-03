import React from "react";
import saveAs from "file-saver";
import Button from "@material-ui/core/Button";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import { makeStyles } from "@material-ui/core/styles";

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
const refined = themeObject => {
  let refined = JSON.parse(JSON.stringify(themeObject));
  delete refined.bookmarked;
  delete refined.bookmarksCount;
  delete refined.createdAt;
  delete refined.createdBy;
  delete refined.lastEditAt;
  delete refined.starsCount;
  delete refined.themeId;
  delete refined.userId;
  delete refined.themeName;
  delete refined.explore;
  delete refined.userName

  return refined;
};
export const Download = props => {
  const classes = useStyles();

  const download = async theme => {
    const refinedObj = await refined(theme);
    const fileToSave = new Blob([JSON.stringify(refinedObj)], {
      type: "application/json",
      name: "theme.json"
    });
    return await saveAs(fileToSave, "theme.json");
  };
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          fontFamily: "Roboto",
          fontSize: 14,
          marginTop: "1em",
          marginBottom: "1em",
          color: "#3f51b5"
        }}
        onClick={() => download(props.downloadTheme)}
        className={classes.button}
      >
        Download <SaveAltIcon style={{ marginLeft: "5px" }} />
      </Button>
    </div>
  );
};

export default Download;
