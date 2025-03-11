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
  addStudents,
  getStudents,
  deleteStudent,
  editStudent,
  addAdmin,
  getAdmins,
  deleteAdmin,
  editAdmin,
  addNews,
  addNewsFn,
  getNews,
  editNews,
  deleteNews,
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

Router.post("/delete-service/:id", deleteService);
// Services Ended

// Students Started
Router.post("/add-student", upload.single("file"), addStudents);
Router.get("/get-students", getStudents);
Router.post("/delete-student/:id", deleteStudent);
Router.post("/edit-student/:id", upload.single("file"), editStudent);

// Admin Started
Router.post("/add-admin", addAdmin);
Router.get("/get-admins", getAdmins);
Router.post("/delete-admin/:id", deleteAdmin);
Router.post("/edit-admin/:id", editAdmin);

// News Started
Router.post("/add-news", upload.single("file"), addNews);
Router.post("/add-news-admin", addNewsFn);
Router.get("/get-news", getNews);
Router.post("/edit-news/:id", editNews);
Router.post("/delete-news/:id", deleteNews);
// News Completed

module.exports = Router;
