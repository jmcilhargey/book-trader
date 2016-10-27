"use strict";

import * as React from "react";
import { Link } from "react-router";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-left">
            <h1 className="header-title">
              <Link to="/">Book Trader</Link>
            </h1>
            <h3 className="header-text">Trade, share, learn</h3>
          </div>
          <div className="header-middle">
            <Link className="header-button-middle" to="/search">Browse Books</Link>
            <Link className="header-button-middle" to="/account">My Books</Link>
          </div>
          <div className="header-right">
            <Link className="header-button-right" to="/register">Register</Link>
            <Link className="header-button-right" to="/login">Login</Link>
            <Link className="header-button-right" to="/settings">Settings</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
