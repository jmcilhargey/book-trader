"use strict";

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/index");

const app = express();
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/test", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
  }
});

app.use(express.static(path.join(__dirname + "/../client/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Express server listening");
  }
});
