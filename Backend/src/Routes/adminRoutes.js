const express = require("express");
const { addTestimonial } = require("../Controller/adminController");

const Router = express.Router();

Router.post("/add-testimonial", addTestimonial);

module.exports = Router;
