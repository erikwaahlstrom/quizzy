import { render, screen } from "@testing-library/react";
import QuizContainer from "./QuizContainer";
// import { render } from "@testing-library/react";

it("QuizComponent renders", () => {
  render(<QuizContainer />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
