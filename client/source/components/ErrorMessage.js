"use strict";

import * as React from "react";

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.errors.map((message, index) => {
      return <p key={ index }>{ message }</p>
    });
    return (
      <div className="error-messages">
        { messages }
      </div>
    );
  }
}

export default ErrorMessage
