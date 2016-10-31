"use strict";

module.exports = {
  loggedOut: function(req, res, next) {
    if (req.session && req.session.userId) {
      res.redirect("/settings");
    }
    return next();
  },
  loggedIn: function(req, res, next) {
    console.log(req.body.token);
    if (true) {
      return next();
    }
    let error = new Error("Must be logged in to view");
    error.status = 403;
    return next(error);
  },
  getCookies: function(req, res, next) {
  //  console.log(req.cookies, req.session);
  }
}
