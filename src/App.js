import { useState } from "react";
import classes from "./App.module.css";
import PlayingGame from "./pages/PlayingGame";
import StartGame from "./pages/StartGame";

// 2 states:- "playing", "start", "over"
function App() {
  const [gameState, setGameState] = useState("start");

  const playGameHandler = () => {
    setGameState("playing");
  };

  const overGameHandler = () => {
    setGameState("over");
  };

  return (
    <>
      {gameState === "start" && <StartGame onPlayGame={playGameHandler} />}
      {gameState === "playing" && (
        <PlayingGame onTimeOver={() => setGameState("start")} />
      )}
    </>
  );
}

export default App;
