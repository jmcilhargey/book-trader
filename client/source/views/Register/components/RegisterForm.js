"use strict";

import * as React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onConfirmChange = this.onConfirmChange.bind(this);
    this.isValidSubmit = this.isValidSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  onEmailChange(event) {
    this.props.onEmailChange(event.target.value)
  }
  onPasswordChange(event) {
    this.props.onPasswordChange(event.target.value)
  }
  onConfirmChange(event) {
    this.props.onConfirmChange(event.target.value)
  }
  isValidSubmit() {

    const errors = [];

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.email)) {
      errors.push("Invalid email address");
    }
    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(this.props.password)) {
      errors.push("Password must be 7 or more characters, contain a digit, and a special character");
    }
    if (this.props.password !== this.props.confirm) {
      errors.push("Passwords don't match");
    }
    if (errors.length) {
      this.props.onError(errors);
      return false;
    } else {
      this.props.onError();
      return true;
    }
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.isValidSubmit()) {
      this.props.onSubmit();
      this.refs["user-name"].value = "";
      this.refs.email.value = "";
      this.refs.password.value = "";
      this.refs.confirm.value = "";
    }
  }
  render() {
    return (
      <form className="register-form" onSubmit={ this.onSubmit }>
        <label htmlFor="user-name">Username</label>
        <input className="register-input" onChange={ this.onNameChange } type="text" ref="user-name" />
        <label htmlFor="email">Email</label>
        <input className="register-input" onChange={ this.onEmailChange } type="email" ref="email" />
        <label htmlFor="password">Password</label>
        <input className="register-input" onChange={ this.onPasswordChange } type="password" ref="password" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input className="register-input" onChange={ this.onConfirmChange } type="password" ref="confirm" />
        <input className="register-submit" type="submit" value="Sign Up"/>
      </form>
    );
  }
}

export default RegisterForm
