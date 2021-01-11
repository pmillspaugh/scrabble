import React from "react";
import "../css/TitleTile.css";

const TitleTile = (props) => {
  return (
    <div className="title-tile">
      <p>
        {props.letter}
        <sub>{props.points}</sub>
      </p>
    </div>
  );
};

export default TitleTile;
