"use strict";

import * as React from "react";
import { Link } from "react-router";

class HeaderButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const auth = this.props.auth;
    if (auth) {
      return (
        <div className="header-right">
          <Link className="header-button-right" to="/logout">Sign Out</Link>
          <Link className="header-button-right" to="/settings">Settings</Link>
        </div>
      );
    } else {
      return (
        <div className="header-right">
          <Link className="header-button-right" to="/register">Sign Up</Link>
          <Link className="header-button-right" to="/login">Sign In</Link>
        </div>
      );
    }
  }
}

export default HeaderButtons
