import { useState } from "react";
import classes from "./App.module.css";
import PlayingGame from "./pages/PlayingGame";
import StartGame from "./pages/StartGame";
import prizes from "./assets/prizes";
import GameOver from "./pages/GameOver";

// 2 states:- "playing", "start", "over"
function App() {
  const [gameState, setGameState] = useState("start");

  const [prizeWon, setPrizeWon] = useState(0);

  const playGameHandler = () => {
    setGameState("playing");
  };

  const overGameHandler = (wrongAnsweredQuestionNo) => {
    let prize = 0;
    if (wrongAnsweredQuestionNo !== 0) {
      prize = prizes[wrongAnsweredQuestionNo - 1];
    }
    console.log("game premature");
    setGameState("over");
    setPrizeWon(prize);
  };

  const overOnSuceessGameHandler = () => {
    console.log("game success");
    setGameState("over");
    setPrizeWon(prizes[prizes.length - 1]);
  };

  return (
    <>
      {gameState === "start" && <StartGame onPlayGame={playGameHandler} />}
      {gameState === "playing" && (
        <PlayingGame
          onEndTheGame={overGameHandler}
          onSuccessEndTheGame={overOnSuceessGameHandler}
        />
      )}
      {gameState === "over" && <GameOver prize={prizeWon} />}
    </>
  );
}

export default App;
