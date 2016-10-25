"use strict";

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const uri = process.env.MONGO_URI || "mongodb://localhost/test";
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/../client/build")));

mongoose.connect(uri, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("MongoDB connected to " + uri);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server listening on port " + port);
  }
});
