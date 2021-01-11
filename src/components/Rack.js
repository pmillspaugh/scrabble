import React from "react";
import Tile from "./Tile";
import "../css/Rack.css";

const Rack = (props) => {
  const randomLetters = [];
  const newLetterBag = props.letters;
  for (let i = 0; i < 7; i++) {
    // Pick random letter from letter bag (array) and add to rack
    const randomIndex = Math.floor(Math.random() * props.letters.length);
    const randomLetter = props.letters[randomIndex].letter;
    const randomLetterPoints = props.letters[randomIndex].points;
    randomLetters.push({ letter: randomLetter, points: randomLetterPoints });

    newLetterBag.splice(randomIndex, 1); // Remove picked letter from bag
    // props.onLettersChange(newLetterBag);
  }

  return (
    <div id="rack">
      <h3>PLAYER {props.player}</h3>
      <h1>{props.name}</h1>
      <div id="rack-top">
        {randomLetters.map((letter, index) => (
          <Tile
            key={`${letter.letter}${index}`}
            id={`${letter.letter}${index}`}
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
