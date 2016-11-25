"use strict";

import * as React from "react";
import { browserHistory } from "react-router";

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: null };
    this.handleCheck = this.handleCheck.bind(this);
    this.onSendTrade = this.onSendTrade.bind(this);
  }
  handleCheck(event) {
    const index = event.target.value;
    this.setState({ checked: index });
  }
  onSendTrade(event) {
    event.preventDefault();
    this.props.onSendTrade(this.state.checked);
  }
  render() {
    const books = this.props.books;
    if (books) {
      const entries = books.map((book, index) => {
        return (
          <div className="trade-checkbox" key={ index }>
            <input type="radio" name="options" value={ index } id={ index } onChange={ this.handleCheck } />
            <label htmlFor={ index }>{ book.title }</label>
          </div>
        );
      })
      return (
        <div className="trade-form">
          <p><b>Select Book(s)</b></p>
          <form onSubmit={ this.onSendTrade }>
            { entries }
            <input className="trade-button" type="submit" value="Send Trade" />
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TradeForm
