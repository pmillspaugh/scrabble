import React from "react";
import "../css/Tile.css";

/*
Helpful resource on drag and drop in JavaScript: https://javascript.info/mouse-drag-and-drop
*/

const Tile = (props) => {
  function handleMouseDown(e) {
    e.preventDefault(); // prevents text highlighting when dragging tiles

    let currentSquare = null; // initializes Square element that tile is dragging over

    const clickedTile = document.getElementById(props.id); // creates variable for current tile

    // sets clicked Tile position to absolute within the app container
    document.getElementsByClassName("app-container")[0].append(clickedTile);
    clickedTile.style.position = "absolute";
    clickedTile.style.zIndex = 1000;
    clickedTile.style.transform = "scale(1.5)";

    // moves tile to cursor location
    function moveTo(clientX, clientY) {
      clickedTile.style.left = `${clientX - clickedTile.offsetWidth / 2}px`;
      clickedTile.style.top = `${clientY - clickedTile.offsetHeight / 2}px`;
    }

    moveTo(e.clientX, e.clientY);

    // drags tile as mouse moves
    function handleMouseMove(e) {
      moveTo(e.pageX, e.pageY);

      // creates array of elements at cursor location and selects third item (i.e. item after tile p and div)
      let elementsBelow = document.elementsFromPoint(e.clientX, e.clientY);
      let elementBelow = elementsBelow[2];

      if (!elementBelow) return; // returns if the cursor is out of the window

      let squareBelow = elementBelow.closest(".square"); // sets variable for square below cursor, or null if no square is below

      // TODO: rename currentSquare and squareBelow?
      if (currentSquare !== squareBelow) {
        if (currentSquare) {
          // currentSquare.style.opacity = "0.5";
        }
        currentSquare = squareBelow;
        if (currentSquare) {
          // TODO: replace square with tile (i.e. place tile on top of square)
          currentSquare.style.background = "red";
        }
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    clickedTile.onmouseup = function () {
      document.removeEventListener("mousemove", handleMouseMove);
      clickedTile.style.transform = "scale(1)";
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
