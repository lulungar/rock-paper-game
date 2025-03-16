import React from "react";
import GameItem from "./GameItem";

const GameContainer = ({ choice, setChoise, setGameStart }) => {
  return (
    <div className="btn-container">
      <img src="/images/bg-triangle.svg" alt="" />
      <GameItem
        onClick={() => {
          setChoise("paper");
          setGameStart(true);
        }}
        style={"btn-item paper"}
        imgSrc={"/rock-paper-game/images/icon-paper.svg"}
      />
      <GameItem
        onClick={() => {
          setChoise("rock");
          setGameStart(true);
        }}
        style={"btn-item rock"}
        imgSrc={"/rock-paper-game/images/icon-rock.svg"}
      />
      <GameItem
        onClick={() => {
          setChoise("scissors");
          setGameStart(true);
        }}
        style={"btn-item scissors"}
        imgSrc={"/rock-paper-game/images/icon-scissors.svg"}
      />
    </div>
  );
};

export default GameContainer;
