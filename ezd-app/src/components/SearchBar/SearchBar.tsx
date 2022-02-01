import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { TextField } from "@mui/material";

import { IJoke } from "../../interfaces/joke";
import SearchHistoryList from "../SearchHistoryList/SearchHistoryList";
import SearchResultsTable from "../SearchResultsTable/SearchResultsTable";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const jokeBaseUrl = "https://api.chucknorris.io/jokes/search?query=";
  const [searchValue, setSearchValue] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<IJoke[]>([]);

  const onSearchType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onResponseFetch = (response: IJoke[]) => {
    console.log(response); //TODO:

    setSearchResults(response);
    const maxHistoryItems = 10;
    if (searchHistory.length < maxHistoryItems) {
      setSearchHistory((history) => [searchValue, ...history]);
    } else {
      const history = [...searchHistory];
      history.splice(maxHistoryItems, 1);
      history.splice(0, 0, searchValue);
      setSearchHistory([...history]);
    }
  };

  useEffect(() => {
    if (searchValue.length > 2) {
      const delaySearch = setTimeout(() => {
        axios
          .get(jokeBaseUrl + searchValue, {
            params: {
              _limit: 10,
            },
          })
          .then((response: AxiosResponse) => {
            onResponseFetch(response.data.result);
          });
      }, 1000);
      return () => clearTimeout(delaySearch);
    }
  }, [searchValue]);

  return (
    <div>
      <TextField id="standard-basic" label="Search for a joke" variant="standard" onChange={onSearchType} value={searchValue} />

      {searchResults.length && <SearchResultsTable tableData={searchResults} />}

      {searchHistory.length && <SearchHistoryList searchHistory={searchHistory} />}
    </div>
  );
};

export default SearchBar;
