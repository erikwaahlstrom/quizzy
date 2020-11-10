import React from "react";
import App from "./App";
import OptionComponent from "./components/OptionComponent";
import { shallow } from "enzyme";

const hidden = [{}];

describe("handleAnswerOptionClick", () => {
  it("renders App Component correctly", () => {
    shallow(<App />);
  });
  it("renders OptionComponent Component correctly", () => {
    shallow(<OptionComponent />);
  });
});
