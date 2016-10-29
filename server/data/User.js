"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  name: String,
  books: Array,
  trades: Array
});

module.exports = mongoose.model("User", User);
