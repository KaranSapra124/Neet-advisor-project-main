const express = require("express");
const {
  addTestimonial,
  getTestimonials,
  editTestimonial,
  deleteTestimonial,
  addSuperAdmin,
  sendOTP,
  verifySuperAdminOTP,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");

const Router = express.Router();

Router.post("/add-super-admin", addSuperAdmin);
Router.post("/send-super-admin-otp", sendOTP);
Router.post("/verify-otp", verifySuperAdminOTP);

module.exports = Router;
