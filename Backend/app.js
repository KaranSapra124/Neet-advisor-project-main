const express = require("express");
const Router = require("./src/Routes/adminRoutes");
const app = express();
const cors = require("cors");
const dbConfig = require("./src/Middlewares/dbConfig");
const path = require("path")
require("dotenv").config();
dbConfig();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/admin", Router);

app.listen(3000, () => console.log("Server Listening On 3000"));
