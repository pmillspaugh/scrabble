import React from "react";
import Square from "./Square";
import "../css/Board.css";

/* 
triple-word: 8
double-word: 17;
triple-letter: 10;
double-letter: 24;
*/

const tripleWords = [0, 7, 14, 105, 119, 210, 217, 224];
const doubleWords = [
  16,
  28,
  32,
  42,
  48,
  56,
  64,
  70,
  154,
  160,
  168,
  176,
  182,
  192,
  196,
  208,
];
const star = [112];
const tripleLetters = [20, 24, 76, 80, 84, 88, 136, 140, 144, 148, 200, 204];
const doubleLetters = [
  3,
  11,
  36,
  38,
  45,
  52,
  59,
  96,
  98,
  108,
  116,
  126,
  128,
  165,
  172,
  179,
  186,
  188,
  213,
  221,
];

const squares = [];

// ? Change key to be something other than the index?
// TODO: more elegant solution to style bonus tiles?
for (let i = 0; i < 225; i++) {
  if (tripleWords.includes(i)) {
    squares.push(<Square key={i} bonus="triple-word-score" />);
  } else if (doubleWords.includes(i)) {
    squares.push(<Square key={i} bonus="double-word-score" />);
  } else if (star.includes(i)) {
    squares.push(<Square key={i} bonus="star" />);
  } else if (tripleLetters.includes(i)) {
    squares.push(<Square key={i} bonus="triple-letter-score" />);
  } else if (doubleLetters.includes(i)) {
    squares.push(<Square key={i} bonus="double-letter-score" />);
  } else {
    squares.push(<Square key={i} />);
  }
}

const Board = () => {
  return (
    <div id="board-border">
      <div id="board">{squares}</div>
    </div>
  );
};

export default Board;
