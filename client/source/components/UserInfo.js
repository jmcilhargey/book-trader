"use strict";

import * as React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-info">
        <p>First Name { this.props.first }</p>
        <p>Last Name { this.props.last }</p>
        <p>Email { this.props.email }</p>
        <p>Books { this.props.books }</p>
      </div>
    );
  }
}

export default UserInfo
