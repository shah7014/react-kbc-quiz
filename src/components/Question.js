import React, { useRef } from "react";
import classes from "./Question.module.css";
import Timer from "./Timer";

const Question = (props) => {
  const question = props.question;

  const op1Ref = useRef();
  const op2Ref = useRef();
  const op3Ref = useRef();
  const op4Ref = useRef();

  const handleSubmitAnswer = (answer, selectedDivRef) => {
    console.log(selectedDivRef.current.classList);
    selectedDivRef.current.classList.add(classes.blinking);
    setTimeout(() => {
      props.onAnswerSubmit(answer);
    }, 3000);
  };

  return (
    <div className={classes.container}>
      {/* <Timer onTimeOver={props.onTimeOver} /> */}
      <span className={classes.question}>{question.question}</span>
      <div className={classes.options}>
        <div
          className={classes.option}
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
  );
};

export default Question;
