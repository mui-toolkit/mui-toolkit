import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Download from "./Download";
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
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import { db } from "../config/firebase";
import firebase from "firebase";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StarIcon from "@material-ui/icons/Star";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import saveAs from "file-saver";

const refined = themeObject => {
  let refined = JSON.parse(JSON.stringify(themeObject));
  delete refined.bookmarked;
  delete refined.bookmarksCount;
  delete refined.createdAt;
  delete refined.createdBy;
  delete refined.lastEditAt;
  delete refined.starsCount;
  delete refined.themeId;
  delete refined.userId;
  delete refined.themeName;
  delete refined.explore;
  delete refined.userName;
  return refined;
};

const download = async theme => {
  const refinedObj = await refined(theme);
  const fileToSave = new Blob([JSON.stringify(refinedObj)], {
    type: "application/json",
    name: "theme.json"
  });
  return await saveAs(fileToSave, "theme.json");
};

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
    disablePadding: false,
    label: "Theme Name"
  },
  {
    id: "lastEditAt",
    columnAlignment: true,
    disablePadding: false,
    label: "Date edited"
  },

  {
    id: "primaryPalette",
    label: "Primary Palette",
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toLocaleString()
  },
  {
    id: "secondaryPalette",
    label: "Secondary Palette",
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toLocaleString()
  },
  {
    id: "typography",
    label: "Font Family",
    columnAlignment: true,
    disablePadding: false,
    format: value => value.toFixed(2)
  },
  {
    id: "actions",
    label: "Actions",
    columnAlignment: true,
    disablePadding: false,
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
  paper: {
    width: "100%",
    padding: "1em"
  }
}));

export default function ThemesTable({
  setThemes,
  themes,
  tableTitle,
  signedInUserId,
  table,
  setBookmarkedThemes,
  setStarredThemes,
  foundUser,
  linkedThemes,
  linkedStarredThemes,
  linkedBookmarkedThemes
}) {
  const favorite =
    table === "B"
      ? "Explore themes and bookmark 🔖 for future reference"
      : "Explore themes and 🌟star🌟 them to love";
  const rows = themes.map(themeObject => ({
    themeName: themeObject.themeName,
    lastEditAt: JSON.stringify(
      new Date(themeObject.lastEditAt.seconds * 1000)
    ).slice(1, 11),
    primaryPalette: themeObject.palette.primary.main,
    secondaryPalette: themeObject.palette.secondary.main,
    typography: themeObject.typography.fontFamily,
    themeId: themeObject.themeId,
    userId: themeObject.userId,
    favId: themeObject.favId,
    downloadTheme: { ...themeObject }
  }));

  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
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

  const handleFav = async (table, themeId) => {
    if (table === "S") {
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          starred: firebase.firestore.FieldValue.arrayRemove(`${themeId}`)
        })
        .then(() => {
          console.log(`removed ${themeId} from users starred array`);
          setStarredThemes(prevStarredThemes =>
            prevStarredThemes.filter(theme => theme.themeId !== themeId)
          );
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .update({
          starsCount: firebase.firestore.FieldValue.increment(-1)
        })
        .then(() => {
          console.log("decrement starsCount");
        });
    } else if (table === "B") {
      await db
        .collection("Users")
        .doc(`${signedInUserId}`)
        .update({
          bookmarked: firebase.firestore.FieldValue.arrayRemove(`${themeId}`)
        })
        .then(() => {
          console.log(`removed ${themeId} from users bookmarked array`);
          setBookmarkedThemes(prevBookmarkedThemes =>
            prevBookmarkedThemes.filter(theme => theme.themeId !== themeId)
          );
        });
      await db
        .collection("CustomizedThemes")
        .doc(`${themeId}`)
        .update({
          bookmarksCount: firebase.firestore.FieldValue.increment(-1)
        })
        .then(() => {
          console.log("decrement bookmarkscount");
        });
    }
  };
  const handleDelete = async (themeId, userId, themeName) => {
    // delete collection
    await db
      .collection("CustomizedThemes")
      .doc(`${themeId}`)
      .delete()
      .then(function() {
        console.log("Deleted Saved Theme from collection");
      })
      .then(response => {
        setThemes(prevThemes =>
          prevThemes.filter(theme => theme.themeId !== themeId)
        );
      })
      .catch(function(error) {
        console.error(error);
      });
    //delete from user themes array
    await db
      .collection("Users")
      .doc(`${userId}`)
      .update({
        themes: firebase.firestore.FieldValue.arrayRemove(`${themeName}`)
      })
      .then(() => {
        console.log("deleted reference to this theme");
      });
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return !themes.length ? (
    <div>
      <h2>No Projects Available</h2>
      {table === "M" ? (
        <Link to="/design">
          <h2>Build your first professional Material UI Project!</h2>
        </Link>
      ) : (
        <Link
          to={{
            pathname: "/explore",
            state: {
              themes: linkedThemes,
              starredThemes: linkedStarredThemes,
              bookmarkedThemes: linkedBookmarkedThemes,
              signedInUserId,
              foundUser
            }
          }}
        >
          <h2>{`${favorite}`}</h2>
        </Link>
      )}
    </div>
  ) : (
    <div>
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant="h6" id="tableTitle">
          {tableTitle}
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
              style={{ align: "right" }}
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
                      key={row.themeId}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.themeName}
                      </TableCell>
                      <TableCell align="left">{row.lastEditAt}</TableCell>
                      <TableCell align="left">{row.primaryPalette}</TableCell>
                      <TableCell align="left">{row.secondaryPalette}</TableCell>
                      <TableCell align="left">{row.typography}</TableCell>

                      <Tooltip title="Preview Theme">
                        <IconButton
                          aria-label="preview"
                          component={Link}
                          to={`/webpreview/${row.themeId}`}
                          target="_blank"
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      {table === "M" ? (
                        <Tooltip title="Edit Theme">
                          <IconButton
                            aria-label="edit"
                            // key={row.themeId}
                            component={Link}
                            to={`/design/${row.themeId}/${signedInUserId}`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip title="Download">
                          <IconButton
                            aria-label="download"
                            onClick={() => download(row.downloadTheme)}
                          >
                            <SystemUpdateAltIcon
                              style={{ marginLeft: "5px" }}
                            />
                          </IconButton>
                        </Tooltip>
                      )}
                      {table === "M" ? (
                        <Tooltip title="Delete Theme">
                          <IconButton
                            aria-label="delete"
                            onClick={() =>
                              handleDelete(
                                row.themeId,
                                row.userId,
                                row.themeName
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      ) : (
                        <Tooltip
                          title={
                            table === "S" ? "Remove Star" : "Remove Bookmark"
                          }
                        >
                          <IconButton
                            onClick={() => handleFav(table, row.themeId)}
                          >
                            {table === "S" ? <StarIcon /> : <BookmarkIcon />}
                          </IconButton>
                        </Tooltip>
                      )}
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
