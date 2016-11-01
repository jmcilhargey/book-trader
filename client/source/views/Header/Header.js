"use strict";

import * as React from "react";
import { Link } from "react-router";
import HeaderButtons from "./components/headerbuttons";

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
          <HeaderButtons auth={ this.props.auth } />
        </div>
      </header>
    );
  }
}

export default Header
