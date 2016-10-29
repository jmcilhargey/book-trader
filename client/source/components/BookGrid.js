"use strict";

import * as React from "react";

class BookGrid extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const books = this.props.books.map((book, index) => {
      return (
        <div className="book-entry" key= { index }>
          <img className="book-image" src={ book.image } alt={ book.title }/>
          <p><b>{ book.title }</b></p>
          <p><i>{ book.authors }</i></p>
        </div>
      );
    });
    return (
      <div className="grid-container">
        { books }
      </div>
    );
  }
}

export default BookGrid
