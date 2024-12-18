const express = require("express");
const { getProfiles, addProfile, deleteProfile } = require("../controller/boysProfile.controller");
const BoysProfileRouter = express.Router();

// Get all profiles
BoysProfileRouter.get("/", getProfiles);

// Add a new profile
BoysProfileRouter.post("/", addProfile);

// Delete a profile by ID
BoysProfileRouter.delete("/:id", deleteProfile);

module.exports = BoysProfileRouter;
