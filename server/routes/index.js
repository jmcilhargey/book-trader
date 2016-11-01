"use strict";

const router = require("express").Router();
const books = require("../apis/books");
const transform = require("../helpers/transform");
const mid = require("../middleware");
const jwt = require("jsonwebtoken");

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

  User.findById(req.decoded.id)
    .exec((error, user) => {
      if (error) {
        return next(error);
      } else if (!user) {
        let error = new Error("No matching user");
        error.status = 404;
        return next(error);
      } else {
        res.send({ first: user.first, last: user.last, email: user.email, books: user.books });
      }
  });
});

router.get("/logout", (req, res, next) => {

  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        return next(error);
      }
      return res.redirect("/");
    });
  }
});

router.post("/login", mid.loggedOut, (req, res, next) => {

  User.authenticate(req.body.email, req.body.password, (error, user) => {
    if (error || !user) {
      res.send({ error: ["Invalid username or password"] })
    } else {
      jwt.sign({ role: "user", id: user._id }, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "1d"}, (error, token) => {
        if (error) {
          return next(error);
        }
        res.send({ success: ["Success, you're logged in!"], token: token, authenticated: true });
      });
    }
  });
});

router.post("/add", mid.loggedIn, (req, res, next) => {
  
  let book = null;
  try {
    book = JSON.parse(decodeURIComponent(req.body.book));
  } catch (error) {
    return next(error);
  }

  User.findOneAndUpdate({ _id: req.decoded.id }, { $push: { books: book }}, (error, user) => {
    if (error) {
      return next(error);
    }
    res.send(user);
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
        res.send({ message: ["Success, welcome to Book Trader " + req.body.first + "!"] });
    });
});

module.exports = router;
