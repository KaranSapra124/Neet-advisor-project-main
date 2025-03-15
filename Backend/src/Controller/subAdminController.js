const { generateOTP, sendMail } = require("../Middlewares/sendEmail");
const subAdmin = require("../Models/SubAdmin");
const { generateToken } = require("../Utils/JwtFn");

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
      ? (() => {
          const adminTokenData = {
            id: adminData?._id,
            role: "admin",
          };
          const token = generateToken(adminTokenData);
          res.cookie("adminToken", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
          });
          res.status(200).send({ message: "Admin Logged In", adminData });
        })()
      : res.status(401).send({ message: "Invalid OTP" });
  } catch (err) {
    console.log(err);
    return res.status(403).send({ message: "Something Went Wrong!" });
  }
};

exports.getAdmin = async (req, res) => {
  try {
    if (req?.user) {
      const { id } = req?.user;
      const admin = await subAdmin.findById(id);
      if (!admin)
        return res.status(401).send({ message: "No Super Admin Found!" });

      return res
        .status(201)
        .send({ message: "Logged In Successfully!", admin });
    }else{

    }
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Unable To Login!" });
  }
};
