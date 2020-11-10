import React from "react";
import { Option, Button } from "../elements";

export const OptionComponent = ({
  index,
  hidden,
  answerOption,
  handleAnswerOptionClick,
}) => {
  return (
    <>
      <Option key={index} hidden={hidden.includes(answerOption) ? false : true}>
        <Button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
          {answerOption.option}
        </Button>
      </Option>
    </>
  );
};
