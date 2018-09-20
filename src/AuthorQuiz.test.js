import React from "react";
import ReactDOM from "react-dom";
// npm install --save-dev enzyme enzyme-adapter-react-16
// used to perform a shallow rendering of the enzyme component
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthorQuiz from "./AuthorQuiz";

// run test using npm test
describe("Author Quiz", () => {
  it("component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  });
});
