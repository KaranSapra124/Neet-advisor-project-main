const mongoose = require("mongoose");

const seminarProgress = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fromTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  motive: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SeminarProgress", seminarProgress);
