const mongoose = require("mongoose");

const Webinar = new mongoose.Schema({
  thumbnail: {
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
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  webinarType: {
    type: String,
    required: true,
    enum: ["PG", "UG"],
  },
});

module.exports = mongoose.model("Webinar", Webinar);
