import React, { useEffect, useState } from "react";
import cl from "./GameStart.module.css";

const GameStart = ({ choice, isGame, setIsGame, points, setPoints }) => {
  const [houseChoice, setHouseChoice] = useState("");
  const [pathHouseImg, setPathHouseImg] = useState(""); //ne state
  const pathImg = `/rock-paper-game/images/icon-${choice}.svg`;
  const player = [cl.playerResult];
  const house = [cl.playerResult];
  const restart = [cl.middle, cl.active];
  let isWin = false;
  let isTie = false;
  let actualPoint = points;

  useEffect(
    () => {
      pickHouse();
    },
    [
      /*choice*/
    ]
  );

  useEffect(() => {
    setPathHouseImg(`/rock-paper-game/images/icon-${houseChoice}.svg`);
  }, [houseChoice]);

  function getRandomInt(min = 1, max = 3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getExactChoice(choice, entity) {
    switch (choice) {
      case "paper":
        entity.push(cl.paper);
        break;
      case "rock":
        entity.push(cl.rock);
        break;
      case "scissors":
        entity.push(cl.scissors);
        break;
    }
  }

  function pickHouse() {
    const pick = getRandomInt(1, 3);
    switch (pick) {
      case 1:
        setHouseChoice(() => "paper");
        return;
      case 2:
        setHouseChoice(() => "rock");
        return;
      case 3:
        setHouseChoice(() => "scissors");
        return;
    }
  }

  getExactChoice(choice, player);
  getExactChoice(houseChoice, house);

  if (
    (choice == "paper" && houseChoice == "rock") ||
    (choice == "rock" && houseChoice == "scissors") ||
    (choice == "scissors" && houseChoice == "paper")
  ) {
    isWin = true;
    isTie = false;
    actualPoint = actualPoint + 1;
  } else if (
    (choice == "paper" && houseChoice == "paper") ||
    (choice == "rock" && houseChoice == "rock") ||
    (choice == "scissors" && houseChoice == "scissors")
  ) {
    isWin = false;
    isTie = true;
  } else {
    isWin = false;
    isTie = false;
    actualPoint = actualPoint - 1;
  }

  return (
    <div className={cl.gameContent}>
      <div className={cl.item}>
        <h1>YOU PICKED</h1>
        <div className={player.join(" ")}>
          <img src={pathImg} alt="" />
        </div>
      </div>
      <div className={restart.join(" ")}>
        {/* {isWin ? <h1>YOU WIN</h1> : <h1>YOU LOSE</h1>} */}
        {isWin ? (
          <h1>YOU WIN</h1>
        ) : isTie ? (
          <h1>ITS A DRAW</h1>
        ) : (
          <h1>YOU LOSE</h1>
        )}
        <button
          onClick={() => {
            setIsGame(false);
            setPoints(actualPoint);
          }}
        >
          PLAY AGAIN
        </button>
      </div>
      <div className={cl.item}>
        <h1>THE HOUSE PICKED</h1>
        {house.length == 1 ? (
          <div className={cl.unpicked}></div>
        ) : (
          <div className={house.join(" ")}>
            <img src={pathHouseImg} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GameStart;
