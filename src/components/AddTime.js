import React from "react";

export const AddTime = ({
  handleAddTime,
  newArray,
  addtime,
  timeup,
  currentQuestion,
}) => {
  return (
    <>
      {addtime && !timeup ? (
        <button onClick={() => handleAddTime(newArray[currentQuestion])}>
          Give me more time +10s
        </button>
      ) : null}
    </>
  );
};
