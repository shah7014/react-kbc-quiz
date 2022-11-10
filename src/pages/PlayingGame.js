import React, { useState } from "react";
import classes from "./PlayingGame.module.css";
import Question from "../components/Question";
import AmountPyramid from "../components/AmountPyramid";
import questions from "../assets/questions";

const PlayingGame = (props) => {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const question = questions[currentQuestionNo];

  const handleAnswer = (isAnswerCorrect) => {
    if (!isAnswerCorrect) {
      // end the game
      props.onEndTheGame(currentQuestionNo);
    }
    if (isAnswerCorrect) {
      if (currentQuestionNo !== questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestionNo((prev) => prev + 1);
        }, 4000);
      } else {
        // end the game
        props.onSuccessEndTheGame();
      }
    }
  };

  return (
    <div className={classes.container}>
      <Question question={question} isAnswerCorrect={handleAnswer} />
      <AmountPyramid currentQuestionNo={currentQuestionNo} />
    </div>
  );
};

export default PlayingGame;
