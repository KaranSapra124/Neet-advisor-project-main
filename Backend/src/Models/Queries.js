const mongoose = require("mongoose");
const { Schema } = mongoose;

const query = new Schema({
  Name: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ExamType: {
    type: String,
    required: true,
    enum: ["UG", "PG"],
  },
  Option: {
    type: String,
    requuired: true,
  },
  Description: {
    type: String,
  },
});

module.exports = mongoose.model("Query", query);
