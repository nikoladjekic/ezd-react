import React from "react";
import Paper from "@mui/material/Paper";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { IJoke } from "../../interfaces/joke";

interface SearchResultsTableProps {
  tableData: IJoke[];
}

const SearchResultsTable: React.FC<SearchResultsTableProps> = ({ tableData }) => {
  const formatDate = (date: string): string => {
    return new Date(date).toDateString();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100%", margin: "20px" }} aria-label="search-results-table">
        <TableHead>
          <TableRow>
            <TableCell>Icon</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell>Updated at</TableCell>
            <TableCell>Joke</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.url} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Avatar alt="icon" src={row.icon_url} />
              </TableCell>
              <TableCell>{row.categories[0]}</TableCell>
              <TableCell>{formatDate(row.created_at)}</TableCell>
              <TableCell>{formatDate(row.updated_at)}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell>
                <a href={row.url} target="_blank" rel="noreferrer">
                  <NorthEastIcon sx={{ mr: 1 }} />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResultsTable;
