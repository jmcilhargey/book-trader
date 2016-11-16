"use strict";

import * as React from "react";
import trade from "../../../images/trade.svg";
import arrow from "../../../images/arrow.svg";

class UserTrades extends React.Component {
  constructor(props) {
    super(props);
    this.onCancelTrade = this.onCancelTrade.bind(this);
    this.onAcceptTrade = this.onAcceptTrade.bind(this);
    this.onDeclineTrade = this.onDeclineTrade.bind(this);
  }
  onCancelTrade(event) {
    this.props.onCancelTrade(event.target.name);
  }
  onAcceptTrade(event) {
    this.props.onAcceptTrade(event.target.name);
  }
  onDeclineTrade(event) {
    this.props.onDeclineTrade(event.target.name);
  }
  render() {
    const trades = this.props.trades.map((trade, index) => {
      return (
        <div key={ index }>
          <p><b>{ trade.offer.owner }</b> offers <b>{ trade.offer.title }</b> for <b>{ trade.trade.title }</b></p>
          <div className="book-container">
            <div className="user-book">
              <img className="user-book-image" src={ trade.offer.image } alt={ trade.offer.title } />
              <p>{ trade.offer.title }</p>
              <p><i>{ trade.offer.authors }</i></p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: arrow }}></div>
            <div className="user-book">
              <img className="user-book-image" src={ trade.trade.image } alt={ trade.trade.title } />
              <p>{ trade.trade.title }</p>
              <p><i>{ trade.trade.authors }</i></p>
            </div>
          </div>
          { trade.sent ?
          <div className="trade-buttons">
            <input className="cancel-button" type="button" name={ index } value="Cancel" onClick={ this.onCancelTrade } />
          </div> :
          <div className="trade-buttons">
            <input className="accept-button" type="button" name={ index } value="Accept" onClick={ this.onAcceptTrade } />
            <input className="decline-button" type="button" name={ index } value="Decline" onClick={ this.onDeclineTrade } />
          </div> }
        </div>
      );
    });
    return (
      <div>
        <div className="user-datum">
          <div dangerouslySetInnerHTML={{ __html: trade }}></div>
          <h3>
            <b>Pending Trades</b>
          </h3>
        </div>
        <div className="user-books">
          { trades.length ? trades : <h3>You have no pending trades</h3> }
        </div>
      </div>
    );
  }
}

export default UserTrades
