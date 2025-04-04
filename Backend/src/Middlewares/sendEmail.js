const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const useremail = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: useremail,
    pass: password,
  },
});

exports.sendMail = async (email, subject, message) => {
  try {
    console.log(email);
    const result = await transporter.sendMail({
      from: useremail,
      to: email,
      subject: subject,
      html: message,
    });
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

exports.generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Ensures 7 digits
};
