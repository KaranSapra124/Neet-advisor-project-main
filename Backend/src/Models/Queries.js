const mongoose = require("mongoose");
const { Schema } = mongoose;

const query = new Schema({
  Name: {
    type: String,
    required: true,
  },
});
