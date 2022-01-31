import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, TextField } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const jokeBaseUrl = "https://api.chucknorris.io/jokes/search?query=";

  const onSearchType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue.length > 2) {
      const delaySearch = setTimeout(() => {
        axios.get(jokeBaseUrl + searchValue).then((response: AxiosResponse) => {
          setSearchHistory((history) => [...history, searchValue]);
          console.log("joke --> ", response.data);
          console.log("history --> ", searchHistory);
        });
      }, 1200);
      return () => clearTimeout(delaySearch);
    }
  }, [searchValue]);

  return (
    <div>
      <TextField id="standard-basic" label="Search for a joke" variant="standard" onChange={onSearchType} />

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "ghostwhite" }}
        aria-labelledby="search-history-subheader"
        subheader={
          <ListSubheader component="div" id="search-history-subheader">
            Search History
          </ListSubheader>
        }
      >
        {searchHistory.map((value) => (
          <ListItemButton>
            <ListItemIcon>
              <ManageSearchIcon />
            </ListItemIcon>
            <ListItemText primary={value} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default SearchBar;
