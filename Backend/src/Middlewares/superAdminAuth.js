const Jwt = require("jsonwebtoken");

exports.superAdminAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).send({ message: "No Token Provided!" });
    const id = Jwt.decode(token);
    req.user = id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized: Invalid Token" });
  }
};
exports.adminAuth = (req, res, next) => {
  console.log(req.url);
  try {
    const { adminToken } = req.cookies;
    if (adminToken) {
      if (!adminToken) res.status(401).send({ message: "No Token Provided!" });
      const id = Jwt.decode(adminToken);
      // console.log(id)
      req.user = id;
      next();
    }
  } catch (err) {
    // console.log(err)
    return res.status(403).json({ message: "Unauthorized: Invalid Token" });
  }
};
