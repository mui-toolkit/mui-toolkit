import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
  IconButton,
  Tooltip,
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: 'themeName',
    columnAlignment: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'createdAt',
    columnAlignment: true,
    disablePadding: false,
    label: 'Created',
  },

  {
    id: 'primaryPalette',
    label: 'Primary',
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toLocaleString(),
  },
  {
    id: 'secondaryPalette',
    label: 'Secondary',
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toLocaleString(),
  },
  {
    id: 'typography',
    label: 'Font',
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toFixed(2),
  },
  {
    id: 'actions',
    label: 'Actions',
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toFixed(2),
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.columnAlignment ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: '1em',
  },
}));

export default function ThemesTable({ themes }) {
  console.log('ThemesTable -> themes', themes);
  const rows = themes.map(themeObject => ({
    themeName: themeObject.themeName,
    createdAt: JSON.stringify(
      new Date(themeObject.createdAt.seconds * 1000),
    ).slice(1, 11),
    primaryPalette: themeObject.palette.primary.main,
    secondaryPalette: themeObject.palette.secondary.main,
    typography: themeObject.typography.fontFamily,
    themeId: themeObject.themeId,
    userId: themeObject.userId,
  }));

  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const handleDelete = async (themeId, userId, themeName) => {
    // delete collection
    await db
      .collection('CustomizedThemes')
      .doc(`${themeId}`)
      .delete()
      .then(function() {
        console.log('Deleted Saved Theme from collection');
      })
      .catch(function(error) {
        console.log('Error deleting theme: ', error);
      });
    //delete from user themes array
    await db
      .collection('Users')
      .doc(`${userId}`)
      .update({
        themes: firebase.firestore.FieldValue.arrayRemove(`${themeName}`),
      })
      .then(() => {
        console.log('deleted reference to this theme');
      });
    alert('Theme Deleted');
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return !themes.length ? (
    <div>
      <h2>No Projects Available</h2>
      <Link to='/design'>
        <h2>Build your first professional Material UI Project!</h2>
      </Link>
      ;
    </div>
  ) : (
    <div>
      <Paper className={classes.paper}>
        <Typography variant='h6' id='tableTitle'>
          Saved Themes
        </Typography>
        <TableContainer>
          <Table
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
            aria-label='enhanced table'
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              style={{ align: 'right' }}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.themeId}
                      style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                      <TableCell align='left'>{row.themeName}</TableCell>
                      <TableCell align='left'>{row.createdAt}</TableCell>
                      <TableCell align='left'>{row.primaryPalette}</TableCell>
                      <TableCell align='left'>{row.secondaryPalette}</TableCell>
                      <TableCell align='left'>{row.typography}</TableCell>
                      <TableCell align='left'>
                        <Tooltip title='Preview Theme'>
                          <IconButton
                            aria-label='preview'
                            component={Link}
                            to={`/webpreview/${row.themeId}`}
                            target='_blank'
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Edit Theme'>
                          <IconButton
                            aria-label='edit'
                            component={Link}
                            to={`/design/${row.themeId}/`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete Theme'>
                          <IconButton
                            aria-label='delete'
                            onClick={() =>
                              handleDelete(
                                row.themeId,
                                row.userId,
                                row.themeName,
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label='Dense padding'
      />
    </div>
  );
}
