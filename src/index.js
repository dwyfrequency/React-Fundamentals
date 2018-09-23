import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import registerServiceWorker from "./registerServiceWorker";
import { shuffle, sample } from "underscore";

const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktwain.jpg",
    imageSource: "Wikimedia Commons",
    books: ["The Adventures of Huckleberry Finn"]
  },
  {
    name: "Joseph Conrad",
    imageUrl: "images/authors/josephconrad.png",
    imageSource: "Wikimedia Commons",
    books: ["Heart of Darkness"]
  },
  {
    name: "J.K. Rowling",
    imageUrl: "images/authors/jkrowling.jpg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Daniel Ogren",
    books: ["Harry Potter and the Sorcerers Stone"]
  },
  {
    name: "Stephen King",
    imageUrl: "images/authors/stephenking.jpg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Pinguino",
    books: ["The Shining", "IT"]
  },
  {
    name: "Charles Dickens",
    imageUrl: "images/authors/charlesdickens.jpg",
    imageSource: "Wikimedia Commons",
    books: ["David Copperfield", "A Tale of Two Cities"]
  },
  {
    name: "William Shakespeare",
    imageUrl: "images/authors/williamshakespeare.jpg",
    imageSource: "Wikimedia Commons",
    books: ["Hamlet", "Macbeth", "Romeo and Juliet"]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function(accum, content) {
    return accum.concat(content.books);
  }, []);

  // shuffle and sample come from underscore library
  // shuffle array and take the first four elements
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  // randomly pull an entry from the array
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    // returns the author - find has an t/f conditional that returns the data based on conditional. Some says whether the title exists at all in the array.
    // if true, we will pass that to find func, which will return the author obj
    author: authors.find(author => author.books.some(title => title === answer))
  };
}

const state = {
  turnData: getTurnData(authors),
  highlight: ""
};

// answer is the title from the selected book div
function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some(book => book === answer);
  state.highlight = isCorrect ? "correct" : "wrong";
  // once the state is updated, rerender the dom
  render();
}

// wrapped ReactDOM.render with our own render function so we could rerender when the answer was selected
function render() {
  ReactDOM.render(
    <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />,
    document.getElementById("root")
  );
}
render();
registerServiceWorker();
