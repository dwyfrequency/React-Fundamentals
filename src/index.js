import React from "react";
import ReactDOM from "react-dom";
// npm i react-router-dom
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import AddAuthorForm from "./AddAuthorForm";
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

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ""
  };
}

let state = resetState();

// answer is the title from the selected book div
function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some(book => book === answer);
  state.highlight = isCorrect ? "correct" : "wrong";
  // once the state is updated, rerender the dom
  render();
}

function App() {
  return (
    <AuthorQuiz
      {...state}
      onAnswerSelected={onAnswerSelected}
      onContinue={() => {
        state = resetState();
        render();
      }}
    />
  );
}

// withRouter: func that allows us to give components access to history
const AuthorWrapper = withRouter(({ history }) => {
  // wrapper func allows us to specify props
  return (
    <AddAuthorForm
      onAddAuthor={author => {
        authors.push(author);
        // here, we push a new path which will be the root of the app here
        history.push("/");
      }}
    />
  );
});

// wrapped ReactDOM.render with our own render function so we could rerender when the answer was selected
function render() {
  ReactDOM.render(
    <BrowserRouter>
      {/* B/c Router may only have one child element, we wrap them in a single parent
      React.Fragment: allows us to group components into a single parent. It also does not add any additional elements to the dom. If we had tried this without, we would need to have added a div to satify the react requirement */}
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route exact path="/add" component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
render();
registerServiceWorker();
