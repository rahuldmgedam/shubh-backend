const express = require("express");
const {
  createLogin,
  //   getlogin,
} = require("../controller/login.controller");

const loginRouter = express.Router();

// loginRouter.get("/", getlogin);
loginRouter.post("/create", createLogin);

module.exports = { loginRouter };
