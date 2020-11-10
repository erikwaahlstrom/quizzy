import React from "react";
import { Span } from "../elements";

export const ScoreBoard = ({ newArray, score, unanswered }) => {
  return (
    <>
      <h3>
        You answered the correct answer <Span>{score}</Span> times.
      </h3>
      <h3>
        You answered the wrong answer <Span>{newArray.length - score} </Span>
        times.
      </h3>
      <h3>
        Number of unanswered questions <Span>{unanswered}</Span>
      </h3>
    </>
  );
};
