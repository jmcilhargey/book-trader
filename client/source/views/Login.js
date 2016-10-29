"use strict";

import * as React from "react";
import LoginForm from "../components/loginform";

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <h1>Sign In</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login
