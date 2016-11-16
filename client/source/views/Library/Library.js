"use strict";

import * as React from "react";
import fetch from "isomorphic-fetch";
import ShowBooks from "./components/showbooks";

class Library extends React.Component {
  constructor() {
    super();
    this.getAvailableBooks = this.getAvailableBooks.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.state = { books: [] };
  }
  getAvailableBooks() {
    fetch("/api/library", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "same-origin"
    }).then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ books: json });
      });
  }
  componentWillMount() {
    this.getAvailableBooks();
  }
  render() {
    return (
      <div className="library-container">
        <h1>Find a Book to Trade</h1>
        <ShowBooks books={ this.state.books } />
      </div>
    );
  }
}

export default Library
