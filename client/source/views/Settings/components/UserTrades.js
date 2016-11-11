"use strict";

import * as React from "react";
import trade from "../../../images/trade.svg";
import arrow from "../../../images/arrow.svg";

class UserTrades extends React.Component {
  constructor(props) {
    super(props);
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
          { trades }
        </div>
      </div>
    );
  }
}

export default UserTrades
