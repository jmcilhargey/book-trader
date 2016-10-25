"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import Index from "./components/index";
import Register from "./components/register";
import Login from "./components/login";
import Account from "./components/account";
import Search from "./components/search";

import "style!./main.css";

ReactDOM.render(
  (
  <Router history={ hashHistory }>
    <Route path="/" component={ Index } >
    </Route>
  </Router>
  ),
  document.getElementById("app")
);
