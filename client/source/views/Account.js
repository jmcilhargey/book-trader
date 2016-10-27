"use strict";

import * as React from "react";
import Form from "../components/form";
import Grid from "../components/grid";

class Account extends React.Component {
  render() {
    return (
      <div className="account-container">
        <h1>My Books</h1>
        <Form />
        <Grid />
      </div>
    );
  }
}

export default Account
