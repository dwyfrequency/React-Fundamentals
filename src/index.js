import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import registerServiceWorker from "./registerServiceWorker";
import { shuffle } from "underscore";

const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktrain.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The Adventures of Huckleberry Finn",
      "Life On The Mississippi",
      "The Gilded Age"
    ]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function(accum, content, idx) {
    return accum.concat(content.books);
  }, []);
}

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById("root"));
registerServiceWorker();
