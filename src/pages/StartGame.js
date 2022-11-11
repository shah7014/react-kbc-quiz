import React, { useRef } from "react";
import classes from "./StartGame.module.css";

const StartGame = (props) => {
  const nameRef = useRef();

  const clickHandler = () => {
    props.onPlayGame(nameRef.current.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.userForm}>
        <input
          type="text"
          placeholder="enter your name"
          className={classes.userName}
          ref={nameRef}
        />
        <button className={classes.startBtn} onClick={clickHandler}>
          Start
        </button>
      </div>
    </div>
  );
};

export default StartGame;
