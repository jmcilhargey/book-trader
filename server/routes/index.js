"use strict";

const routes = require("express").Router();
const books = require("../apis/books");
const transform = require("../helpers/transform");

routes.post("/books", (req, res) => {

  req.on("data", (data) => {
    console.log(data);
  });

  books.get(req.body.search).then((value) => {
    res.status(200).send(transform(value));

  }).catch((reason) => {
    console.log(reason);
  })
});

routes.get("/user", (req, res) => {
  res.send("User route");
});

module.exports = routes;
