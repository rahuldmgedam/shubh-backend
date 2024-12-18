const express = require("express");
const {
  createRegister,
  getRegister,
} = require("../controller/register.controller");


const registerRouter = express.Router();

registerRouter.get("/", getRegister);
registerRouter.post("/create", createRegister);

module.exports = { registerRouter };
