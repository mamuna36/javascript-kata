// npm package to extract csv data
import { dsv } from "d3-fetch";

export const DOCUMENT_TYPE = {
  BOOK: "book",
  MAGAZINE: "magazine",
};

const getAuthorsData = () => dsv(";", "/authors.csv");

const getBooksData = () => dsv(";", "/books.csv");

const getMagazinesData = () => dsv(";", "/magazines.csv");

const mapAuthorsName = (authorsData) => {
  const authors = {};
  authorsData.forEach(
    (author) =>
      (authors[author.email] = `${author.firstname} ${author.lastname}`)
  );
  return authors;
};

export const getBooksAndMagazines = async () => {
  return await Promise.all([
    getAuthorsData(),
    getBooksData(),
    getMagazinesData(),
  ]).then((data) => {
    const [authorsData, booksData, magazinesData] = data;

    const authors = mapAuthorsName(authorsData);
    console.log(authors);
    const books = booksData.map((book) => ({
      ...book,
      authors: book.authors.split(",").map((author) => authors[author]),
      type: DOCUMENT_TYPE.BOOK,
    }));

    const magazines = magazinesData.map((magazine) => ({
      ...magazine,
      authors: magazine.authors.split(",").map((author) => authors[author]),
      type: DOCUMENT_TYPE.MAGAZINE,
    }));

    const booksAndMagazines = [...books, ...magazines];
    return booksAndMagazines;
  });
};
