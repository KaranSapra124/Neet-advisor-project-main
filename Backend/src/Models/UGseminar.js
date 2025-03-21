const mongoose = require("mongoose");

const ugSeminar = new mongoose.Schema({
  video: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ugSeminar", ugSeminar);
