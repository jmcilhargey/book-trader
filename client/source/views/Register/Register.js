"use strict";

import * as React from "react";
import fetch from "isomorphic-fetch";
import RegisterForm from "./components/registerform";
import ErrorMessage from "./components/errormessage";
import SuccessMessage from "./components/successmessage";
import { browserHistory } from "react-router";

class Register extends React.Component {
  constructor() {
    super();
    this.state = { username: "", email: "", password: "", confirm: "", errors: [], success: [] };
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
  }
  handleNameChange(value) {
    this.setState({ username: value });
  }
  handleEmailChange(value) {
    this.setState({ email: value });
  }
  handlePasswordChange(value) {
    this.setState({ password: value });
  }
  handleConfirmChange(value) {
    this.setState({ confirm: value });
  }
  handleNewUser() {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: "same-origin",
      body: `username=${ this.state.username }&email=${ this.state.email }&password=${ this.state.password }&confirm=${ this.state.confirm }`
    }).then((response) => response.json())
      .then((json) => {
        if (json.error) {
          this.setState({ errors: new Array(json.message) })
        } else {
          this.setState({ success: new Array(json.message) });
          browserHistory.push("/login");
        }
      });
    this.setState({ username: "", email: "", password: "", confirm: "", errors: [], success: [] });
  }
  handleError(value) {
    this.setState({ errors: value || [] });
  }
  render() {
    return (
      <div className="register-container">
        <h1>Sign Up</h1>
        <RegisterForm
        onNameChange={ this.handleNameChange }
        onEmailChange={ this.handleEmailChange }
        onPasswordChange={ this.handlePasswordChange }
        onConfirmChange={ this.handleConfirmChange }
        onSubmit={ this.handleNewUser }
        onError={ this.handleError }
        email={ this.state.email }
        password={ this.state.password }
        confirm={ this.state.confirm } />
        <ErrorMessage errors={ this.state.errors } />
        <SuccessMessage success={ this.state.success } />
      </div>
    );
  }
}

export default Register
