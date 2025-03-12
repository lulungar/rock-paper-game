import { useState } from "react";
import "./App.css";
import ScoreBar from "./components/ScoreBar";
import GameContainer from "./components/GameContainer";
import RulesBtn from "./components/RulesBtn";
import MyModal from "./components/MyModal/MyModal";
import GameStart from "./components/GameStart/GameStart";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");
  const [points, setPoints] = useState(12);

  return (
    <>
      <main>
        <MyModal visible={modalVisible} setVisible={setModalVisible} />
        <ScoreBar points={points} />
        {isGameStart ? (
          <GameStart
            choice={playerChoice}
            isGame={isGameStart}
            setIsGame={setIsGameStart}
            points={points}
            setPoints={setPoints}
          />
        ) : (
          <GameContainer
            setGameStart={setIsGameStart}
            choice={playerChoice}
            setChoise={setPlayerChoice}
          />
        )}

        <RulesBtn onClick={() => setModalVisible(true)} />
      </main>
    </>
  );
}

export default App;
