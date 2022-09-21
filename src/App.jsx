import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import { moneylist, questions } from "./data";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stopTime, setStopTime] = useState(false);
  const [earn, setEarn] = useState("$ 0");

  // const moneypyramid = useMemo(() => {
  //   moneylist
  // },[])
  useEffect(() => {
    questionNumber > 1 &&
      setEarn(
        moneylist.find((money) => money.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stopTime ? (
          <h1 className="earnText">You earned : {earn} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivia
                questions={questions}
                setStopTime={setStopTime}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneylist.map((money) => (
            <li
              key={money.id}
              className={
                questionNumber === money.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListNumber">{money.id}</span>
              <span className="moneyListAmount">{money.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
