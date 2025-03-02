const express = require("express");
const {
  // addTestimonial,
  // getTestimonials,
  // editTestimonial,
  // deleteTestimonial,
  addSuperAdmin,
  sendOTP,
  verifySuperAdminOTP,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");
const { superAdminAuth } = require("../Middlewares/superAdminAuth");

const Router = express.Router();

Router.post("/add-super-admin", addSuperAdmin);
Router.post("/send-super-admin-otp", sendOTP);
Router.post("/verify-otp", verifySuperAdminOTP);
Router.post("/super-admin-auth",superAdminAuth)

module.exports = Router;
