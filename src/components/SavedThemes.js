import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "themeName", label: "Theme Name", minWidth: 170 },
  { id: "date", label: "Date saved", minWidth: 100 },

  {
    id: "primaryPalette",
    label: "Primary Palette",
    minWidth: 80,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "secondaryPalette",
    label: "Secondary Palette",
    minWidth: 80,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "typography",
    label: "Font Family",
    minWidth: 100,
    align: "right",
    format: value => value.toFixed(2)
  }
];

function createData(
  themeName,
  date,
  primaryPalette,
  secondaryPalette,
  typography
) {
  return { themeName, date, primaryPalette, secondaryPalette, typography };
}

const rows = [
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto"),
  createData("India", 20200307, "red", "blue", "Roboto")
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
