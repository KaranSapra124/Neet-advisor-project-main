const express = require("express");
const {
  addSuperAdmin,
  sendOTP,
  verifySuperAdminOTP,
  getSuperAdmin,
  getZoomMeetings,
  editService,
  AddService,
  getServices,
  deleteService,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");
const { superAdminAuth } = require("../Middlewares/superAdminAuth");
const { getAuthTokenZoom } = require("../Middlewares/ZoomTokenGenerator");

const Router = express.Router();

// Main Methods
Router.post("/add-super-admin", addSuperAdmin);
Router.post("/send-super-admin-otp", sendOTP);
Router.post("/verify-otp", verifySuperAdminOTP);
Router.post("/super-admin-auth", superAdminAuth, getSuperAdmin);
Router.post("/get-zoom-token", getAuthTokenZoom);
Router.get("/get-zoom-meetings", getAuthTokenZoom, getZoomMeetings);

// Services
Router.post(
  "/add-service",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  AddService,
);
Router.get("/get-services", getServices);

Router.post(
  "/edit-service/:id",
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  editService,
);

Router.post("/delete-service/:id",deleteService)

module.exports = Router;
