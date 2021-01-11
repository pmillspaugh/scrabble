import React, { useState } from "react";
import "../css/Bag.css";

const Bag = (props) => {
  const [hovered, setHovered] = useState(false);

  function toggleHover() {
    setHovered(!hovered);
  }

  return (
    <div id="bag" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      {hovered ? <h3>Letters remaining: {props.letters.length}</h3> : <h1>Scrabble</h1>}
    </div>
  );
};

export default Bag;
