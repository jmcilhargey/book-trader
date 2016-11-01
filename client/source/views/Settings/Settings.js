"use strict";

import * as React from "react";
import UserInfo from "./components/userinfo";

class Settings extends React.Component {
  constructor() {
    super();
    this.state = { first: "", last: "", email: "", books: [] }
    this.getUserInfo = this.getUserInfo.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.getUserInfo();
  }
  getUserInfo() {
    fetch("/api/settings", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Access-Token": localStorage.token
      },
      credentials: "same-origin"
    }).then((response) => response.json())
      .then((json) => {
        this.setState({ first: json.first, last: json.last, email: json.email, books: json.books });
    });
  }
  render() {
    return (
      <div className="settings-container">
        <h1>My Settings</h1>
        <UserInfo
        first={ this.state.first }
        last={ this.state.last }
        email={ this.state.email }
        books={ this.state.books } />
      </div>
    );
  }
}

export default Settings
