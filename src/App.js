import { useState } from "react";
import classes from "./App.module.css";
import Amount from "./components/Amount";
import Question from "./components/Question";
import questions from "./assets/questions";

function App() {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  const question = questions[currentQuestionNo];

  const handleSubmitAnswer = (answer) => {
    const correctAnswerNo = questions[currentQuestionNo].correctAnswer;
    const correctAnswer = questions[currentQuestionNo][correctAnswerNo];
    if (answer !== correctAnswer) {
      // end the game
    }
    if (correctAnswer === answer) {
      if (currentQuestionNo !== questions.length - 1) {
        setCurrentQuestionNo((prev) => prev + 1);
      } else {
        // end the game
      }
    }
  };

  return (
    <div className={classes.container}>
      <Question question={question} onAnswerSubmit={handleSubmitAnswer} />
      <Amount />
    </div>
  );
}

export default App;
