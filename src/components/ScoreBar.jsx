import React from "react";

const ScoreBar = ({ points }) => {
  return (
    <div className="score-container">
      <div className="game-title">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className="score-result-container">
        <p>SCORE</p>
        <h1>{points}</h1>
      </div>
    </div>
  );
};

export default ScoreBar;
