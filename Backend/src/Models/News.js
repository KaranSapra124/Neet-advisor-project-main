const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  generatedHTML: {
    type: String,
    required: true,
  },
  hashtags: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("News", newsSchema);
