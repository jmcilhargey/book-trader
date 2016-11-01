"use strict";

require("../../env");
const jwt = require("jsonwebtoken");

module.exports = {

  loggedOut: function(req, res, next) {
    if (req.session && req.session.userId) {
      res.redirect("/settings");
    }
    return next();
  },
  loggedIn: function(req, res, next) {
    const token = req.headers["x-access-token"] || req.body.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          return next(error);
        }
        req.decoded = decoded;
        return next();
      });
    } else {
      let error = new Error("Must be logged in to view");
      error.status = 403;
      return next(error);
    }
  },
  getCookies: function(req, res, next) {
  //  console.log(req.cookies, req.session);
  }
}
