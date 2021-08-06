import React, { useState, useEffect } from "react";
import CardList from "./components/card-list";
import Search from "./components/search";
import { getBooks, getBooksAndMagazines } from "./dataSource/getData";

const styles = {
  container: {
    margin: 30,
    maxWidth: 700,
  },
};
const App = () => {
  const [booksAndMagazines, setBooksAndMagazines] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getBooksAndMagazines().then((data) => {
      setBooksAndMagazines(data);
    });
  }, []);

  // Not completed implementation
  const handleSearch = (value) => {
    setIsSearchMode(true);
    const searchByISBN = booksAndMagazines.filter(
      (item) => item.isbn === value
    );
    setSearchResult(searchByISBN);
  };

  const clearSearch = () => {
    setIsSearchMode(false);
    setSearchResult([]);
  };

  return (
    <div style={styles.container}>
      <Search handleSearch={handleSearch} />
      {booksAndMagazines && <CardList items={booksAndMagazines} />}
      {isSearchMode && <CardList items={searchResult} />}
    </div>
  );
};

export default App;
