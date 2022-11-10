import React, { useEffect, useRef, useState } from "react";
import classes from "./Question.module.css";
import Timer from "./Timer";

const Question = (props) => {
  const question = props.question;

  const op1Ref = useRef();
  const op2Ref = useRef();
  const op3Ref = useRef();
  const op4Ref = useRef();

  const handleSubmitAnswer = (answer, selectedDivRef) => {
    const correctAnswer = question[question.correctAnswer];
    if (answer === correctAnswer) {
      selectedDivRef.current.classList.add(classes.correct);
    } else {
      selectedDivRef.current.classList.add(classes.wrong);
    }
    props.isAnswerCorrect(answer);
  };

  // useEffect(() => {
  //   for (let ref of [op1Ref, op2Ref, op3Ref, op4Ref]) {
  //     ref.current.classList.remove(classes.correct);
  //     ref.current.classList.remove(classes.wrong);
  //   }
  // }, [op1Ref, op2Ref, op3Ref, op4Ref]);

  return (
    <div className={classes.container}>
      {/* <Timer onTimeOver={props.onTimeOver} /> */}
      <Timer className={classes.timerContainer} />

      <div className={classes.questionContainer}>
        <span className={classes.question}>{question.question}</span>

        <div className={classes.options}>
          <div
            className={`${classes.option}`}
            ref={op1Ref}
            onClick={() => handleSubmitAnswer(question.op1, op1Ref)}
          >
            {question.op1}
          </div>
          <div
            className={classes.option}
            ref={op2Ref}
            onClick={() => handleSubmitAnswer(question.op2, op2Ref)}
          >
            {question.op2}
          </div>
          <div
            className={classes.option}
            ref={op3Ref}
            onClick={() => handleSubmitAnswer(question.op3, op3Ref)}
          >
            {question.op3}
          </div>
          <div
            className={classes.option}
            ref={op4Ref}
            onClick={() => handleSubmitAnswer(question.op4, op4Ref)}
          >
            {question.op4}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
