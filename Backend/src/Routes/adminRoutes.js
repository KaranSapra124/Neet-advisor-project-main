const express = require("express");
const { addTestimonial } = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");

const Router = express.Router();

Router.post("/add-testimonial", upload.single("file"), addTestimonial);

module.exports = Router;
