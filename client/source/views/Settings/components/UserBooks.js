"use strict";

import * as React from "react";
import remove from "../../../images/remove.svg";
import save from "../../../images/save.svg";

class UserBooks extends React.Component {
  constructor(props) {
    super(props);
    this.onBooksDelete = this.onBooksDelete.bind(this);
  }
  onBooksDelete(event) {
    this.props.onBooksDelete(event.target.id);
  }
  render() {
    const bookList = this.props.books.map((book, index) => {
      return (
        <tr className="user-book" key={ index }>
          <td>
            <img className="user-book-image" src={ book.image } alt={ book.title } />
            { this.props.editBooks ?
              (!this.props.edits[index].remove &&
              <div>
                <div className="user-book-svg top-layer" id={ index } onClick={ this.onBooksDelete } ></div>
                <div className="user-book-svg bottom-layer save" dangerouslySetInnerHTML={{ __html: save }}></div>
              </div>)
              ||
              <div>
                <div className="user-book-svg top-layer" id={ index } onClick={ this.onBooksDelete } ></div>
                <div className="user-book-svg bottom-layer remove" dangerouslySetInnerHTML={{ __html: remove }}></div>
              </div>
              : null }
          </td>
          <td>{ book.title }</td>
          <td><i>{ book.authors }</i></td>
          <td>{ book.available ? "Yes" : "No" }</td>
        </tr>
      );
    });
    if (bookList.length) {
      return (
        <div className="user-books">
          <table>
            <thead>
            <tr className="user-book">
              <th>Cover</th>
              <th>Title</th>
              <th>Authors</th>
              <th>Available</th>
            </tr>
            </thead>
            <tbody>
            { bookList }
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h3>You&#39;ve yet to add books to your collection</h3>
    }
  }
}

/*

*/

export default UserBooks
