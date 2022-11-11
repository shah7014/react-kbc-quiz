import React, { useEffect, useState } from "react";
import classes from "./PlayingGame.module.css";
import Question from "../components/Question";
import AmountPyramid from "../components/AmountPyramid";
import questions from "../assets/questions";
import prizes from "../assets/prizes";
import useSound from "use-sound";
import play from "../assets/sounds/play.mp3";

const PlayingGame = (props) => {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const [prizeWon, setPrizeWon] = useState(0);

  const [gameInProgress, setGameInProgress] = useState(true);

  const [playSound] = useSound(play);

  useEffect(() => {
    playSound();
  }, [playSound]);

  const updatePrizeMoney = (questionNo) => {
    let prize = 0;
    if (questionNo !== 0) {
      prize = prizes[questionNo - 1];
    }

    setPrizeWon(prize);
  };

  const onWinningTheGame = () => {
    setPrizeWon(prizes[prizes.length - 1]);
    setGameInProgress(false);
  };

  const answerHandler = (isAnswerCorrect) => {
    if (!isAnswerCorrect) {
      // end the game
      updatePrizeMoney(currentQuestionNo);
      setGameInProgress(false);
    }
    if (isAnswerCorrect) {
      if (currentQuestionNo !== questions.length - 1) {
        // proceed to next question
        updatePrizeMoney(currentQuestionNo);
        setCurrentQuestionNo((prev) => prev + 1);
      } else {
        // last question successfully answered
        onWinningTheGame();
      }
    }
  };

  const timeOverHandler = () => {
    updatePrizeMoney(currentQuestionNo);
    setGameInProgress(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.playing}>
        {gameInProgress ? (
          <Question
            currentQuestionNo={currentQuestionNo}
            isAnswerCorrect={answerHandler}
            onTimeOver={timeOverHandler}
          />
        ) : (
          <>
            <span className={classes.prize}>
              You have won {prizeWon} amount
            </span>
            <button onClick={props.onStartGame} className={classes.btn}>
              Play again
            </button>
          </>
        )}
      </div>

      <AmountPyramid currentQuestionNo={currentQuestionNo} />
    </div>
  );
};

export default PlayingGame;
