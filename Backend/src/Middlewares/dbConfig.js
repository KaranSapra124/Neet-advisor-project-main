const mongoose = require("mongoose");
const dbConfig = async () => {
  try {
    const res = await mongoose.connect(process.env.DB_URL);
    console.log("Db Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConfig;
