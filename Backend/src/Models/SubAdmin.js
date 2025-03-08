const mongoose = require("mongoose");

const subAdmin = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
  adminPermissions: {
    type: [String],
    default: null,
  },
  adminStatus: {
    type: Boolean,
    default: true,
  },
  otp: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("SubAdmin", subAdmin);
