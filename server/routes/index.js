"use strict";

const router = require("express").Router();
const books = require("../apis/books");
const transform = require("../helpers/transform");
const mid = require("../middleware");

const Library = require("../models/library");
const User = require("../models/user");

router.post("/books", (req, res, next) => {

  books.get(req.body.search).then((value) => {
    res.status(200).send(transform(value));
  }).catch((reason) => {
    return next(reason);
  })
});

router.get("/settings", mid.loggedIn, (req, res, next) => {

  User.findById(req.session.userId)
    .exec((error, user) => {
      return res.send({ user: user });
    });
});

router.get("/logout", (req, res, next) => {

  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        return next(error)
      }
      return res.redirect("/");
    });
  }
});

router.post("/login", mid.loggedOut, (req, res, next) => {

  if (!req.body.email || !req.body.password) {
    let error = new Error("Email and password required");
    error.status = 400;
    return next(error);
  }
  User.authenticate(req.body.email, req.body.password, function(error, user) {
    if (error || !user) {
      return next(error);
    }
    req.session.userId = user._id;
    console.log(req.session);
    res.send({ message: ["Success, you're logged in!"] });
  });
});

router.post("/register", mid.loggedOut, (req, res, next) => {

    if (!req.body.email || !req.body.password) {
      let error = new Error("Email and password required");
      error.status = 400;
      return next(error);
    }
    if (req.body.password !== req.body.confirm) {
      let error = new Error("Passwords must match");
      error.status = 400;
      return next(error);
    }

    let user = {
      email: req.body.email,
      first: req.body.first || "",
      last: req.body.last || "",
      password: req.body.password
    };

    User.create(user, (error, user) => {
      if (error) {
        return next(error);
      }
        return res.send(user);
    });

  res.send({ message: ["Success, welcome to Book Trader " + req.body.first + "!"] });
});

module.exports = router;
