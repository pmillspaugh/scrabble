import React from "react";
import "../css/Tile.css";

const Tile = (props) => {
  function handleMouseDown(event) {
    event.preventDefault(); // prevents text highlighting when dragging

    const clickedTile = document.getElementById(props.id);

    // sets clicked Tile position to absolute within the app container
    document.getElementsByClassName("app-container")[0].append(clickedTile);
    clickedTile.style.position = "absolute";
    clickedTile.style.zIndex = 1000;

    function moveTo(pageX, pageY) {
      clickedTile.style.top = `${pageY - clickedTile.offsetHeight / 2}px`;
      clickedTile.style.left = `${pageX - clickedTile.offsetWidth / 2}px`;
    }

    // drags tile as mouse moves
    function handleMouseMove(event) {
      moveTo(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", handleMouseMove);

    clickedTile.onmouseup = function () {
      document.removeEventListener("mousemove", handleMouseMove);
      clickedTile.onmouseup = null;
    };
  }

  return (
    <div className="tile" id={props.id} onMouseDown={handleMouseDown}>
      <p>
        {props.letter}
        <sub>{props.points}</sub>
      </p>
    </div>
  );
};

export default Tile;
