"use strict";

import * as React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  onSubmit() {

  }
  onEmailChange() {

  }
  onPasswordChange() {

  }
  render() {
    return (
      <form className="login-form" onSubmit={ this.onSubmit }>
        <label htmlFor="email">Email</label>
        <input className="login-input" onChange={ this.onEmailChange } type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input className="login-input" onChange={ this.onPasswordChange } type="password" id="password" />
        <input className="login-submit" type="submit" value="Sign In"/>
      </form>
    );
  }
}

export default LoginForm
