import React from "react";
import "../css/Square.css";

const Square = (props) => {
  let className = "";
  if (props.bonus) {
    className += props.bonus;
  }
  const regex = /-|star/g;
  return (
    <div id="square">
      <div className={className}>
        {className.replace(regex, " ").toUpperCase()}
      </div>
    </div>
  );
};

export default Square;
