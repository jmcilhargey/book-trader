"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Library = new Schema({
  library: Object
});

module.exports = mongoose.model("Library", Library);
