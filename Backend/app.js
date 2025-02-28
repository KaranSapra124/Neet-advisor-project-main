const express = require("express");
const Router = require("./src/Routes/adminRoutes");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use("/admin", Router);

app.listen(3000, () => console.log("Server Listening On 3000"));
