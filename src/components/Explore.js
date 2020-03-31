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
  let myStarredThemes = location.state.starredThemes.slice();
  console.log("Explore -> myStarredThemes", myStarredThemes);
  let myBookmarkedThemes = location.state.bookmarkedThemes.slice();
  console.log("Explore -> myBookmarkedThemes", myBookmarkedThemes);

  const [exploreThemes, setExploreThemes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  //// do something here // test if hook sets before firestore query
  // favIcon is either set at true/false or undefined // set this first when setting explore status.
  // const [starClicked, setStarClicked] = useState(!!favorite.starred);
  // const [bookmarkClicked, setBookmarkClicked] = useState(!!favorite.bookmarked);
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
            console.log(doc.id, "explored=>", doc.data());
            explore.push({ ...doc.data(), exploreId: doc.id });
            setExploreThemes([...explore]);
          });
        })
        .catch(err => {
          console.log("Error getting explored themes", err);
        });
    };
    response();
  }, []);

  // map through starred and bookmarked themes, find common with exploreThemes array and set commons with starClicked, bookmarkClicked
  // const findCommon = (arr1, arr2) =>
  //   arr1.filter(obj =>
  //     arr2.filter(exploreTheme => obj.themeId === exploreTheme.exploreId)
  //   );
  // const markEachFav = array => {
  //   array.forEach(obj => )
  // }

  // const starThis = findCommon(myStarredThemes, exploreThemes);
  // const bookmarkeThis = findCommon(myBookmarkedThemes, exploreThemes);

  const handleClick = (event, index) => {
    setSelectedIndex(index);
  };

  // *************
  exploreThemes.map(themeObj => {
    themeObj.img = `https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
    themeObj.user = themeObj.createdBy;
    themeObj.url = `https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
  });
  // *************
  console.log("================>>>>>", exploreThemes);

  // recently added
  // const recentlyAdded = exploreThemes.sort(
  //   (a, b) => b.createdAt.seconds - a.createdAt.seconds
  // );
  // console.log(
  //   "Explore -> recentlyAdded",
  //   recentlyAdded,
  //   exploreThemes[0].createdAt.seconds
  // );

  // on buttonClick most stars // exploreThemes.map(themes => {})
  const bookmarkedThemes = exploreThemes.sort(
    (a, b) => b.bookmarksCount - a.bookmarksCount
  );
  const starredThemes = exploreThemes.sort(
    (a, b) => b.starsCount - a.starsCount
  );

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
              setStarClicked={setStarClicked}
              setBookmarkClicked={setBookmarkClicked}
            />
          </Grid>
          {selectedIndex === 0 && (
            <ExploreTable
              themesToMap={exploreThemes}
              setStarClicked={setStarClicked}
              setBookmarkClicked={setBookmarkClicked}
              starClicked={starClicked}
              bookmarkClicked={bookmarkClicked}
            />
          )}
          {selectedIndex === 1 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.bookmarksCount - a.bookmarksCount
              )}
              setStarClicked={setStarClicked}
              setBookmarkClicked={setBookmarkClicked}
              starClicked={starClicked}
              bookmarkClicked={bookmarkClicked}
            />
          )}
          {selectedIndex === 2 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.createdAt.seconds - a.createdAt.seconds
              )}
              setStarClicked={setStarClicked}
              setBookmarkClicked={setBookmarkClicked}
              starClicked={starClicked}
              bookmarkClicked={bookmarkClicked}
            />
          )}
          {selectedIndex === 3 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.starsCount - a.starsCount
              )}
              setStarClicked={setStarClicked}
              setBookmarkClicked={setBookmarkClicked}
              starClicked={starClicked}
              bookmarkClicked={bookmarkClicked}
            />
          )}
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
