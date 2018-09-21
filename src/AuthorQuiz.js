import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Hero() {
  return (
    <div className="row">
      {/* col-10: says it should be 10 cols wide out of the possible 10,
      offset-1: offset from the left 1 column   */}
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written</p>
      </div>
    </div>
  );
}

function Turn() {
  return <div />;
}

function Continue(params) {
  return <div />;
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
      </div>
    );
  }
}

export default AuthorQuiz;
