require("./models/mongodb");
const config = require("config");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const routers = require("./routes/router");
const AuthMiddleware = require("./middleware/auth");
const Admin = require("./middleware/admin");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

if (!config.get("jwtPrivateKey")) {
  console.log("JWT PRIVATE KEY NOT DEFINED");
  process.exit(1);
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  next();
});
// app.use(Routers, [AuthMiddleware, Admin]);
app.use("/", routers)

app.listen(3400, () => console.log("The server running on port 3400"));
