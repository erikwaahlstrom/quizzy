import React from "react";
import { Button } from "../elements";

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
        <Button
          small
          onClick={() => spliceWrongAnswers(newArray[currentQuestion])}
        >
          Lifeline 50/50
        </Button>
      ) : null}
    </>
  );
};
