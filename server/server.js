"use strict";

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/index");
const session = require("express-session");

const Library = require("./data/library");
const User = require("./data/user");

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
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { path: "/", secure: false, maxAge: null, httpOnly: true }
}));
app.use((req, res, next) => {

});
app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Express server listening");
  }
});
