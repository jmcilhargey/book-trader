"use strict";

import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class App extends React.Component {
  render() {
    return (
    <div className="main-container">
      <Header />
      <div className="main-body">
        { this.props.children }
      </div>
      <Footer />
    </div>
    );
  }
}

export default App
