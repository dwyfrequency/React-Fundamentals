import React from "react";
import ReactDOM from "react-dom";
// npm install --save-dev enzyme enzyme-adapter-react-16
// used to perform a shallow rendering of the enzyme component
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// run test using npm test

// import AuthorQuiz from "./AuthorQuiz";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<AuthorQuiz />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// this uses jest a facebook project
function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(20180919);

// run test using npm test
describe("When setting up testing", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

  // it func - where we make an assertion about what we are expecting and then implement that in code
  // to group tests, you wrap them in a describe func - where we dictate the set of tests
  it("should fail", () => {
    // we are testing the assertion that result will not be null ie. does result have a value
    expect(result).not.toBeNull();
    // it("should fail", () => {
    //   expect(1 + 1).toBe(3); // this will fail
  });

  it("is a h1", () => {
    expect(result.type).toBe("h1");
  });

  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe("When testing with ReactDOM", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment.toISOString()} />, div);
  });
});

// Must configure Enzyme
Enzyme.configure({ adapter: new Adapter() });

describe("When testing with Enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("contains Hello at", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
  });
});
