import React from "react";
import classes from "./Question.module.css";

const Question = (props) => {
  const question = props.question;

  const handleSubmitAnswer = (answer) => {
    props.onAnswerSubmit(answer);
  };

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span className={classes.question}>{question.question}</span>
        <div className={classes.options}>
          <div
            className={classes.option}
            onClick={() => handleSubmitAnswer(question.op1)}
          >
            {question.op1}
          </div>
          <div
            className={classes.option}
            onClick={() => handleSubmitAnswer(question.op2)}
          >
            {question.op2}
          </div>
          <div
            className={classes.option}
            onClick={() => handleSubmitAnswer(question.op3)}
          >
            {question.op3}
          </div>
          <div
            className={classes.option}
            onClick={() => handleSubmitAnswer(question.op4)}
          >
            {question.op4}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
