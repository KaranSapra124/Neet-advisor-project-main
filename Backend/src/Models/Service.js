const mongoose = require("mongoose");

const Service = new mongoose.Schema({
  icon: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  video: {
    type: String,
  },
});

module.exports = mongoose.model("Service", Service);
