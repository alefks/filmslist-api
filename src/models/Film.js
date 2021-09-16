const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    lowercase: true
  },
  running_time: {
    type: String,
    require: true,
    lowercase: true
  },
  genre: {
    type: String,
    require: true,
    lowercase: true
  },
  director: {
    type: String,
    require: true,
    lowercase: true
  },
  synopsis: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Film", filmSchema);
