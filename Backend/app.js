const express = require("express");
const Router = require("./src/Routes/adminRoutes");
const app = express();
const cors = require("cors");
const dbConfig = require("./src/Middlewares/dbConfig");
require("dotenv").config();
dbConfig();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.json());

app.use("/admin", Router);

app.listen(3000, () => console.log("Server Listening On 3000"));
