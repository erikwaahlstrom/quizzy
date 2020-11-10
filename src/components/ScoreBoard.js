import React from "react";

export const ScoreBoard = ({ newArray, score, unanswered }) => {
  return (
    <>
      <p>
        You scored {score} out of {newArray.length}
      </p>
      <p>Number of unanswered questions: {unanswered}</p>
    </>
  );
};
