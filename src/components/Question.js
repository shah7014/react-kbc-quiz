import React, { useEffect, useState } from "react";
import questions from "../assets/questions";
import classes from "./Question.module.css";
import Timer from "./Timer";

const Question = (props) => {
  const questionData = questions[props.currentQuestionNo];

  const [chosenAnswer, setChosenAnswer] = useState(null);

  const [selectedOptionClass, setSelectedOptionClass] = useState(
    classes.option
  );

  useEffect(() => {
    setChosenAnswer(null);
    setSelectedOptionClass(classes.option);
  }, [props.currentQuestionNo]);

  const handleSubmitAnswer = (answer) => {
    setChosenAnswer(answer);
    setSelectedOptionClass(`${classes.option} ${classes.active}`);
    setTimeout(() => {
      setSelectedOptionClass(
        answer.isCorrect
          ? `${classes.option} ${classes.correct}`
          : `${classes.option} ${classes.wrong}`
      );

      // props.isAnswerCorrect(answer.isCorrect);
    }, 3000);
  };

  return (
    <div className={classes.container}>
      {/* <Timer onTimeOver={props.onTimeOver} /> */}
      <Timer className={classes.timerContainer} />

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
    </div>
  );
};

export default Question;
