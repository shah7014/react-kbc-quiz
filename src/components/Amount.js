import React from "react";
import classes from "./Amount.module.css";
import prizes from "../assets/prizes";

const Amount = (props) => {
  const activeQuestionNo = props.currentQuestionNo;

  return (
    <ul className={classes.amountsList}>
      {prizes.map((prize, index) => (
        <li
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

export default Amount;
