import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = ({ searchInput, setSearchInput, search }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      search();
    }
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
          placeholder="Search the image you are looking for!"
          type="text"
          value={searchInput}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          style={{ width: 300 }}
        />
        <button
          style={{
            width: 125,
            height: 40,
            border: "none",
            outline: "none",
            fontSize: 16,
            cursor: "pointer",
            marginLeft: 25,
            color: "white",
            background: "black",
            borderRadius: 10,
          }}
          onClick={() => {
            search();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
