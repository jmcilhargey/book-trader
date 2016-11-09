"use strict";

import * as React from "react";
import trade from "../../../images/trade.svg";

class UserTrades extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-datum">
        <div dangerouslySetInnerHTML={{ __html: trade }}></div>
        <h3>
          <b>Pending Trades</b>
          { this.props.trades }
        </h3>
      </div>
    );
  }
}

export default UserTrades
