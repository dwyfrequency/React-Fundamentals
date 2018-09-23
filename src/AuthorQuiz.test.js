import React from "react";
import ReactDOM from "react-dom";
// npm install --save-dev enzyme enzyme-adapter-react-16
// used to perform a shallow rendering of the enzyme component
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthorQuiz from "./AuthorQuiz";

Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    books: [
      "The Shining",
      "IT",
      "David Copperfield",
      "A Tale of Two Cities",
      "Hamlet",
      "Macbeth",
      "Romeo and Juliet"
    ],
    author: {
      name: "Charles Dickens",
      imageUrl: "images/authors/charlesdickens.jpg",
      imageSource: "Wikimedia Commons",
      books: ["David Copperfield", "A Tale of Two Cities"]
    }
  },
  highlight: "none"
};

// run test using npm test
describe("Author Quiz", () => {
  it("component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={() => {}} />, div);
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      // render AuthorQuiz component before test
      wrapper = mount(<AuthorQuiz {...state} onAnswerSelected={() => {}} />);
      console.log(wrapper);
    });
    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        ""
      );
    });
  });

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      // render AuthorQuiz component before test
      wrapper = mount(
        <AuthorQuiz
          {...Object.assign({}, state, { highlight: "wrong" })}
          onAnswerSelected={() => {}}
        />
      );
    });
    it("should have a red background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "red"
      );
    });
  });

  describe("When the correct answer has been selected", () => {
    let wrapper;
    beforeAll(() => {
      // render AuthorQuiz component before test
      wrapper = mount(
        <AuthorQuiz
          {...Object.assign({}, state, { highlight: "correct" })}
          onAnswerSelected={() => {}}
        />
      );
    });
    it("should have a green background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "green"
      );
    });
  });

  describe("When the first answer is selected", () => {
    let wrapper;
    // jest.fn - creates a mock function
    const handleAnswerSelected = jest.fn();
    beforeAll(() => {
      // render AuthorQuiz component before test
      wrapper = mount(
        <AuthorQuiz {...state} onAnswerSelected={handleAnswerSelected} />
      );
      wrapper
        .find(".answer")
        .first()
        .simulate("click");
    });

    it("onAnswerSelected should be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled();
    });

    it("should receive The Shining", () => {
      // called with the shining b/c it is the first book in the array
      expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
    });
  });
});
