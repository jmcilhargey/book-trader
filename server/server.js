"use strict";

require("../env");

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const mid = require("./middleware");

const app = express();
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/test", (error, res) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to MongoDB");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../client/build")));

app.use("/api", routes);

app.use((req, res, next) => {
  let error = new Error("Page not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.send({ error: error.status, message: error.message });
})

app.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Express server listening");
  }
});
