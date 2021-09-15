const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  running_time: {
    type: String,
    require: true,
  },
  genre: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  synopsis: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Film", filmSchema);
