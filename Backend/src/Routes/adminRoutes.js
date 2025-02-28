const express = require("express");
const {
  addTestimonial,
  getTestimonials,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");

const Router = express.Router();

Router.post("/add-testimonial", upload.single("file"), addTestimonial);
Router.get("/get-testimonials", getTestimonials);

module.exports = Router;
