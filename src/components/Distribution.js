import React from "react";
import "../css/Distribution.css";

// TODO: responsively design so that each letter-instances block stays together and gets pushed to the next row
//  ? use flexbox instead of grid?

const Distribution = () => {
  const alphabet = [
    { letter: "A", tiles: 9 },
    { letter: "B", tiles: 2 },
    { letter: "C", tiles: 2 },
    { letter: "D", tiles: 4 },
    { letter: "E", tiles: 12 },
    { letter: "F", tiles: 2 },
    { letter: "G", tiles: 3 },
    { letter: "H", tiles: 2 },
    { letter: "I", tiles: 9 },
    { letter: "J", tiles: 1 },
    { letter: "K", tiles: 1 },
    { letter: "L", tiles: 4 },
    { letter: "M", tiles: 2 },
    { letter: "N", tiles: 6 },
    { letter: "O", tiles: 8 },
    { letter: "P", tiles: 2 },
    { letter: "Q", tiles: 1 },
    { letter: "R", tiles: 6 },
    { letter: "S", tiles: 4 },
    { letter: "T", tiles: 6 },
    { letter: "U", tiles: 4 },
    { letter: "V", tiles: 2 },
    { letter: "W", tiles: 2 },
    { letter: "X", tiles: 1 },
    { letter: "Y", tiles: 2 },
    { letter: "Z", tiles: 1 },
    { letter: "_", tiles: 2 },
  ];

  return (
    <div id="distribution">
      <h1>Letter distribution</h1>
      <div id="letter-count">
        {alphabet.map((letter) => (
          <h3 key={letter.letter}>
            {letter.letter}-{letter.tiles.toString()}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Distribution;
