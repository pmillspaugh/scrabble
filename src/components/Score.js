import React from "react";
import "../css/Score.css";

const Score = (props) => {
  return (
    // TODO: score needs to be dynamic
    // TODO: add highest scoring word
    <div id="score">
      <div className="row" id="top-row">
        <h2>{props.name}</h2>
      </div>
      <div className="row">
        <h3>Total score: {props.score}</h3>
      </div>
      <div className="row">
        <h3>Highest word: {props.score}</h3>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Score;
