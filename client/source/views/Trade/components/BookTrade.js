"use strict";

import * as React from "react";
import { browserHistory } from "react-router";
import ErrorMessage from "./errormessage";
import SuccessMessage from "./successmessage";

class BookTrade extends React.Component {
  constructor(props) {
    super(props);
    this.onProposeTrade = this.onProposeTrade.bind(this);
  }
  onProposeTrade() {
    this.props.onProposeTrade();
  }
  render() {
    const trade = this.props.trade;
    const active = this.props.active;
    if (trade) {
      return (
        <div>
          <div className="trade-info">
            <img className="trade-image" src={ trade.image } alt={ trade.title }/>
            <div className="trade-detail">
              <p><b>{ trade.title }</b></p>
              <p><i>{ trade.authors }</i></p>
              <p>ISBN { trade.isbn }</p>
              <p>{ trade.pages } pages</p>
              <p>Owner: { trade.owner }</p>
              { active ? null : <button className="propose-button" onClick={ this.onProposeTrade }>Propose Trade</button> }
              <button className="back-button" onClick={ browserHistory.goBack }>Back</button>
              <ErrorMessage errors={ this.props.errors } />
              <SuccessMessage success={ this.props.success } />
            </div>
          </div>
          <p>{ trade.description }</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BookTrade
