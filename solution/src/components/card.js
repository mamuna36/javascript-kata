import React from "react";
import { DOCUMENT_TYPE } from "../dataSource/getData";

const styles = {
  container: {
    border: "1px solid grey",
    borderRadius: 4,
    padding: "20px 10px",
    margin: 10,
  },
  type: {
    display: "inline-block",
    marginBottom: 10,
    padding: 10,
    border: "1px solid",
    borderRadius: 4,
    color: "#fff",
    textTransform: "capitalize",
  },
  bookType: {
    backgroundColor: "#3a5cc8",
    borderColor: "#3a5cc8",
  },
  magazineType: {
    backgroundColor: "#e55cc8",
    borderColor: "#e55cc8",
  },
  name: {
    fontSize: 30,
    paddingBottom: 10,
  },
  title: {
    fontSize: 15,
    paddingBottom: 10,
  },
  author: {
    width: "20%",
    marginBottom: 10,
    backgroundColor: "green",
    color: "white",
  },
};

const Card = (props) => {
  const typeStyle =
    props.type === DOCUMENT_TYPE.BOOK
      ? { ...styles.type, ...styles.bookType }
      : { ...styles.type, ...styles.magazineType };

  return (
    <div style={styles.container}>
      <div style={typeStyle}>{props.type}</div>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.name}>{props.name}</div>
      <div>
        Authors:{" "}
        {props.authors.map((author) => (
          <div style={styles.author}>{author}</div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Card;
