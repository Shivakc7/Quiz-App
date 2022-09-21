import React, { useState, useEffect } from "react";

const Trivia = ({
  questions,
  setStopTime,
  setQuestionNumber,
  questionNumber,
}) => {
  console.log(questions);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("");

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
  }, [questions, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () =>
      {
        if(a.correct){
          setQuestionNumber(prev => prev + 1)
          setSelectedAnswer(null)
        }else{
          setStopTime(true)
        }
      }
    );
  };

  return (
    <div className="trivia">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((options) => (
          <div
            key={options.text}
            className={selectedAnswer === options ? className : "answer"}
            onClick={() => handleClick(options)}
          >
            {options.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
