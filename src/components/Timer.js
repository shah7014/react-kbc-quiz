import React, { useEffect, useState } from "react";
import classes from "./Timer.module.css";

const Timer = ({ className, questionNo, onTimeOver }) => {
  const [timeRem, setTimeRem] = useState(20);

  useEffect(() => {
    setTimeRem(20);
  }, [questionNo]);

  useEffect(() => {
    let timerId;
    if (timeRem === 0) {
      onTimeOver();
    } else {
      timerId = setTimeout(() => {
        setTimeRem((prev) => prev - 1);
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [timeRem, onTimeOver]);

  return (
    <div className={`${className} ${classes.timerContainer}`}>
      <div className={classes.timer}>{timeRem}</div>
    </div>
  );
};

export default Timer;
