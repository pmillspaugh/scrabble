import React from "react";
import Tile from "./Tile";
import letters from "../letters";
import "../css/Rack.css";

const Rack = (props) => {
  const randomLetters = [];
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex].letter;
    const randomLetterPoints = letters[randomIndex].points;
    randomLetters.push({ letter: randomLetter, points: randomLetterPoints });
  }

  return (
    <div id="rack">
      <h3>PLAYER {props.player}</h3>
      <h1>{props.name}</h1>
      <div id="rack-top">
        {randomLetters.map((letter) => (
          <Tile
            key={letter.letter} // ! need a unique key for each Tile
            letter={letter.letter}
            points={letter.points}
          />
        ))}
      </div>
      <div id="rack-bottom"></div>
      <div id="buttons">
        <button>Swap tiles</button>
        <button>Shuffle tiles</button>
      </div>
    </div>
  );
};

export default Rack;
