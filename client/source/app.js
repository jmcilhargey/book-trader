"use strict";

import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./views/app";
import Register from "./views/register/register";
import Login from "./views/login/login";
import Search from "./views/search/search";
import Library from "./views/library/library";
import Settings from "./views/settings/settings";
import "style!./main.css";

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App } >
          <Route path="/search" component={ Library } ></Route>
          <Route path="/register" component={ Register } ></Route>
          <Route path="/login" component={ Login } ></Route>
          <Route path="/account" component={ Search } ></Route>
          <Route path="/settings" component={ Settings } ></Route>
        </Route>
    </Router>
    , document.getElementById("app"));
