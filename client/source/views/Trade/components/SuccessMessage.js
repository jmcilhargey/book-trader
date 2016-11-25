"use strict";

import * as React from "react";

class SuccessMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.success.length) {
      var messages = this.props.success.map((message, index) => <p key={ index }>{ message }</p>);
    }
    if (messages) {
      return (
        <div className="success-messages">
          { messages }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SuccessMessage
