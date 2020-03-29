import React from "react";
import { ColorPop } from "./index";
import {
  Typography,
  MenuItem,
  Select,
  TextField,
  Grid,
  Link
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typography: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 3
  }
}));

export const CustomTypography = props => {
  const {
    setFontStyle,
    fontStyle,
    primaryTextColor,
    changePrimaryTextColor,
    primaryTextColorPicker,
    changeColorPickerDisplayed,
    secondaryTextColor,
    changeSecondaryTextColor,
    secondaryTextColorPicker,
    setTab
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="column" justify="flex">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={6} align="left">
            <Typography className={classes.typography}>Font Family</Typography>
          </Grid>
          <Grid item xs={6}>
            <Select
              labelId="demo-simple-select-label"
              id="fontFamily"
              value={fontStyle.fontFamily}
              onChange={event =>
                setFontStyle({
                  ...fontStyle,
                  fontFamily: event.target.value
                })
              }
            >
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={"Roboto"}
              >
                Roboto
              </MenuItem>
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={'"Helvetica Neue"'}
              >
                Helvetica
              </MenuItem>
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={"sans-serif"}
              >
                San-Serif
              </MenuItem>
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={'"Segoe UI"'}
              >
                Segoe Ui
              </MenuItem>
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={"Arial"}
              >
                Arial
              </MenuItem>
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={"-apple-system"}
              >
                Apple System
              </MenuItem>
              <MenuItem
                style={{ color: "#000", backgroundColor: "#fff" }}
                value={"BlinkMacSystemFont"}
              >
                Mac Stystem
              </MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={6} align="left">
            <Typography className={classes.typography}>
              Font Size (1-39)
            </Typography>
          </Grid>
          <Grid item item xs={6}>
            <form
              onChange={event =>
                event.target.value &&
                Number(event.target.value) < 40 &&
                Number(event.target.value) > 0
                  ? setFontStyle({
                      ...fontStyle,
                      fontSize: Number(event.target.value)
                    })
                  : null
              }
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                defaultValue={fontStyle.fontSize}
              />
            </form>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <ColorPop
            color={primaryTextColor}
            changeColor={changePrimaryTextColor}
            displayColorPicker={primaryTextColorPicker}
            changeColorPickerDisplayed={() =>
              changeColorPickerDisplayed("primaryText")
            }
          />
          <Typography
            style={{
              marginLeft: "15px",
              color: "#000",
              fontSize: 16,
              fontFamily: "Roboto",
              lineHeight: 4
            }}
          >
            Primary Text Color
          </Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <ColorPop
            color={secondaryTextColor}
            changeColor={changeSecondaryTextColor}
            displayColorPicker={secondaryTextColorPicker}
            changeColorPickerDisplayed={() =>
              changeColorPickerDisplayed("secondaryText")
            }
          />
          <Typography
            style={{
              marginLeft: "15px",
              color: "#000",
              fontSize: 16,
              fontFamily: "Roboto",
              lineHeight: 4
            }}
          >
            Secondary Text Color
          </Typography>
        </Grid>
        <Link onClick={() => setTab(2)}>
          <Typography variant="outlined" className={classes.typography}>
            Preview <VisibilityIcon />
          </Typography>
        </Link>
      </Grid>
    </React.Fragment>
  );
};
