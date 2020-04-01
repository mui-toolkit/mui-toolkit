import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, Button } from "@material-ui/core";
import ExploreAdd from "./ExploreAdd";
import ExploreTable from "./ExploreTable";
import { db } from "../config/firebase";

const useStyles = makeStyles({
  title: {
    padding: "1em"
  },
  container: {
    padding: "5em 2em 5em 2em"
  },
  tab: {
    textIndent: "30px"
  },
  filterButton: {
    margin: "10px"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});

export default function Explore() {
  const classes = useStyles();
  let location = useLocation();
  let savedThemes = location.state.themes.slice();
  let myStarredThemes = location.state.starredThemes;
  let myBookmarkedThemes = location.state.bookmarkedThemes;
  const signedInUserId = location.state.signedInUserId;

  const [exploreThemes, setExploreThemes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [starClicked, setStarClicked] = useState(false);
  const [bookmarkClicked, setBookmarkClicked] = useState(false);

  useEffect(() => {
    const explore = [];
    const response = async () => {
      // get favorite theme to pass
      await db
        .collection("CustomizedThemes")
        .where("explore", "==", true)
        .get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log("No publicly displayed themes yet");
            return;
          }
          snapshot.forEach(doc => {
            explore.push({ ...doc.data(), exploreId: doc.id });
            setExploreThemes([...explore]);
          });
        })
        .catch(err => {
          console.error(err);
        });
    };
    response();
  }, []);

  const handleClick = (event, index) => {
    setSelectedIndex(index);
  };

  // *************
  exploreThemes.map(themeObj => {
    themeObj.img = `https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
    themeObj.user = themeObj.createdBy;
    themeObj.url = `https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
    themeObj.trending = themeObj.bookmarksCount + themeObj.starsCount;
  });
  // *************
  console.log("================>>>>>", exploreThemes);
  // make a deep copy of exploreThemes (whenever it updates? gulp) and compare to myBookmarks and mySaves arrays and mark the commons to reflect starClicked and bookmarkClicked.  map deep copy to exploretable. give it 3 new fields. bookmarked: boolean, starred: boolean, trendingtotal: bookmarksCount+starsCount
  // const deepClone = JSON.parse(JSON.stringify(exploreThemes));

  // deepClone.forEach(obj => {
  //   obj.bookmarked = myBookmarkedThemes.includes(obj) ? true : false;
  //   obj.starred = myStarredThemes.includes(obj) ? true : false;
  //   obj.trendingTotal = obj.bookmarksCount + obj.starsCount;
  //   obj.signedInUserId = signedInUserId;
  // });

  // console.log("Explore -++++++> NEW deepClone", deepClone);
  return (
    <React.Fragment>
      <Grid
        direction="column"
        alignItems="center"
        className={classes.container}
      >
        <Paper style={{ padding: "1em" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginBottom: "2em" }}
          >
            <Grid item style={{ marginRight: "2em" }}>
              <Button
                variant="outlined"
                className={classes.filterButton}
                selected={selectedIndex === 0}
                onClick={event => handleClick(event, 0)}
              >
                Trending
              </Button>
              <Button
                variant="outlined"
                className={classes.filterButton}
                selected={selectedIndex === 1}
                onClick={event => handleClick(event, 1)}
              >
                Popular
              </Button>
              <Button
                variant="outlined"
                className={classes.filterButton}
                selected={selectedIndex === 2}
                onClick={event => handleClick(event, 2)}
              >
                Recently Added
              </Button>
              <Button
                variant="outlined"
                className={classes.filterButton}
                selected={selectedIndex === 3}
                onClick={event => handleClick(event, 3)}
              >
                Most Stars
              </Button>
            </Grid>

            <ExploreAdd
              savedThemes={savedThemes}
              setExploreThemes={setExploreThemes}
            />
          </Grid>
          {selectedIndex === 0 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.trending - a.trending
              )}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 1 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.bookmarksCount - a.bookmarksCount
              )}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 2 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) =>
                  new Date(b.createdAt.seconds * 1000) -
                  new Date(a.createdAt.seconds * 1000)
              )}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 3 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.starsCount - a.starsCount
              )}
              signedInUserId={signedInUserId}
            />
          )}
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
