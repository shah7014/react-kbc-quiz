import React, { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const Timer = (props) => {
  const [timeRem, setTimeRem] = useState(30);

  // console.log("timer load");

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setTimeRem((prev) => prev - 1);
  //   }, 1000);
  //   return () => {
  //     if (timeRem === 0) {
  //       clearTimeout(timerId);
  //       // props.onTimeOver();
  //     }
  //   };
  // }, [timeRem, props]);

  return (
    <div className={`${props.className} ${classes.timerContainer}`}>
      <div className={classes.timer}>{timeRem}</div>
    </div>
  );
};

export default Timer;
