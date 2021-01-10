import React, { useState, useEffect } from "react";
import "./css/App.css";
import ScoreCard from "./components/ScoreCard";
import Bag from "./components/Bag";
import Distribution from "./components/Distribution";
import Title from "./components/Title";
import Board from "./components/Board";
import Rack from "./components/Rack";

// TODO: Move dictionary API call to separate component

// Merriam Webster's Collegiate Dictionary API
// https://dictionaryapi.com/products/api-collegiate-dictionary
const dictionaryKey = "70dd862e-9f52-4739-b376-f6097807aef8";
const dictionaryURL =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

function App() {
  const [searchWord, setSearchWord] = useState("gumption");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${dictionaryURL}${searchWord}?key=${dictionaryKey}`)
      .then((response) => response.json())
      .then(
        (json) => {
          console.log(json[0].def[0].sseq[0][0][1].dt[0][1]);
        },
        (error) => {
          setError(error);
        }
      );

    // TODO: add useEffect cleanup return statement
    return () => {};
  }, [searchWord]);

  // TODO: handle error with message that word is not valid
  if (error) {
    setSearchWord("");
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="app-container">
      <section id="left-column">
        <ScoreCard />
        <Bag />
        <Distribution />
      </section>
      <section id="middle-column">
        <Title />
        <Board />
      </section>
      <section id="right-column">
        <Rack name="David Foster Wallace" player="1" />
        <Rack name="Charles Dickens" player="2" />
      </section>
    </div>
  );
}

export default App;
