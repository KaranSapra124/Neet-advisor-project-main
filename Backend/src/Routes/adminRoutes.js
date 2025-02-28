const express = require("express");
const {
  addTestimonial,
  getTestimonials,
  editTestimonial,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");

const Router = express.Router();

Router.post("/add-testimonial", upload.single("file"), addTestimonial);
Router.get("/get-testimonials", getTestimonials);
Router.post("/edit-testimonial/:id", upload.single("file"), editTestimonial);

module.exports = Router;
