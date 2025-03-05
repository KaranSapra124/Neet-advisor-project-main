const mongoose = require("mongoose");

const Students = new mongoose.Schema({
  imgUrl: {
    type: String,
  },
  clientName: {
    type: String,
  },
  clientCollege: {
    type: String,
  },
  Rank: {
    type: String,
  },
  Course: {
    type: String,
  },
});

module.exports = mongoose.model("Students", Students);
