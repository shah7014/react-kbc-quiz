import React, { useEffect, useState } from "react";
import questions from "../assets/questions";
import classes from "./Question.module.css";
import Timer from "./Timer";
import useSound from "use-sound";
import correct from "../assets/sounds/correct.mp3";
import wrong from "../assets/sounds/wrong.mp3";

const Question = (props) => {
  const questionData = questions[props.currentQuestionNo];

  const [chosenAnswer, setChosenAnswer] = useState(null);

  const [selectedOptionClass, setSelectedOptionClass] = useState(
    classes.option
  );

  const [stopTheTimer, setStopTheTimer] = useState(false);

  const [correctSound] = useSound(correct);
  const [wrongSound] = useSound(wrong);

  // resetting them whenever we move to next question
  useEffect(() => {
    setChosenAnswer(null);
    setSelectedOptionClass(classes.option);
    setStopTheTimer(false);
  }, [props.currentQuestionNo]);

  const handleSubmitAnswer = (answer) => {
    setChosenAnswer(answer);
    setStopTheTimer(true);
    setSelectedOptionClass(`${classes.option} ${classes.active}`);
    setTimeout(() => {
      setSelectedOptionClass(
        answer.isCorrect
          ? `${classes.option} ${classes.correct}`
          : `${classes.option} ${classes.wrong}`
      );

      setTimeout(() => {
        answer.isCorrect ? correctSound() : wrongSound();
        // wait again for 3s animation blinking to finish and 1 s for sound
        setTimeout(() => {
          props.isAnswerCorrect(answer.isCorrect);
        }, 1000);
      }, 3000);
    }, 3000);
  };

  return (
    <>
      <Timer
        className={classes.timerContainer}
        questionNo={props.currentQuestionNo}
        onTimeOver={props.onTimeOver}
        stopTimer={stopTheTimer}
      />

      <div className={classes.questionContainer}>
        <span className={classes.question}>{questionData.question}</span>

        <div className={classes.options}>
          {questionData.options.map((option, index) => (
            <div
              key={index}
              className={
                chosenAnswer === option ? selectedOptionClass : classes.option
              }
              onClick={() => handleSubmitAnswer(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
