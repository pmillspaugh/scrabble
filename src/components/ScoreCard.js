import React from "react";
import Score from "./Score";
import "../css/ScoreCard.css";

// TODO: re-style to modern design, or leave as piece of paper?

const ScoreCard = () => {
  return (
    <div id="scorecard">
      <div id="paper-margin">
        <div className="top-row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <Score name="DFW" score={0} />
      <Score name="CD" score={0} />
    </div>
  );
};

export default ScoreCard;
