const mongoose = require("mongoose");

const Testimonial = new mongoose.Schema({
  imgUrl: {
    type: String,
  },
  clientName: {
    type: String,
  },
  review: {
    type: String,
  },
  clientCollege: {
    type: String,
  },
});

module.exports = mongoose.model("Testimonial", Testimonial);
