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
    return res.json({ status: 200, testimonials });
  } catch (err) {
    return res.json({ status: 401, err });
  }
};
exports.editTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.file) {
      const editedTestimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          imgUrl: req?.file?.filename,
          ...req.body,
        },
        { new: true },
      );
      return res
        .status(200)
        .send({ mmessage: "Testimonial Edited", editedTestimonial });
    } else {
      const editedTestimonial = await Testimonial.findByIdAndUpdate(
        id,
        {
          ...req.body,
        },
        { new: true },
      );
      return res
        .status(200)
        .send({ mmessage: "Testimonial Edited", editedTestimonial });
    }
  } catch (err) {
    return res.status(200).send({ mmessage: "Error Occured", err });
  }
};
