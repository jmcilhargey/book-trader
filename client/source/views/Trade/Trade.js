"use strict";

import * as React from "react";
import { browserHistory } from "react-router";
import BookTrade from "./components/booktrade";
import TradeForm from "./components/tradeform";

class Trade extends React.Component {
  constructor() {
    super();
    this.state = { trade: null, books: null, active: false, errors: [], success: [] };
    this.getBookData = this.getBookData.bind(this);
    this.getUserBooks = this.getUserBooks.bind(this);
    this.handleTradeRequest = this.handleTradeRequest.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  getBookData() {
    fetch(`/api/book/${ this.props.params.id }`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "same-origin"
    }).then((response) => response.json())
      .then((json) => {
        this.setState({ trade: json });
      });
  }
  getUserBooks() {
    fetch("/api/settings", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Access-Token": localStorage.token
      },
      credentials: "same-origin"
    }).then((response) => response.json())
      .then((json) => {
        if (json.error) {
          this.setState({ errors: new Array(json.message)});
        } else if (json.username === this.state.trade.owner) {
          this.setState({ errors: ["Can't trade own books"] });
        } else {
          this.setState({ books: json.books, active: true });
        }
    });
  }
  handleTradeRequest(index) {
    if (index) {
      const trade = this.state.trade;
      const offer = this.state.books[index];
      fetch("/api/trade", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Access-Token": localStorage.token
        },
        credentials: "same-origin",
        body: `trade=${ encodeURIComponent(JSON.stringify(trade)) }&offer=${ encodeURIComponent(JSON.stringify(offer)) }&index=${ index }`
      }).then((response) => response.json())
        .then((json) => {
          if (json.error) {
            this.setState({ errors: new Array(json.message) });
          } else {
            this.setState({ success: json.success });
          }
      });
    }
  }
  componentWillMount() {
    this.getBookData();
  }
  render() {
    return (
      <div className="trade-container">
        <BookTrade
        trade={ this.state.trade }
        active={ this.state.active }
        onProposeTrade={ this.getUserBooks }
        errors={ this.state.errors }
        success={ this.state.success } />

        <TradeForm
        books={ this.state.books }
        onSendTrade={ this.handleTradeRequest } />
      </div>
    );
  }
}

export default Trade
