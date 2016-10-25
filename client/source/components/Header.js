"use strict";

import * as React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-left">
            <h1 className="header-title">
              <a href="/">Book Trader</a>
            </h1>
            <h3 className="header-text">Trade, share, learn</h3>
          </div>
          <div className="header-middle">
            <a className="header-button-middle" href="/search">Browse Books</a>
            <a className="header-button-middle" href="/account">My Books</a>
          </div>
          <div className="header-right">
            <a className="header-button-right" href="/register">Register</a>
            <a className="header-button-right" href="/login">Login</a>
            <a className="header-button-right" href="/settings">Settings</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
