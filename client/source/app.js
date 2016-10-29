"use strict";

import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";

import App from "./views/app";
import Register from "./views/register";
import Login from "./views/login";
import Account from "./views/account";
import Search from "./views/search";
import Settings from "./views/settings";

import "style!./main.css";

ReactDOM.render(
    <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <Route path="/search" component={ Search } ></Route>
          <Route path="/register" component={ Register } ></Route>
          <Route path="/login" component={ Login } ></Route>
          <Route path="/account" component={ Account } ></Route>
          <Route path="/settings" component={ Settings } ></Route>
        </Route>
    </Router>
    , document.getElementById("app"));
