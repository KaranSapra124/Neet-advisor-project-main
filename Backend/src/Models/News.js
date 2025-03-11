const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    generatedHTML: {
      type: String,
      required: true,
    },
    hashtags: {
      type: [String],
      required: true,
    },
    author: {
      type: String,
      default: "NEET Advisor",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("News", newsSchema);
