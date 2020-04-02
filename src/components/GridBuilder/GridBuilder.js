import React, { useState, useRef } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import twelvecolumns from '../../imgs/12columns.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DragNDrop from './DragNDrop';
import { cloneDeep } from 'lodash';
import { ChangeSize } from './ChangeSize';
import { GridContainerPosition } from './GridContainerPosition';
import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@ant-design/colors';

// imgs/12columns.jpg

const useStyles = makeStyles({
  container: {
    padding: '5em 0 5em 0',
  },
  paper: {
    padding: '1em',
    // height: '100vh',
  },
  paperGrid: {
    // height: '100vh',
    backgroundImage: `url(${twelvecolumns})`,
    backgroundSize: '8.34%',
    border: '2px dashed #da0000',
    position: '-webkit-sticky',
    position: 'sticky',
    zIndex: 1200,
    top: '6em',
  },
  box: {
    border: '2px solid #818181',
    height: '100px',
    padding: '3em 0 5em 0',
  },
  containerStyle: {
    border: '2px dashed #da0000',
  },
  dragging: {
    border: '2px solid #818181',
    height: '100px',
    padding: '3em 0 5em 0',
    backgroundColor: '#da0000',
    opacity: 0.5,
  },
});

export default function GridBuilder() {
  const classes = useStyles();
  const [size, setSize] = useState(12);
  const [letter, setLetter] = useState(101);
  const [colorIndex, setColorIndex] = useState(1);

  //position state
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('center');

  const colors = [
    '#f8eb00', // yellow
    '#be00f8', // purple
    green.primary,
    '#00c7ce', // blue
    '#ff5436', // red
    '#7ed400', // yellow
    '#f8eb00', // green
    gold.primary, // gold
    blue.primary, //
    magenta.primary,
  ];

  const data = [
    {
      cols: 9,
      paper: classes.paperGrid,
      items: [
        { id: 'a', cols: 12, color: '#ff5436' },
        { id: 'b', cols: 4, color: '#00c7ce' },
        { id: 'c', cols: 5, color: '#7ed400' },
      ],
    },
    {
      cols: 3,
      paper: classes.paper,
      items: [{ id: 'd', cols: 12, color: colors[colorIndex - 1] }],
    },
  ];

  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log('drag starting...,', params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const getStyles = params => {
    const currentItem = dragItem.current;
    if (
      currentItem.grpI === params.grpI &&
      currentItem.itemI === params.itemI
    ) {
      return classes.dragging;
    } else {
      return classes.box;
    }
  };

  const handleDragEnter = (e, params) => {
    console.log('entering drag', params);

    if (colorIndex === 9) {
      setColorIndex(0);
    } else {
      const currentItem = dragItem.current;
      if (e.target !== dragNode.current) {
        console.log('target is not the same');
        setList(oldList => {
          let newList = JSON.parse(JSON.stringify(oldList));
          newList[params.grpI].items.splice(
            params.itemI,
            0,
            newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0],
          );
          dragItem.current = params;
          if (newList[1].items.length === 0) {
            setColorIndex(colorIndex + 1);
            setLetter(letter + 1);
            newList[1].items = [
              {
                id: String.fromCharCode(letter),
                cols: 12,
                color: `${colors[colorIndex]}`,
              },
            ];
          }
          return newList;
        });
      }
    }
  };

  const handleDragEnd = () => {
    console.log('ending drag..');
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const handleDelete = (e, params) => {
    console.log('PARAMS', params);
    console.log('ITEM', list[0].items[params.itemI].id);

    let id = list[0].items[params.itemI].id;

    setList(prevList => {
      let newer = prevList[params.grpI].items.filter(item => item.id !== id);

      console.log(newer);
      return [
        { cols: 9, paper: classes.paperGrid, items: [...newer] },
        { ...prevList[1] },
      ];
    });
  };

  const handleChangeSize = (e, params, newSize) => {
    console.log('PARAMS', params);
    console.log('ITEM', list[0].items[params.itemI].id);
    console.log('SIZE', newSize);

    let id = list[params.grpI].items[params.itemI].id;

    list[params.grpI].items.forEach(item => {
      if (item.id === id) {
        item.cols = newSize;
      } else {
        return item;
      }
    });

    setList(prevList => {
      return [
        {
          cols: 9,
          paper: classes.paperGrid,
          items: [...list[0].items],
        },
        { ...prevList[1] },
      ];
    });
  };

  const gridCodeBuilder = () => {
    let numberOfGridItems = list[0].items.length;

    let items = list[0].items;

    let gridItemMap = items.map(
      item => `${'  '}<Grid item xs={${item.cols}} > ${item.id} </Grid>`,
    );

    return gridItemMap.join('\n');
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        className={classes.container}
        justify='flex-end'
      >
        {list.map((group, grpI) => (
          <Grid
            item
            xs={group.cols}
            onDragEnter={
              dragging && !group.items.length
                ? e => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
          >
            <Paper className={group.paper}>
              <Grid
                container
                direction='row'
                direction={grpI ? null : `${direction}`}
                justify={grpI ? 'center' : `${justify}`}
                alignItems={grpI ? null : `${alignItems}`}
              >
                {group.items.map((item, itemI) => (
                  <Grid
                    item
                    style={{ backgroundColor: item.color, opacity: 0.5 }}
                    className={
                      dragging ? getStyles({ grpI, itemI }) : classes.box
                    }
                    xs={item.cols}
                    align='center'
                    draggable
                    onDragEnter={
                      dragging
                        ? e => {
                            handleDragEnter(e, { grpI, itemI });
                          }
                        : null
                    }
                    onDragStart={e => {
                      handleDragStart(e, { grpI, itemI });
                    }}
                  >
                    {' '}
                    <Grid
                      container
                      direction='row'
                      justify='center'
                      alignItems={alignItems}
                    >
                      {grpI ? (
                        <React.Fragment>
                          <Typography style={{ fontWeight: 800, fontSize: 23 }}>
                            Drag and Drop Me!
                          </Typography>
                          <Typography
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            {`${item.id} = 12 columns`}{' '}
                          </Typography>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Grid item>
                            <Typography
                              style={{ marginRight: '5px', fontWeight: 800 }}
                            >{`${item.id} = `}</Typography>
                          </Grid>
                          <Grid item>
                            <ChangeSize
                              handleChangeSize={handleChangeSize}
                              size={size}
                              setSize={setSize}
                              grpI={grpI}
                              itemI={itemI}
                              list={list}
                            />
                          </Grid>
                          <Typography item>column(s)</Typography>
                        </React.Fragment>
                      )}
                    </Grid>
                    {grpI ? null : (
                      <Button onClick={e => handleDelete(e, { grpI, itemI })}>
                        <DeleteForeverIcon />
                      </Button>
                    )}
                  </Grid>
                ))}
                {grpI === 1 ? (
                  <Grid item>
                    <Paper
                      style={{
                        backgroundColor: '#3c3c3c',
                        color: '#fff',
                        padding: '.5em',
                        marginTop: '1em',
                        marginBottom: '1em',
                      }}
                    >
                      <pre data-lang='javascript'>
                        {`<Grid container\n${'  '}direction={${direction}}\n${'  '}justify={${justify}}\n${'  '}alignItems={${alignItems}}\n>\n${gridCodeBuilder()} \n</Grid>`}
                      </pre>
                    </Paper>
                    <GridContainerPosition
                      direction={direction}
                      setDirection={setDirection}
                      justify={justify}
                      setJustify={setJustify}
                      alignItems={alignItems}
                      setAlignItems={setAlignItems}
                    />
                  </Grid>
                ) : null}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
