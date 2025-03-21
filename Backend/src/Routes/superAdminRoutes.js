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
  addWebinar,
  getWebinars,
  editWebinar,
  deleteWebinar,
  addSeminar,
  getSeminar,
  editSeminar,
  deleteSeminar,
  getSeminarForUsers,
  addSeminarTimeline,
  getSeminarTimeline,
  editSeminarTimeline,
  deleteTimeline,
  addUgSeminar,
  getUgSeminar,
  getUgSeminarForUsers,
  editUgSeminar,
  deleteUgSeminar,
} = require("../Controller/adminController");
const upload = require("../Middlewares/multerConfig");
const {
  superAdminAuth,
  adminAuth,
  authAdmins,
} = require("../Middlewares/superAdminAuth");
const { getAuthTokenZoom } = require("../Middlewares/ZoomTokenGenerator");
const { verifyPassword } = require("../Middlewares/VerifyPermission");

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
  authAdmins,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  AddService,
);
Router.get("/get-services", getServices);

Router.post(
  "/edit-service/:id",
  authAdmins,
  upload.fields([
    { name: "video", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  editService,
);

Router.post("/delete-service/:id", authAdmins, deleteService);
// Services Ended

// Students Started
Router.post("/add-student", authAdmins, upload.single("file"), addStudents);
Router.get("/get-students", getStudents);
Router.post("/delete-student/:id", authAdmins, deleteStudent);
Router.post(
  "/edit-student/:id",
  authAdmins,
  upload.single("file"),
  editStudent,
);

// Admin Started
Router.post("/add-admin", superAdminAuth, addAdmin);
Router.get("/get-admins", superAdminAuth, getAdmins);
Router.post("/delete-admin/:id", superAdminAuth, deleteAdmin);
Router.post("/edit-admin/:id", superAdminAuth, editAdmin);

// News Started
Router.post("/add-news", authAdmins, upload.single("file"), addNews);
Router.post("/add-news-admin",authAdmins, addNewsFn);
Router.get("/get-news", getNews);
Router.post("/edit-news/:id",authAdmins, editNews);
Router.post("/delete-news/:id",authAdmins, deleteNews);
Router.get("/get-latest-news", getLatestNews);
Router.post("/get-related-news", getRelatedNews);
Router.get("/get-news/:id", getSingleNews);
// News Completed
// Webinars Started
Router.post("/add-webinar",authAdmins, upload.single("thumbnail"), addWebinar);
Router.get("/get-webinars", getWebinars);
Router.post("/edit-webinar/:id",authAdmins, upload.single("thumbnail"), editWebinar);
Router.get("/delete-webinar/:id",authAdmins, deleteWebinar);
// Webinars Ended
// Seminars Started
Router.post("/add-seminar",authAdmins, upload.single("video"), addSeminar);
Router.get("/get-seminars", getSeminar);
Router.get("/get-seminars/:type", getSeminar);

Router.get("/get-seminars-for-users", getSeminarForUsers);
Router.post("/edit-seminar/:id", upload.single("video"), editSeminar);
Router.get("/delete-seminar/:id", deleteSeminar);
// Seminar Ended
// Seminar Progress Started
Router.post("/add-seminar-progress", addSeminarTimeline);
Router.get("/get-seminar-progress/:type", getSeminarTimeline);
Router.post("/edit-seminar-progress/:id", editSeminarTimeline);
Router.get("/delete-progress/:id", deleteTimeline);
// Seminar Progress Ended
// Ug Seminar Started
// Router.post("/add-ug-seminar", upload.single("video"), addUgSeminar);
// Router.get("/get-ug-seminars", getUgSeminar);
Router.get("/get-ug-seminars-for-users", getUgSeminarForUsers);
// Router.post("/edit-ug-seminar/:id", upload.single("video"), editUgSeminar);
// Router.get("/delete-ug-seminar/:id", deleteUgSeminar);

module.exports = Router;
