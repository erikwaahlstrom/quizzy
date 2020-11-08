import React, { useState, useEffect } from "react";
import { HeaderOne, Wrapper, OptionsWrapper, Option } from "../elements";

export const QuizContainer = () => {
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
    nextQuestion < questions.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScore(true);
  };

  const nextQuestion = () => {
    setCounter(0);
  };

  return (
    <Wrapper>
      <HeaderOne>QuizContainer</HeaderOne>
      <p>Counter {counter}</p>
      {showScore ? (
        <p>
          You scored {score} out of {questions.length}
        </p>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1}/{questions.length}
          </p>

          <p>{questions[currentQuestion].questionText}</p>

          <OptionsWrapper>
            {questions[currentQuestion].answerOptions.map(
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
