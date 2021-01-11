import React from "react";
import "../css/Tile.css";

const Tile = (props) => {
  // When a tile is clicked, set absolute position in order to drag
  function handleMouseDown(event) {
    const clickedTile = document.getElementById(props.id);
    clickedTile.style.position = "absolute";
    clickedTile.style.zIndex = 1000;

    document.getElementsByClassName("app-container")[0].append(clickedTile);

    clickedTile.style.top = `${event.pageY}px`; // TODO: consider refactoring to a function
    clickedTile.style.left = `${event.pageX}px`;
  }

  function handleMouseMove(event) {
    const clickedTile = document.getElementById(props.id);
    clickedTile.style.top = `${event.pageY}px`; // TODO: consider refactoring to a function
    clickedTile.style.left = `${event.pageX}px`;
  }

  return (
    <div
      className="tile"
      id={props.id}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <p>
        {props.letter}
        <sub>{props.points}</sub>
      </p>
    </div>
  );
};

export default Tile;
