import React, { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const Timer = ({ className, questionNo, onTimeOver, stopTimer }) => {
  const [timeRem, setTimeRem] = useState(20);

  useEffect(() => {
    setTimeRem(20);
  }, [questionNo]);

  useEffect(() => {
    let timerId;
    if (!stopTimer) {
      if (timeRem === 0) {
        onTimeOver();
      } else {
        timerId = setInterval(() => {
          setTimeRem((prev) => prev - 1);
        }, 1000);
      }
    }

    return () => clearInterval(timerId);
  }, [timeRem, onTimeOver, stopTimer]);

  return (
    <div className={`${className} ${classes.timerContainer}`}>
      <div className={classes.timer}>{timeRem}</div>
    </div>
  );
};

export default Timer;
