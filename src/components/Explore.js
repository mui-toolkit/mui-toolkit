import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Paper,
  Button,
  GridListTileBar,
  GridListTile,
  Popover,
  Tooltip,
  IconButton,
  Badge,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExploreAdd from './ExploreAdd';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const themes = [
    {
      img:
        'https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/JDL3JFArBfk8EL3vkG3v',
      user: 'MannyG',
      name: 'Autumn',
      url: 'JDL3JFArBfk8EL3vkG3v',
    },
    {
      img:
        'https://image.thum.io/get/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/ImZsctsSCmBECFnTrSXF',
      user: 'MannyG',
      name: 'Olive',
      url: 'ImZsctsSCmBECFnTrSXF',
    },
    {
      img:
        'https://image.thum.io/get/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/RP5z2XLqYOpEtg8gZbrJ',
      user: 'MannyG',
      name: 'Purple',
      url: 'RP5z2XLqYOpEtg8gZbrJ',
    },
    {
      img:
        'http://image.thum.io/get/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/RNjIqORxsSZIxT7FcB1Q',
      user: 'MannG',
      name: 'Another Brown Theme',
      url: 'https://mui-theme.firebaseapp.com/webpreview/RNjIqORxsSZIxT7FcB1Q',
    },
    {
      img:
        'https://image.thum.io/get/width/600/crop/800/http://mui-theme.firebaseapp.com/webpreview/B5xlrHw85lObNSJ1zHdY',
      user: 'MannG',
      name: 'Berries',
      url: 'http://mui-theme.firebaseapp.com/webpreview/B5xlrHw85lObNSJ1zHdY',
    },
    {
      img:
        'https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/mBVe6sGxrnXN77gfEaEA',
      user: 'MannG',
      name: 'Natural Pink',
      url: 'https://mui-theme.firebaseapp.com/webpreview/mBVe6sGxrnXN77gfEaEA',
    },
    {
      img:
        'https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/OaFqsL1LoxnlS236TQy1',
      user: 'MannG',
      name: 'Natural Pink',
      url: 'https://mui-theme.firebaseapp.com/webpreview/OaFqsL1LoxnlS236TQy1',
    },
    {
      img:
        'https://image.thum.io/get/auth/8186-fe739dc2614dfdbf1478af6427346aa8/width/600/crop/800/https://mui-theme.firebaseapp.com/webpreview/2t0bVKwzHHOmclm8eaEi',
      user: 'MannG',
      name: 'Natural Pink',
      url: 'https://mui-theme.firebaseapp.com/webpreview/2t0bVKwzHHOmclm8eaEi',
    },
  ];

  return (
    <React.Fragment>
      <Grid
        container
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
              <Button variant='outlined' className={classes.filterButton}>
                Trending
              </Button>
              <Button variant='outlined' className={classes.filterButton}>
                Popular
              </Button>
              <Button variant='outlined' className={classes.filterButton}>
                Recently Added
              </Button>
              <Button variant='outlined' className={classes.filterButton}>
                Most Stars
              </Button>
            </Grid>

            <ExploreAdd />
          </Grid>
          <Grid container direction='row' justify='center' alignItems='center'>
            {themes.map(theme => (
              <Grid item key={theme.name} style={{ padding: '1em' }}>
                <GridListTile style={{ color: 'white' }}>
                  <img src={theme.img} width='300px' />
                  <GridListTileBar
                    title={theme.name}
                    subtitle={<span>by: {theme.user}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${theme.name}`}
                        className={classes.icon}
                        onClick={handleClick}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  elevation={1}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <Paper style={{ padding: '1em' }}>
                    <Tooltip title='Star'>
                      <IconButton>
                        <Badge badgeContent={8} color='secondary'>
                          <StarBorderIcon />
                        </Badge>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Preview Theme'>
                      <IconButton
                        component={Link}
                        to={`/webpreview/${theme.url}`}
                        target='_blank'
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Bookmark'>
                      <IconButton>
                        <BookmarkIcon />
                      </IconButton>
                    </Tooltip>
                  </Paper>
                </Popover>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
