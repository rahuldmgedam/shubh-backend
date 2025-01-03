const express = require("express");
const Profile = require("../models/profile.model");
const { find } = require("../models/boysProfile.model");
const ProfileRouter = express.Router();

// Create Profile
ProfileRouter.post("/create", async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully.", data: newProfile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

ProfileRouter.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
      } catch (err) {
        res.status(500).json({ error: "Failed to fetch profiles." });
      }
  });

  ProfileRouter.get("/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const profile = await Profile.findById(id);
      if(!profile){
        return res.status(404).json({error : `Profile Not Found.`})
      }
      res.status(200).json(profile)
    } catch (error) {
      res.status(500).json({error : `Failed To Fetch Profiles`})
    }
  });
  

module.exports = ProfileRouter;
