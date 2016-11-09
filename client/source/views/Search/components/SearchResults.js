"use strict";

import * as React from "react";
import BookDetail from "./bookdetail";

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.showDetail = this.showDetail.bind(this);
    this.state = { book: null, index: null };
    this.onAddBook = this.onAddBook.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({ book: null, index: null });
  }
  showDetail(index, event) {
    this.setState({ book: this.props.books[index], index: index });
  }
  onAddBook() {
    this.props.onAddBook(this.state.index);
  }
  render() {
    const books = this.props.books.map((book, index) => {
      return (
        <div className="book-entry" key= { index } onClick={ this.showDetail.bind(this, index) }>
          <img className="book-image" src={ book.image } alt={ book.title }/>
          <p><b>{ book.title }</b></p>
          <p><i>{ book.authors }</i></p>
        </div>
      );
    });
    return (
      <div className="search-container">
        <BookDetail book={ this.state.book } onAddBook={ this.onAddBook }/>
        <div className="search-results">
          { books }
        </div>
      </div>
    );
  }
}

export default SearchResults
