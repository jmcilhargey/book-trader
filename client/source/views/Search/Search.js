"use strict";

import * as React from "react";
import fetch from "isomorphic-fetch";
import SearchForm from "./components/searchform";
import BookSearch from "./components/booksearch";

class Search extends React.Component {

  constructor() {
    super();
    this.state = { books: [] }
    this.handleBookRequest = this.handleBookRequest.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this)
  }
  handleBookRequest(value) {
    if (!value.length) { return; }
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "same-origin",
      body: `search=${ value }`
    }).then((response) => response.json())
      .then((json) => this.setState({ books: json }));
  }
  handleAddBook(index) {
    console.log(JSON.stringify(this.state.books[index]));
    fetch("/api/add", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Access-Token": localStorage.token
      },
      credentials: "same-origin",
      body: `book=${ encodeURIComponent(JSON.stringify(this.state.books[index])) }`
    }).then((response) => response.json())
      .then((json) => console.log(json));
  }
  render() {
    return (
      <div className="account-container">
        <h1>Find Books</h1>
        <SearchForm onChange={ this.handleBookRequest }/>
        <BookSearch books={ this.state.books } onAddBook={ this.handleAddBook }/>
      </div>
    );
  }
}

export default Search
