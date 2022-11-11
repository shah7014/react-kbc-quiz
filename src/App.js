import { useState } from "react";
import PlayingGame from "./pages/PlayingGame";
import StartGame from "./pages/StartGame";

// 2 states:- "playing", "start"
function App() {
  const [gameState, setGameState] = useState("playing");

  const playGameHandler = () => {
    setGameState("playing");
  };

  const startGameHandler = () => {
    setGameState("start");
  };

  return (
    <>
      {gameState === "start" && <StartGame onPlayGame={playGameHandler} />}
      {gameState === "playing" && (
        <PlayingGame onStartGame={startGameHandler} />
      )}
    </>
  );
}

export default App;
