import * as React from "react";
import { Link } from "react-router";

class ShowBooks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const books = this.props.books.map((book, index) => {
      return (
        <Link to={ `/browse/${ book.id }` } className="book-entry" key= { index } >
          <img className="book-image" src={ book.image } alt={ book.title }/>
          <p><b>{ book.title }</b></p>
          <p><i>{ book.authors }</i></p>
        </Link>
      );
    });
    return (
      <div className="search-container">
        <div className="search-results">
          { books }
        </div>
      </div>
    );
  }
}

export default ShowBooks
