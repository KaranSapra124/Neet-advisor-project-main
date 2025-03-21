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
  try {
    const { adminToken } = req.cookies;
    if (adminToken) {
      if (!adminToken) res.status(401).send({ message: "No Token Provided!" });
      const id = Jwt.decode(adminToken);
      req.user = id;
      next();
    }
  } catch (err) {
    // console.log(err)
    return res.status(403).send({ message: "Unauthorized: Invalid Token" });
  }
};

exports.authAdmins = (req, res, next) => {
  const { token, adminToken } = req.cookies;
  try {
    token
      ? (() => {
          const id = Jwt.verify(token, process.env.SECRET_KEY);
          req.user = id;
          next();
        })()
      : (() => {
          const id = Jwt.verify(adminToken, process.env.SECRET_KEY);
          req.user = id;
          next();
        })();
  } catch (err) {
    console.log(err);
    return res.status(403).send({ message: "Unauthorized Access!" });
  }
};
