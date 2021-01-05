import React from "react";
import "../css/Tile.css";

const Tile = (props) => {
  return (
    <div id="tile">
      <p>
        {props.letter}
        <sub>{props.points}</sub>
      </p>
    </div>
  );
};

export default Tile;
