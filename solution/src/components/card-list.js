import React from "react";
import Card from "./card";
const styles = {};

const CardList = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <Card {...item} />
      ))}
    </>
  );
};

export default CardList;
