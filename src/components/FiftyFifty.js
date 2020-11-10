import React from "react";

export const FiftyFifty = ({
  spliceWrongAnswers,
  newArray,
  fifty,
  timeup,
  currentQuestion,
}) => {
  return (
    <>
      {fifty && !timeup ? (
        <button onClick={() => spliceWrongAnswers(newArray[currentQuestion])}>
          Lifeline 50/50
        </button>
      ) : null}
    </>
  );
};
