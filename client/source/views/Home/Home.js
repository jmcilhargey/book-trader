"use strict";

import * as React from "react";
import book from "../../images/book.svg";
import search from "../../images/search.svg";
import share from "../../images/share.svg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }
  componentDidMount() {
    setTimeout(function() { this.setState({ loaded: true}) }.bind(this), 50);
  }
  render() {
    const imageClass = this.state.loaded ? "home-image home-loaded" : "home-image home-loading";
    return (
      <div className="home-container">
        <div className={ imageClass }>
          <h1>Find and trade great books</h1>
        </div>
        <div className="home-section">
          <div className="home-detail">
            <i dangerouslySetInnerHTML={{ __html: book }} />
            <h2>Add books and mark them available for trade</h2>
          </div>
          <div className="home-detail">
            <i dangerouslySetInnerHTML={{ __html: search }} />
            <h2>Search the library and propose a trade</h2>
          </div>
          <div className="home-detail">
            <i dangerouslySetInnerHTML={{ __html: share }} />
            <h2>Exchange books and enjoy!</h2>
          </div>
        </div>

      </div>
    );
  }
}

export default Home
