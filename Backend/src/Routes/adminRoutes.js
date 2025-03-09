const express = require("express");
const {
  addTestimonial,
  getTestimonials,
  editTestimonial,
  deleteTestimonial,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");
const {
  authSubAdmin,
  sendOtpAdmin,
  verifyOTP,
} = require("../Controller/subAdminController");

const Router = express.Router();

Router.post("/add-testimonial", upload.single("file"), addTestimonial);
Router.get("/get-testimonials", getTestimonials);
Router.post("/edit-testimonial/:id", upload.single("file"), editTestimonial);
Router.post("/delete-testimonial/:id", deleteTestimonial);

Router.post("/send-admin-otp", sendOtpAdmin);
Router.post("/verify-otp-admin", verifyOTP);
module.exports = Router;
