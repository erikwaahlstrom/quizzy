import React from "react";
import { Option, Button } from "../elements";

const OptionComponent = ({
  index,
  hidden,
  answerOption,
  handleAnswerOptionClick,
}) => {
  return (
    <>
      <Option key={index} hidden={hidden.includes(answerOption) ? false : true}>
        <Button
          data-testid="button"
          onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
        >
          {answerOption.option}
        </Button>
      </Option>
    </>
  );
};

export default OptionComponent;
