const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Routers = require("../routes/router");
app.use(express.json());
const dbUrl = "mongodb://127.0.0.1:27017/React_auth";
app.use(Routers);
mongoose.connect(dbUrl);
