const { generateOTP } = require("../Middlewares/sendEmail");
const subAdmin = require("../Models/SubAdmin");

exports.authSubAdmin = async (req, res) => {
  console.log(req.body);
};
exports.sendOtpAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const data = await subAdmin.findOne({ adminEmail: email });
    if (!data) {
      return res.status(401).send({ message: "Admin Not Found!" });
    }
    data?.otp = generateOTP();
    await data.save();
    return res.status(200).send({ message: "OTP Sent ✔️" });
  } catch (err) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};
