"use strict";

import * as React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = { token: "", auth: false };
    this.updateAuth = this.updateAuth.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    if (localStorage.token) {
      this.setState({ auth: true });
    }
  }
  updateAuth(token) {
    localStorage.token = token;
    this.setState({ token: token, auth: true });
  }
  render() {
    return (
    <div className="main-container">
      <Header auth={ this.state.auth } />
      <div className="main-body">
        { this.props.children && React.cloneElement(this.props.children, {
          onAuth: this.updateAuth
        })}
      </div>
      <Footer />
    </div>
    );
  }
}

export default App
