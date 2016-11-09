"use strict";

import * as React from "react";
import fetch from "isomorphic-fetch";
import SearchForm from "./components/searchform";
import SearchResults from "./components/searchresults";
import google from "../../images/google-dev.svg";

class Search extends React.Component {

  constructor() {
    super();
    this.state = { books: [] }
    this.handleBookRequest = this.handleBookRequest.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this)
  }
  handleBookRequest(value) {
    if (!value.length) { return; }
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "same-origin",
      body: `search=${ value }`
    }).then((response) => response.json())
      .then((json) => {
        this.setState({ books: json });
      });
  }
  handleAddBook(index) {
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
        <h1>Add Books to Library</h1>
        <SearchForm onChange={ this.handleBookRequest }/>
        <SearchResults books={ this.state.books } onAddBook={ this.handleAddBook }/>
        <p className="data-label">Data provided by <span dangerouslySetInnerHTML={{ __html: google }}></span> Google Books API</p>
      </div>
    );
  }
}

export default Search
