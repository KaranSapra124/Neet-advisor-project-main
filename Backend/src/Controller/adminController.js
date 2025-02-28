const Testimonial = require("../Models/Testimonial");

// Testimonials Started
exports.addTestimonial = async (req, res) => {
  try {
    const { filename } = req.file;
    const { clientName, clientCollege, review } = req.body;
    const newTestimonial = await Testimonial.create({
      imgUrl: filename,
      clientName: clientName,
      clientCollege: clientCollege,
      review: review,
    });
    return res.json({ status: 201, newTestimonial });
  } catch (err) {
    return res.json({ status: 401, err });
  }
};
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    return res.json({ status: 201, testimonials });
  } catch (err) {
    return res.json({ status: 401, err });
  }
};
