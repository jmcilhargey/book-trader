"use strict";

import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory } from "react-router";

import App from "./views/app";
import Home from "./views/home/home";
import Register from "./views/register/register";
import Login from "./views/login/login";
import Search from "./views/search/search";
import Library from "./views/library/library";
import Settings from "./views/settings/settings";
import Trade from "./views/trade/trade";
import "style!./main.css";

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ Home } />
          <Route path="/browse" component={ Library } ></Route>
          <Route path="/browse/:id" component={ Trade } ></Route>
          <Route path="/register" component={ Register } ></Route>
          <Route path="/login" component={ Login } ></Route>
          <Route path="/search" component={ Search } ></Route>
          <Route path="/settings" component={ Settings } ></Route>
        </Route>
        <Route path="*" component={ App } />
    </Router>
    , document.getElementById("app"));
