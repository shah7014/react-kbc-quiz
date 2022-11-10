import React, { useState } from "react";
import classes from "./PlayingGame.module.css";
import Question from "../components/Question";
import Amount from "../components/Amount";
import questions from "../assets/questions";

const PlayingGame = (props) => {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const question = questions[currentQuestionNo];

  const handleSubmitAnswer = (answer) => {
    const correctAnswerNo = questions[currentQuestionNo].correctAnswer;
    const correctAnswer = questions[currentQuestionNo][correctAnswerNo];
    if (answer !== correctAnswer) {
      // end the game
      props.onEndTheGame(currentQuestionNo);
    }
    if (correctAnswer === answer) {
      if (currentQuestionNo !== questions.length - 1) {
        setCurrentQuestionNo((prev) => prev + 1);
      } else {
        // end the game
        props.onSuccessEndTheGame();
      }
    }
  };

  return (
    <div className={classes.container}>
      <Question question={question} onAnswerSubmit={handleSubmitAnswer} />
      <Amount currentQuestionNo={currentQuestionNo} />
    </div>
  );
};

export default PlayingGame;
