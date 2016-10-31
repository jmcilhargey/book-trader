"use strict";

import * as React from "react";
import UserInfo from "../components/userinfo";

class Settings extends React.Component {
  constructor() {
    super();
    this.state = { first: "", last: "", email: "", books: [] }
  }
  render() {
    return (
      <div className="settings-container">
        <h1>My Settings</h1>
        <UserInfo />
      </div>
    );
  }
}

export default Settings
