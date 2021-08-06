import React from "react";

const styles = {
  margin: 10,
  display: "inline-block",
};

const Search = (props) => {
  return (
    <>
      <input type="search" />
      <button type="submit" onChange={props.handleSearch}>
        Search
      </button>
    </>
  );
};

export default Search;
