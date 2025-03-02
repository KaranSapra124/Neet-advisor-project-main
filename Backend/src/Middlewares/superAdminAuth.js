const Jwt = require("jsonwebtoken");

exports.superAdminAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) res.status(401).send({ message: "No Token Provided!" });
    const id = Jwt.decode(token);
    req.user = id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized: Invalid Token" });
  }
};
