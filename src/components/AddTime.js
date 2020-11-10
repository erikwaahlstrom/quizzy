import React from "react";
import { Button } from "../elements";

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
        <Button small onClick={() => handleAddTime(newArray[currentQuestion])}>
          Give me more time +10s
        </Button>
      ) : null}
    </>
  );
};
