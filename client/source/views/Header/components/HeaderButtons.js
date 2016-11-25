"use strict";

import * as React from "react";
import { Link } from "react-router";

class HeaderButtons extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
    this.props.onLogout();
  }
  render() {
    const auth = this.props.auth;
    if (auth) {
      return (
        <div className="header-right">
          <Link className="header-button-right" to="/settings">My Books</Link>
          <button className="header-button-right" onClick={ this.onLogout }>Sign Out</button>
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
