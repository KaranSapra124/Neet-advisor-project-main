const mongoose = require("mongoose");

const SuperAdmin = new mongoose.Schema({
  email: {
    type: String,
    required,
  },
  otp: {
    type: String,
    default: null,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("superAdmin", SuperAdmin);
