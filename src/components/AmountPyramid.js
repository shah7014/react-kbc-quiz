import React from "react";
import classes from "./AmountPyramid.module.css";
import prizes from "../assets/prizes";

const AmountPyramid = (props) => {
  const activeQuestionNo = props.currentQuestionNo;

  return (
    <ul className={classes.amountsList}>
      {prizes.map((prize, index) => (
        <li
          key={index}
          className={`${classes.amount} ${
            activeQuestionNo === index ? classes.active : ""
          }`}
        >
          <span className={classes.index}>{index + 1}</span>
          <span className={classes.value}>{prize}</span>
        </li>
      ))}
    </ul>
  );
};

export default AmountPyramid;
