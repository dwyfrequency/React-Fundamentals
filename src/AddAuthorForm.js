import React from "react";
import "./AddAuthorForm.css";

function AddAuthorForm({ match }) {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <form>
        <div className="AddAuthorForm__input">
          {/* b/c js uses for as a reserved word, we need to make the jsx label htmlFor */}
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
      </form>
      {/* <p>{JSON.stringify(match)}</p> */}
    </div>
  );
}

export default AddAuthorForm;
