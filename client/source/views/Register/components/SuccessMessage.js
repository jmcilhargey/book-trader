"use strict";

import * as React from "react";

class SuccessMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.success.map((message, index) => {
      return <p key={ index }>{ message }</p>
    });
    if (!messages.length) {
      return null;
    }
    return (
      <div className="success-messages">
        { this.props.success }
      </div>
    );
  }
}

export default SuccessMessage
