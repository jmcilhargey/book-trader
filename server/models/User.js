"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  first: {
    type: String,
    trim: true,
    default: ""
  },
  last: {
    type: String,
    trim: true,
    default: ""
  },
  city: {
    type: String,
    trim: true,
    default: ""
  },
  state: {
    type: String,
    trim: true,
    default: ""
  },
  password: {
    type: String,
    required: true
  },
  books: [{
    title: String,
    authors: String,
    description: String,
    isbn: String,
    pages: String,
    image: String,
    owner: String,
    available: { type: Boolean, default: true },
    id: Schema.Types.ObjectId
  }],
  trades: { type: Array, default: [] },
  tokens: { type: Array, default: [] }
});

UserSchema.statics.authenticate = function (email, password, callback) {

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
      bcrypt.compare(password, user.password, function (error, match) {
        if (match) {
          return callback(null, user);
        } else if (error) {
          return next(error);
        } else {
          let error = new Error("Credentials don't match");
          error.status = 401;
          return callback(error);
        }
      });
    });
};

UserSchema.pre("save", function (next) {

  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, function (error, salt) {
    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) {
        return next(error);
      }
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
