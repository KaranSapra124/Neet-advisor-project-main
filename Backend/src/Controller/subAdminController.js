const { generateOTP, sendMail } = require("../Middlewares/sendEmail");
const subAdmin = require("../Models/SubAdmin");

exports.sendOtpAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const data = await subAdmin.findOne({ adminEmail: email });
    if (!data) {
      return res.status(401).send({ message: "Admin Not Found!" });
    }
    const otp = generateOTP();
    data.otp = otp;
    console.log(otp);
    await sendMail(email, `OTP for admin login!`, `<h1>OTP is ${otp}</h1>`);

    await data.save();
    return res.status(200).send({ message: "OTP Sent ✔️" });
  } catch (err) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const adminData = await subAdmin.findOne({ adminEmail: email });
    adminData?.otp === otp
      ? res.status(200).send({ message: "Admin Logged In", adminData })
      : res.status(401).send({ message: "Invalid OTP" });
  } catch (err) {
    return res.status(403).send({ message: "Something Went Wrong!" });
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const { id } = req?.user;
    const superAdmin = await SuperAdmin.findById(id);
    if (!superAdmin)
      return res.status(401).send({ message: "No Super Admin Found!" });

    return res
      .status(201)
      .send({ message: "Logged In Successfully!", superAdmin });
  } catch (err) {
    return res.status(401).send({ message: "Unable To Login!" });
  }
};
