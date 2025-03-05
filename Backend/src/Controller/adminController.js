const { generateOTP, sendMail } = require("../Middlewares/sendEmail");
const SuperAdmin = require("../Models/SuperAdmin");
const Testimonial = require("../Models/Testimonial");
const Jwt = require("jsonwebtoken");
const { generateToken } = require("../Utils/JwtFn");
const Service = require("../Models/Service");
const { default: axios } = require("axios");

// Testimonials Started
exports.addTestimonial = async (req, res) => {
  try {
    const { filename } = req.file;
    const { clientName, clientCollege, review } = req.body;
    const newTestimonial = await Testimonial.create({
      imgUrl: filename,
      clientName: clientName,
      clientCollege: clientCollege,
      review: review,
    });
    return res.json({ status: 201, newTestimonial });
  } catch (err) {
    return res.json({ status: 401, err });
  }
};
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    return res.json({ status: 200, testimonials });
  } catch (err) {
    return res.json({ status: 401, err });
  }
};
exports.editTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.file) {
      const editedTestimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          imgUrl: req?.file?.filename,
          ...req.body,
        },
        { new: true },
      );
      return res
        .status(200)
        .send({ mmessage: "Testimonial Edited", editedTestimonial });
    } else {
      const editedTestimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          ...req.body,
        },
        { new: true },
      );
      return res
        .status(200)
        .send({ mmessage: "Testimonial Edited", editedTestimonial });
    }
  } catch (err) {
    return res.status(200).send({ mmessage: "Error Occured", err });
  }
};
exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await Testimonial.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ message: "Testimonial Deleted Successfully!" });
  } catch (err) {
    return res.status(401).send({ message: "Error Occured", err });
  }
};
// Testimonial Finished

// Authentiction Controller
exports.addSuperAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    await sendMail(email, `OTP for account creation`, `<h1>OTP is ${otp}</h1>`);
    return res.status(201).send({ message: "OTP Sent Successfully!" });
  } catch (err) {
    return res.status(401).send({ message: "Something Badly Broke" });
  }
};
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOTP();
    const existingSuperAdmin = await SuperAdmin.findOne({ email: email });
    existingSuperAdmin
      ? (async () => {
          existingSuperAdmin.otp = otp;
          await existingSuperAdmin.save();
          await sendMail(
            email,
            `OTP for account creation`,
            `<h1>OTP is ${otp}</h1>`,
          );
          res.status(201).send({ message: "OTP Sent Successfully!" });
        })()
      : (async () => {
          await sendMail(
            email,
            `OTP for account creation`,
            `<h1>OTP is ${otp}</h1>`,
          );
          await SuperAdmin.create({ email: email, otp: otp });
          return res.status(201).send({ message: "OTP Sent Successfully!" });
        })();
  } catch (err) {
    return res.status(401).send({ message: "Something Badly Broke" });
  }
};
exports.verifySuperAdminOTP = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const existingSuperAdmin = await SuperAdmin.findOne({ email: email });
    existingSuperAdmin?.otp == otp
      ? (async () => {
          const adminData = {
            id: existingSuperAdmin?._id,
            role: "Super Admin",
          };
          console.log(existingSuperAdmin?._id.toString());
          const token = generateToken(adminData);
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
          });
          res.status(201).send({ message: "Logged In Successfully!", token });
        })()
      : (() => {
          res.status(403).send({ message: "Invalid OTP!" });
        })();
  } catch (err) {
    return res.status(401).send({ message: "Something Badly Broke", err });
  }
};
exports.getSuperAdmin = async (req, res) => {
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

// Zoom API
exports.getZoomMeetings = async (req, res) => {
  // console.log(req.code)
  try {
    const { data } = await axios.get(
      `https://api.zoom.us/v2/users/sapra7112@gmail.com/meetings`,
      {
        headers: {
          Authorization: `Bearer ${req.code}`,
        },
      },
    );

    return res
      .status(200)
      .send({ message: "Meetings Fetched!", meetings: data?.meetings });
  } catch (err) {
    console.log(err);
  }
};

// Services Started
exports.AddService = async (req, res) => {
  try {
    const { video, icon } = req.files;
    const uploadedVideo = video[0]?.filename;
    const uploadedIcon = icon[0]?.filename;
    const service = await Service.create({
      ...req.body,
      video: uploadedVideo,
      icon: uploadedIcon,
    });
    return res.status(201).send({ message: "Service Added!", service });
  } catch (err) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(200).send({ message: "Services Fetched!", services });
  } catch (err) {
    return res.status(401).send({ message: "Something Went Wrong!" });
  }
};
exports.editService = async (req, res) => {
  const { id } = req.params;

  try {
    let updateData = { ...req.body };

    if (req.files) {
      const video = req.files.video; // Correctly extracting video
      const icon = req.files.icon; // Correctly extracting icon

      if (video) updateData.video = video?.[0]?.filename;
      if (icon) updateData.icon = icon?.[0]?.filename;
    }

    const updatedService = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).send({ message: "Service Updated", updatedService });
  } catch (err) {
    console.error("Error updating service:", err);
    return res.status(500).send({ message: "Something Went Wrong!"  });
  }
};
