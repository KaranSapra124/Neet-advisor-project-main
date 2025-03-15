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
  getAdmin,
} = require("../Controller/subAdminController");
const { adminAuth } = require("../Middlewares/superAdminAuth");

const Router = express.Router();

Router.post("/add-testimonial", upload.single("file"), addTestimonial);
Router.get("/get-testimonials", getTestimonials);
Router.post("/edit-testimonial/:id", upload.single("file"), editTestimonial);
Router.post("/delete-testimonial/:id", deleteTestimonial);

Router.post("/send-admin-otp", sendOtpAdmin);
Router.post("/verify-otp-admin",verifyOTP);
Router.post("/get-admin",adminAuth,getAdmin);
module.exports = Router;
