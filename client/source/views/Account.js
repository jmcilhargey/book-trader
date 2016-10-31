"use strict";

import * as React from "react";
import fetch from "isomorphic-fetch";
import SearchForm from "../components/searchform";
import BookGrid from "../components/bookgrid";

class Account extends React.Component {

  constructor() {
    super();
    this.state = { search: [], books: [] }
    this.handleBookRequest = this.handleBookRequest.bind(this);
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
      .then((json) => this.setState({ books: json }))
  }
  render() {
    console.log(localStorage);
    const search = this.state.search;
    const books = this.state.books;
    return (
      <div className="account-container">
        <h1>My Books</h1>
        <SearchForm onChange={ this.handleBookRequest }/>
        <BookGrid books={ search }/>
        <h1>Available Books</h1>
        <BookGrid books={ books }/>
      </div>
    );
  }
}

export default Account
