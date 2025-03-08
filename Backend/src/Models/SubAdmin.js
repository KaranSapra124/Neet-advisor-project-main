const mongoose = require("mongoose");

const subAdmin = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  adminEmaail: {
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
});


module.exports = mongoose.model("SubAdmin",subAdmin)