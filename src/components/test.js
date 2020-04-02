import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import gridContainer from '.././imgs/gridcontainer.jpg';
import gridItem from '.././imgs/griditem.png';
import twelvecolumns from '.././imgs/12columns.jpg';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import _ from "lodash";


const useStyles = makeStyles({
  container: {
    padding: '5em 2em 5em 2em',
  },
  paper: {
    padding: '1em',
    height: '100vh',
  },
  paperGrid: {
    height: '100vh',
    backgroundImage: `url(${twelvecolumns})`,
    backgroundSize: '8.34%',
  },
  box: {
    border: '2px solid #818181',
  },
});

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridBuilder() {
  const classes = useStyles();

  const layout = [
    { i: 'a', x: 12, y: 12, w: 12, h: 4, maxH: 4 },
    { i: 'b', x: 0, y: 0, w: 12, h: 4, maxH: 4 },
    { i: 'c', x: 0, y: 0, w: 12, h: 4, maxH: 4 },
  ];

  return (
    <React.Fragment>
      <Grid
        container
        container
        direction='row'
        // alignItems='center'
        className={classes.container}
        spacing={1}
      >
        <Grid item xs={9}>
          <Paper className={classes.paperGrid}>
            {/* <img
              alt='12 column grid'
              src={twelvecolumns}
              style={{ width: '100%', height: '100vh' }}
            /> */}
            <ResponsiveGridLayout
              className='layout'
              layout={layout}
              cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            >
              <Grid item key='a' className={classes.box}>
                a
              </Grid>
              <Grid item key='b' className={classes.box}>
                b
              </Grid>
              <Grid item key='c' className={classes.box}>
                c
              </Grid>
            </ResponsiveGridLayout>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              Grids
            </Typography>
            <Typography>Grid Container</Typography>
            <img alt='mui logo' src={gridContainer} style={{ width: '100%' }} />
            <Typography gutterBottom>Grid item</Typography>
            <img alt='mui logo' src={gridItem} style={{ width: '100%' }} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}






/////////////////////////////////



import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import gridContainer from '.././imgs/gridcontainer.jpg';
import gridItem from '.././imgs/griditem.png';
import twelvecolumns from '.././imgs/12columns.jpg';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import _ from 'lodash';

const useStyles = makeStyles({
  container: {
    padding: '5em 2em 5em 2em',
  },
  paper: {
    padding: '1em',
    height: '100vh',
  },
  paperGrid: {
    height: '100vh',
    backgroundImage: `url(${twelvecolumns})`,
    backgroundSize: '8.34%',
  },
  box: {
    border: '2px solid #818181',
  },
});

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridBuilder() {
  const classes = useStyles();

  const layout = [
    { i: 'a', x: 12, y: 12, w: 12, h: 4, maxH: 4 },
    { i: 'b', x: 0, y: 0, w: 12, h: 4, maxH: 4 },
    { i: 'c', x: 0, y: 0, w: 12, h: 4, maxH: 4 },
  ];

  return (
    <React.Fragment>
      <Grid
        container
        container
        direction='row'
        // alignItems='center'
        className={classes.container}
        spacing={1}
        justify='flex-end'
      >
        <Grid item xs={9}>
          <Paper className={classes.paperGrid}>
            {/* <img
              alt='12 column grid'
              src={twelvecolumns}
              style={{ width: '100%', height: '100vh' }}
            /> */}
            <ResponsiveGridLayout
              className='layout'
              layout={layout}
              cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            >
              <Grid
                container
                key='a'
                data-grid={{ x: 0, y: 0, w: 4, h: 1, maxH: 1 }}
                className={classes.box}
              >
                a
              </Grid>
              <Grid
                container
                key='b'
                data-grid={{ x: 0, y: 0, w: 8, h: 1, maxH: 1 }}
                className={classes.box}
              >
                b
              </Grid>
              <Grid
                container
                key='c'
                data-grid={{ x: 0, y: 0, w: 5, h: 1, maxH: 1 }}
                className={classes.box}
              >
                c
              </Grid>
            </ResponsiveGridLayout>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              Grids
            </Typography>
            <Typography>Grid Container</Typography>
            <img alt='mui logo' src={gridContainer} style={{ width: '100%' }} />
            <Typography gutterBottom>Grid item</Typography>
            <img alt='mui logo' src={gridItem} style={{ width: '100%' }} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



/////

<Grid item xs={9}>
          <Paper className={classes.paperGrid}>
            <Grid container direction='row' justify='flex-start'>

              <Grid item className={classes.box} xs={4} align='center'>
                a = 4 columns
              </Grid>
              <Grid item className={classes.box} xs={6} align='center'>
                b = 6 columns
              </Grid>
              <Grid item className={classes.box} xs={6} align='center'>
                c
              </Grid>
              <Grid item className={classes.box} xs={1} align='center'>
                d
              </Grid>
            </Grid>
          </Paper>
        </Grid>


        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h4' gutterBottom>
              Grids
            </Typography>
            <Grid item className={classes.containerStyle}>
              <Typography>Grid Container</Typography>
            </Grid>

            <img alt='mui logo' src={gridContainer} style={{ width: '100%' }} />
            <Typography gutterBottom>Grid item</Typography>
            <Grid item className={classes.box} xs={12} align='center'>
              e
            </Grid>
          </Paper>
        </Grid>


        /////


        const data = [
          {
            cols: 9,
            paper: classes.paperGrid,
            items: [
              { id: 'a', cols: 12, color: '#da0000' },
              { id: 'b', cols: 4, color: '#00c7ce' },
              { id: 'c', cols: 5, color: '#7ed400' },
            ],
          },
          {
            cols: 3,
            paper: classes.paper,
            items: [{ id: 'd', cols: 12, color: '#be00f8' }],
          },
        ];
