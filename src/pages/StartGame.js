import React from "react";
import classes from "./StartGame.module.css";

const StartGame = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.userForm}>
        <input
          type="text"
          placeholder="enter your name"
          className={classes.userName}
        />
        <button className={classes.startBtn} onClick={props.onPlayGame}>
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
