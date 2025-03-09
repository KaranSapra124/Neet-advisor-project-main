const subAdmin = require("../Models/SubAdmin");

exports.authSubAdmin = async (req, res) => {
  console.log(req.body);
};
exports.sendOtpAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const { data } = await subAdmin.findOne({ adminEmail: email });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
