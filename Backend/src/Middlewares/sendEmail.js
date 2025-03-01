const nodemailer = require("nodemailer");

const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

exports.sendMail = async (email, subject, message) => {
  try {
    const res = await transporter.sendMail({
      to: email,
      subject: subject,
      html: message,
    });
    return res.status(200).send({ message: "Email Sent" });
  } catch (err) {
    return res.status(401).sen({ message: "Some Error Occured", err });
  }
};

exports.generateOTP = () => {
  return Math.floor(Math.random() * 1000000);
};
