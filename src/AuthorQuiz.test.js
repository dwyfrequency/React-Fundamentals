import React from "react";
// import ReactDOM from "react-dom";
// import AuthorQuiz from "./AuthorQuiz";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<AuthorQuiz />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// run test using npm test
// this uses jest a facebook project
function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(20180919);

describe("When setting up testing", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

  it("should fail", () => {
    expect(result).not.toBeNull();
    // it("should fail", () => {
    //   expect(1 + 1).toBe(3); // this will fail
  });
});
