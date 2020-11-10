import React, { useState, useEffect } from "react";
// Components
import {
  CounterComponent,
  FiftyFifty,
  AddTime,
  ScoreBoard,
  OptionComponent,
} from "../components";
// Elements
import { HeaderOne, Wrapper, OptionsWrapper, Button } from "../elements";
// Questions
import questions from "../data/questions.json";

const arrayShuffle = function (arr) {
  let newPos, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp;
  }
  return arr;
};

const newArray = arrayShuffle(questions);

export const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [unanswered, setUnanswered] = useState(0);
  // Counter
  const [counter, setCounter] = useState(5);
  // Timer
  const [timeup, setTimeup] = useState(false);
  // Lifelines
  const [fifty, setFifty] = useState(true);
  const [addtime, setAddTime] = useState(true);
  // Show answers
  const [hidden, setHidden] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 1) {
        clearInterval(interval);
        setTimeup(true);
      } else {
        setCounter((counter) => counter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  // Event handlers
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (isCorrect === undefined) {
      setUnanswered(unanswered + 1);
    }

    const nextQuestion = currentQuestion + 1;
    nextQuestion < newArray.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScore(true);
    setCounter(5);
    setTimeup(false);
  };

  const nextQuestion = () => {
    handleAnswerOptionClick();
    setCounter(5);
  };

  const spliceWrongAnswers = (toSplice) => {
    const options = toSplice.answerOptions;
    const randomNumbers = [];
    let indexOfAnswer;

    options.forEach((option, index) => {
      if (option.isCorrect) {
        indexOfAnswer = index;
      }
    });

    let count = 0;
    do {
      const randomNumber = Math.round(Math.random() * 3);
      if (randomNumber !== indexOfAnswer) {
        if (
          randomNumbers.length < 2 &&
          !randomNumbers.includes(randomNumber) &&
          !randomNumbers.includes(indexOfAnswer)
        ) {
          randomNumbers.push(randomNumber);
          count++;
        } else {
          while (true) {
            const newRandomNumber = Math.round(Math.random() * 3);
            if (
              !randomNumbers.includes(newRandomNumber) &&
              newRandomNumber !== indexOfAnswer
            ) {
              randomNumbers.push(newRandomNumber);
              count++;
              break;
            }
          }
        }
      }
    } while (count < 2);

    const removeOptions = [];
    options.forEach((option, index) => {
      if (randomNumbers.includes(index)) {
        removeOptions.push(option);
        setHidden(removeOptions);
      }
    });

    setFifty(false);
  };

  const handleAddTime = () => {
    setCounter(counter + 10);
    setAddTime(false);
  };

  return (
    <Wrapper>
      <HeaderOne>Quizzy</HeaderOne>
      <FiftyFifty
        spliceWrongAnswers={spliceWrongAnswers}
        fifty={fifty}
        timeup={timeup}
        currentQuestion={currentQuestion}
        newArray={newArray}
      />
      <AddTime
        handleAddTime={handleAddTime}
        addtime={addtime}
        timeup={timeup}
        currentQuestion={currentQuestion}
        newArray={newArray}
      />

      {showScore ? (
        <ScoreBoard score={score} newArray={newArray} unanswered={unanswered} />
      ) : (
        <>
          {timeup ? (
            <>
              <h1>Time is up</h1>
              <Button onClick={nextQuestion}>Next</Button>
            </>
          ) : (
            <>
              <CounterComponent counter={counter} />

              <p>
                Question {currentQuestion + 1}/{newArray.length}
              </p>

              <p>{newArray[currentQuestion].questionText}</p>

              <OptionsWrapper>
                {newArray[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <OptionComponent
                      key={index}
                      index={index}
                      hidden={hidden}
                      answerOption={answerOption}
                      handleAnswerOptionClick={handleAnswerOptionClick}
                    />
                  )
                )}
              </OptionsWrapper>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};
