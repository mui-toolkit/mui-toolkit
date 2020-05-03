import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Paper,
  Button,
  Backdrop,
  CircularProgress,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import ExploreAdd from './ExploreAdd';
import ExploreTable from './ExploreTable';
import { db } from '../config/firebase';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles({
  title: {
    padding: '1em',
  },
  container: {
    padding: '5em 2em 5em 2em',
  },
  tab: {
    textIndent: '30px',
  },
  filterButton: {
    margin: '10px',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

export default function Explore() {
  const classes = useStyles();
  let location = useLocation();
  const [isLoading, setLoading] = useState(true);
  const [themes, setThemes] = useState([]);
  // guest
  if (!location.state) {
    location.state = {
      themes: [
        {
          themeId: 1,
          themeName: 'You need to login to have access to these features',
          explore: false,
        },
      ],
      starredThemes: [
        {
          themeId: 0,
          themeName: 'You need to login to have access to these features',
        },
      ],
      bookmarkedThemes: [
        {
          themeId: 0,
          themeName: 'You need to login to have access to these features',
        },
      ],
      signedInUserId: 'guest',
      userName: 'guest',
    };
  }
  let savedThemes = location.state.themes.slice();
  let myStarredThemes = location.state.starredThemes;
  let myBookmarkedThemes = location.state.bookmarkedThemes;
  const signedInUserId = location.state.signedInUserId;
  let userName = location.state.userName;
  let status = location.state.status;

  const [exploreThemes, setExploreThemes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const explore = [];
    const response = async () => {
      // get favorite theme to pass
      await db
        .collection('CustomizedThemes')
        .where('explore', '==', true)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            console.log('No publicly displayed themes yet');
            return;
          }
          snapshot.forEach((doc) => {
            explore.push({
              ...doc.data(),
              themeId: doc.id,
            });
            setExploreThemes([...explore]);
            setLoading(false);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    };
    response();
  }, []);

  useEffect(() => {
    const userThemes = [];
    if (status === 'loggedIn') {
      const unsub = async () => {
        await db
          .collection('CustomizedThemes')
          .where('userId', '==', `${signedInUserId}`)
          .get()
          .then((snapshot) => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }
            snapshot.forEach((theme) => {
              userThemes.push({
                ...theme.data(),
                themeId: theme.id,
              });
              setThemes([...userThemes]);
            });
          })
          .catch((err) => {
            console.error(err);
          });
      };
      unsub();
    }
  }, []);

  const handleClick = (event, index) => {
    setSelectedIndex(index);
  };
  // *************
  exploreThemes.map((themeObj) => {
    themeObj.img = `https://image.thum.io/get/auth/${process.env.REACT_APP_THUMIO_API_KEY}/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
    themeObj.user = themeObj.createdBy;
    themeObj.url = `https://mui-theme.firebaseapp.com/webpreview/${themeObj.themeId}`;
    themeObj.trending = themeObj.bookmarksCount + themeObj.starsCount;
  });
  // *************

  return (
    <React.Fragment>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Grid
        direction='column'
        alignItems='center'
        className={classes.container}
      >
        <Paper style={{ padding: '1em' }}>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            style={{ marginBottom: '2em' }}
          >
            <Grid item style={{ marginRight: '2em' }}>
              <Button
                variant='outlined'
                className={classes.filterButton}
                selected={selectedIndex === 0}
                onClick={(event) => handleClick(event, 0)}
              >
                All
              </Button>
              <Button
                variant='outlined'
                className={classes.filterButton}
                selected={selectedIndex === 1}
                onClick={(event) => handleClick(event, 1)}
              >
                Trending
              </Button>
              <Button
                variant='outlined'
                className={classes.filterButton}
                selected={selectedIndex === 2}
                onClick={(event) => handleClick(event, 2)}
              >
                Most Bookmarked
              </Button>
              <Button
                variant='outlined'
                className={classes.filterButton}
                selected={selectedIndex === 3}
                onClick={(event) => handleClick(event, 3)}
              >
                Recently Added
              </Button>
              <Button
                variant='outlined'
                className={classes.filterButton}
                selected={selectedIndex === 4}
                onClick={(event) => handleClick(event, 4)}
              >
                Most Stars
              </Button>
            </Grid>

            {signedInUserId !== 'guest' ? (
              <ExploreAdd
                savedThemes={status === 'loggedIn' ? themes : savedThemes}
                setExploreThemes={setExploreThemes}
                userName={userName}
              />
            ) : (
              <Tooltip title='Access to extra features requires signingup or logging in'>
                <IconButton component={Link} to={`/signup`}>
                  <HomeIcon />
                  Sign in
                </IconButton>
              </Tooltip>
            )}
          </Grid>
          {selectedIndex === 0 && (
            <ExploreTable
              themesToMap={exploreThemes.reverse()}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 1 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.trending - a.trending,
              )}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 2 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.bookmarksCount - a.bookmarksCount,
              )}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 3 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) =>
                  new Date(b.createdAt.seconds * 1000) -
                  new Date(a.createdAt.seconds * 1000),
              )}
              signedInUserId={signedInUserId}
            />
          )}
          {selectedIndex === 4 && (
            <ExploreTable
              themesToMap={exploreThemes.sort(
                (a, b) => b.starsCount - a.starsCount,
              )}
              signedInUserId={signedInUserId}
            />
          )}
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
