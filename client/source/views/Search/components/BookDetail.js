"use strict";

import * as React from "react";

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.onAddBook = this.onAddBook.bind(this);
  }
  onAddBook() {
    this.props.onAddBook();
  }
  render() {
    const book = this.props.book;
    if (book) {
      return (
        <div className="book-detail">
          <p><b>{ this.props.book.title }</b></p>
          <p><i>{ this.props.book.authors }</i></p>
          <p>ISBN { this.props.book.isbn }</p>
          <p>{ this.props.book.pages } pages</p>
          <button onClick={ this.onAddBook }>Add to Library</button>
          <p>{ this.props.book.description }</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BookDetail
