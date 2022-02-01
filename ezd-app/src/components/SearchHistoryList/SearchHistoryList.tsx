import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

interface SearchHistoryListProps {
  searchHistory: string[];
}

const SearchHistoryList: React.FC<SearchHistoryListProps> = ({ searchHistory }) => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 350, bgcolor: "ghostwhite", margin: "20px" }}
      aria-labelledby="search-history-subheader"
      subheader={
        <ListSubheader component="div" id="search-history-subheader">
          Recent Search History
        </ListSubheader>
      }
    >
      {searchHistory.map((value, index) => (
        <ListItemButton key={index}>
          <ListItemIcon>
            <ManageSearchIcon />
          </ListItemIcon>
          <ListItemText primary={value} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default SearchHistoryList;
