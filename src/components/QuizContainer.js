import React, { useState, useEffect } from "react";
// Components
import { CounterComponent } from "../components";
// Elements
import { HeaderOne, Wrapper, OptionsWrapper, Option } from "../elements";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { option: "New York", isCorrect: false },
      { option: "London", isCorrect: false },
      { option: "Paris", isCorrect: true },
      { option: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { option: "Jeff Bezos", isCorrect: false },
      { option: "Elon Musk", isCorrect: true },
      { option: "Bill Gates", isCorrect: false },
      { option: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { option: "Apple", isCorrect: true },
      { option: "Intel", isCorrect: false },
      { option: "Amazon", isCorrect: false },
      { option: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { option: "1", isCorrect: false },
      { option: "4", isCorrect: false },
      { option: "6", isCorrect: false },
      { option: "7", isCorrect: true },
    ],
  },
];

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
console.log(newArray);

////////////////////////////////////////////////////////////
////////// QuizContainer Component /////////////////////////
////////////////////////////////////////////////////////////
export const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // Counter
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((counter) => counter + 1),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  // Event handlers
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    nextQuestion < newArray.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScore(true);
  };

  const nextQuestion = () => {
    setCounter(0);
  };

  return (
    <Wrapper>
      <HeaderOne>QuizContainer</HeaderOne>
      <CounterComponent counter={counter} />
      {showScore ? (
        <p>
          You scored {score} out of {newArray.length}
        </p>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1}/{newArray.length}
          </p>

          <p>{newArray[currentQuestion].questionText}</p>

          <OptionsWrapper>
            {newArray[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <Option key={index}>
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.option}
                  </button>
                </Option>
              )
            )}
          </OptionsWrapper>
          <button onClick={nextQuestion}>Skip</button>
        </>
      )}
    </Wrapper>
  );
};
