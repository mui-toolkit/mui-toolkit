import React, { useState } from "react";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function createData(
  themeName,
  date,
  primaryPalette,
  secondaryPalette,
  typography
) {
  return { themeName, date, primaryPalette, secondaryPalette, typography };
}

//dummy data
const rows = [
  createData("Haskell", 20200307, "red", "blue", "Roboto"),
  createData("America", 20200101, "amarillo", "azul", "Arial"),
  createData("Haskell", 20200307, "red", "blue", "Roboto"),
  createData("FullStack", 20200307, "red", "silver", "Roboto"),
  createData("FullStack", 20200307, "red", "silver", "Roboto"),
  createData("FullStack", 20200307, "pink", "silver", "Roboto"),
  createData("FullStack", 20200307, "pink", "silver", "Roboto"),
  createData("FullStack", 20200401, "pink", "silver", "Roboto"),
  createData("FullStack", 20200401, "pink", "blue", "Roboto"),
  createData("FullStack", 20200401, "pink", "blue", "Roboto"),
  createData("Oasis", 20200401, "red", "blue", "Roboto"),
  createData("Oasis", 20200401, "red", "blue", "Roboto"),
  createData("Oasis", 20200401, "green", "blue", "Roboto"),
  createData("Oasis", 20200401, "green", "gold", "Roboto"),
  createData("Oasis", 20200307, "green", "gold", "Roboto"),
  createData("Java", 20200307, "green", "gold", "Roboto"),
  createData("Java", 20200307, "green", "gold", "Roboto"),
  createData("Java", 20200307, "green", "gold", "Roboto"),
  createData("Java", 20200307, "red", "gold", "Roboto"),
  createData("Java", 20200401, "red", "blue", "Roboto"),
  createData("Haskell", 20200401, "red", "blue", "Roboto"),
  createData("Haskell", 20200401, "yellow", "blue", "Roboto"),
  createData("Haskell", 20200401, "yellow", "blue", "Roboto"),
  createData("Haskell", 20200401, "yellow", "blue", "Roboto"),
  createData("Haskell", 20200401, "yellow", "blue", "Roboto"),
  createData("Python", 20200401, "yellow", "blue", "Roboto"),
  createData("Python", 20200307, "yellow", "blue", "Roboto"),
  createData("Python", 20200307, "red", "blue", "Roboto"),
  createData("Python", 20200307, "red", "blue", "Roboto")
];

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
  return order === "desc"
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
    id: "themeName",
    columnAlignment: true,
    disablePadding: true,
    label: "Theme Name",
    minWidth: 170
  },
  {
    id: "date",
    columnAlignment: false,
    disablePadding: true,
    label: "Date saved",
    minWidth: 100
  },

  {
    id: "primaryPalette",
    label: "Primary Palette",
    columnAlignment: false,
    disablePadding: false,
    minWidth: 80,
    format: value => value.toLocaleString()
  },
  {
    id: "secondaryPalette",
    label: "Secondary Palette",
    columnAlignment: false,
    disablePadding: false,
    minWidth: 80,
    format: value => value.toLocaleString()
  },
  {
    id: "typography",
    label: "Font Family",
    columnAlignment: false,
    disablePadding: false,
    minWidth: 100,
    format: value => value.toFixed(2)
  }
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
            align={headCell.columnAlignment ? "left" : "right"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function SavedThemes() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Saved Themes
        </Typography>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.themeName}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.primaryPalette}</TableCell>
                      <TableCell align="right">
                        {row.secondaryPalette}
                      </TableCell>
                      <TableCell align="right">{row.typography}</TableCell>
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
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
