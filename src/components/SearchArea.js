import React from "react";
import Search from "./Search";

const SearchArea = ({searchInput,setSearchInput, search}) => {
  return (
    <div
      style={{
        minHeight: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Moving the world with images</h1>
      <div>
        <Search searchInput={searchInput} setSearchInput={setSearchInput}  search={search}/>
      </div>
    </div>
  );
};

export default SearchArea;
