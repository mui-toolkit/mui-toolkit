import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '1rem',
    minWidth: 10,
    marginLeft: '25px',
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h4'>MUI Toolkit</Typography>
          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to='/' label='Home' />
            <Tab
              className={classes.tab}
              component={Link}
              to='/learn'
              label='Learn'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/start'
              label='Start'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/login'
              label='Login'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/logout'
              label='Logout'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/signup'
              label='Signup'
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} />
    </React.Fragment>
  );
}
