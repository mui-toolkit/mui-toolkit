import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import Button from '@material-ui/core/Button';
import { Alert } from '@material-ui/lab';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    // display: 'flex',
    // overflow: 'auto',
    // flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const webPreviewTheme = createMuiTheme({
  shadows: ['none'],
  palette: {
    primary: { main: '#8db31f' },
    secondary: { main: '#f50057' },
    default: { main: '#fff' },
    error: {
      main: '#f22983',
    },
    warning: {
      main: '#ffd034',
    },
    info: {
      main: '#2dbde2',
    },
    success: {
      main: '#5dd24d',
    },
    text: {
      primary: '#fff',
      secondary: '#8db31f',
    },
    background: {
      paper: '#555555',
      default: '#262626',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.04)',
      selectedOpacity: 0.08,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      color: '#fff',
      fontWeight: 300,
      fontSize: '6rem',
    },
    h2: {
      color: '#fff',
      fontWeight: 300,
      fontSize: '3.75rem',
    },
    h3: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '3rem',
    },
    h4: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '2.125rem',
    },
    h5: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h6: {
      color: '#fff',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    subtitle1: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '1rem',
    },
    subtitle2: {
      color: '#fff',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    body1: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      color: '#fff',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875',
      textTransform: 'none',
    },
    caption: {
      fontWeight: 400,
      color: '#fff',
      fontSize: '#0.75rem',
    },
    // CAPS BUTTON OFF
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiAlert: {
      variant: 'filled',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 0,
        // color: '#fff',
        height: 48,
        padding: '0 30px',
        // marginRight: 32,
      },
    },
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <ThemeProvider theme={webPreviewTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='absolute'
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge='start'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h5'
              noWrap
              className={classes.title}
            >
              This is A Web Live Web Preview of Your Theme
            </Typography>
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper>
                  <Chart />
                  <Grid item style={{ padding: '5px' }}>
                    <Button variant='contained' color='primary'>
                      Primary Color Button
                    </Button>
                  </Grid>
                  <Grid item style={{ padding: '5px' }}>
                    <Button variant='contained' color='secondary'>
                      Secondary Color Button
                    </Button>
                  </Grid>
                  <Alert severity='error'>
                    This is an error alert — check it out!
                  </Alert>
                  <Alert severity='warning'>
                    This is a warning alert — check it out!
                  </Alert>
                  <Alert severity='info'>
                    This is an info alert — check it out!
                  </Alert>
                  <Alert severity='success'>
                    This is a success alert — check it out!
                  </Alert>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}
