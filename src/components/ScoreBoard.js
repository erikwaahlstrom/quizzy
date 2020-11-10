import React from "react";
import { Span } from "../elements";

export const ScoreBoard = ({ newArray, score, unanswered }) => {
  return (
    <>
      <h3>
        You answered the correct answer <Span>{score}</Span> times out of
        <Span> {newArray.length}</Span>
      </h3>
      <h3>
        Number of unanswered questions: <Span>{unanswered}</Span>
      </h3>
    </>
  );
};
