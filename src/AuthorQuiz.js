import React from "react";
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

function Book({ title, onClick }) {
  return (
    <div className="answer" onClick={() => onClick(title)}>
      <h4>{title}</h4>
    </div>
  );
}

function Turn({ author, books, highlight, onAnswerSelected }) {
  function highlightToBgColor(highlight) {
    const mapping = {
      none: "",
      correct: "green",
      wrong: "red"
    };
    return mapping[highlight];
  }

  return (
    <div
      className="row turn"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book title={title} key={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
}

function Continue(props) {
  return <div />;
}

function Footer(props) {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from a{" "}
          <a href="http://commons.wikimedia.org/wiki">link</a>
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
