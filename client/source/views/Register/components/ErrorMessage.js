"use strict";

import * as React from "react";

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.errors.length) {
      var messages = this.props.errors.map((message, index) => <p key={ index }>{ message }</p>);
    }
    if (messages) {
      return (
        <div className="error-messages">
          { messages }
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ErrorMessage
