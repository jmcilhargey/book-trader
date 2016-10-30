"use strict";

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/index");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const cookieParser = require("cookie-parser");

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

app.use(cookieParser());
app.use(session({
  store: new RedisStore(),
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: { path: "/", secure: false, maxAge: null, httpOnly: true }
}));
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId;
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../client/build")));
app.use("/", router);

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
