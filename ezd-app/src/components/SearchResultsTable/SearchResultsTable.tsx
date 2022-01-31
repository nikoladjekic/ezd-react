import React from "react";
import Paper from "@mui/material/Paper";

import { IJoke } from "../../interfaces/joke";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface SearchResultsTableProps {
  tableData: IJoke[];
}

const SearchResultsTable: React.FC<SearchResultsTableProps> = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Updated at</TableCell>
            <TableCell>Visit Page</TableCell>
            <TableCell align="right">Joke</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.categories[0]} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.categories[0]}
              </TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.updated_at}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResultsTable;
