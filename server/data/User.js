"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  first: {
    type: String,
    trim: true
  },
  last: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  books: [
    {
      title: String,
      authors: String,
      description: String,
      isbn: String,
      pages: String,
      image: String
    }
  ],
  trades: Array
});

User.statics.authenticate = (email, password, callback) => {

  User.findOne({ email: email })
    .exec((error, user) => {
      if (error) {
        return callback(error);
      }
      if (!user) {
        let error = new Error("User not found");
        error.status = 401;
        return callback(error);
      }
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          return callback(null, user);
        } else {
          let error = new Error("Credentials don't match");
          error.status = 401;
          return callback(error);
        }
      });
    });
};

User.pre("save", function(next) {

  const user = this;

  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", User);
