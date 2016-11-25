"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  isbn: String,
  pages: String,
  image: String,
  owner: String,
  available: { type: Boolean, default: true },
  id: Schema.Types.ObjectId
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
