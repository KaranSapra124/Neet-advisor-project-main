const express = require("express");
const {
  addTestimonial,
  getTestimonials,
  editTestimonial,
  deleteTestimonial,
  addSuperAdmin,
  sendOTP,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");

const Router = express.Router();

Router.post("/add-super-admin", addSuperAdmin);
Router.post("/send-super-admin-otp", sendOTP);

module.exports = Router;
