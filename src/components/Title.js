import React from "react";
import TitleTile from "./TitleTile";
import "../css/Title.css";

const Title = () => {
  return (
    <div id="title">
      <TitleTile letter="S" points="1" />
      <TitleTile letter="C" points="3" />
      <TitleTile letter="R" points="1" />
      <TitleTile letter="A" points="1" />
      <TitleTile letter="B" points="3" />
      <TitleTile letter="B" points="3" />
      <TitleTile letter="L" points="1" />
      <TitleTile letter="E" points="1" />
    </div>
  );
};

export default Title;
