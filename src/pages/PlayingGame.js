import React, { useState } from "react";
import classes from "./PlayingGame.module.css";
import Question from "../components/Question";
import AmountPyramid from "../components/AmountPyramid";
import questions from "../assets/questions";

const PlayingGame = (props) => {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const handleAnswer = (isAnswerCorrect) => {
    if (!isAnswerCorrect) {
      // end the game
      props.onEndTheGame(currentQuestionNo);
    }
    if (isAnswerCorrect) {
      if (currentQuestionNo !== questions.length - 1) {
        // proceed to next question
        setCurrentQuestionNo((prev) => prev + 1);
      } else {
        // end the game
        props.onSuccessEndTheGame();
      }
    }
  };

  return (
    <div className={classes.container}>
      <Question
        currentQuestionNo={currentQuestionNo}
        isAnswerCorrect={handleAnswer}
      />
      <AmountPyramid currentQuestionNo={currentQuestionNo} />
    </div>
  );
};

export default PlayingGame;
