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
  getLatestNews,
  getRelatedNews,
  getSingleNews,
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
  superAdminAuth,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  AddService,
);
Router.get("/get-services", getServices);

Router.post(
  "/edit-service/:id",
  superAdminAuth,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  editService,
);

Router.post("/delete-service/:id", superAdminAuth, deleteService);
// Services Ended

// Students Started
Router.post("/add-student", superAdminAuth, upload.single("file"), addStudents);
Router.get("/get-students", getStudents);
Router.post("/delete-student/:id", superAdminAuth, deleteStudent);
Router.post(
  "/edit-student/:id",
  superAdminAuth,
  upload.single("file"),
  editStudent,
);

// Admin Started
Router.post("/add-admin", superAdminAuth, addAdmin);
Router.get("/get-admins", superAdminAuth, getAdmins);
Router.post("/delete-admin/:id", superAdminAuth, deleteAdmin);
Router.post("/edit-admin/:id", superAdminAuth, editAdmin);

// News Started
Router.post("/add-news", superAdminAuth, upload.single("file"), addNews);
Router.post("/add-news-admin", superAdminAuth, addNewsFn);
Router.get("/get-news", getNews);
Router.post("/edit-news/:id", superAdminAuth, editNews);
Router.post("/delete-news/:id", superAdminAuth, deleteNews);
Router.get("/get-latest-news", superAdminAuth, getLatestNews);
Router.post("/get-related-news", superAdminAuth, getRelatedNews);
Router.get("/get-news/:id", superAdminAuth, getSingleNews);
// News Completed

module.exports = Router;
