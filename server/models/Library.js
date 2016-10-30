"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  library: Object
});
const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
