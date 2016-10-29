"use strict";

const router = require("express").Router();
const books = require("../apis/books");
const transform = require("../helpers/transform");

router.post("/books", (req, res) => {

  books.get(req.body.search).then((value) => {
    res.status(200).send(transform(value));
  }).catch((reason) => {
    console.log(reason);
  })
});

router.route("/user")
  .get((req, res) => {
  res.send("User route");
})
  .post((req, res) => {
  console.log(req.body);
  res.send({ message: ["Success, welcome to Book Trader " + req.body.first + "!"] });
});

module.exports = router;
