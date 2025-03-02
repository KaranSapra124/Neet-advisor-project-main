const Jwt = require("jsonwebtoken");

exports.superAdminAuth = (req, res) => {
  console.log(req.cookie,req.cookies);
};
