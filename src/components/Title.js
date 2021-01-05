import React from "react";
import Tile from "./Tile";
import "../css/Title.css";

const Title = () => {
  return (
    <div id="title">
      <Tile letter="S" points="1" />
      <Tile letter="C" points="3" />
      <Tile letter="R" points="1" />
      <Tile letter="A" points="1" />
      <Tile letter="B" points="3" />
      <Tile letter="B" points="3" />
      <Tile letter="L" points="1" />
      <Tile letter="E" points="1" />
    </div>
  );
};

export default Title;
