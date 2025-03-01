const express = require("express");
const {
  addTestimonial,
  getTestimonials,
  editTestimonial,
  deleteTestimonial,
  addSuperAdmin,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");

const Router = express.Router();

Router.post("/add-super-admin",  addSuperAdmin);

module.exports = Router;
