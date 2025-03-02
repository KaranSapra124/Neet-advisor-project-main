const Jwt = require("jsonwebtoken");
exports.generateToken = (user) =>
  Jwt.sign({ id: user?.id?.toString(), role: user?.role }, process.env.SECRET_KEY);
exports.verifyToken = (token) => Jwt.verify(token, process.env.SECRET_KEY);
