const BoysProfile = require("../models/boysProfile.model");
// Get all profiles
exports.getProfiles = async (req, res) => {
  try {
    const profiles = await BoysProfile.find();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profiles." });
  }
};

// Add a new profile
exports.addProfile = async (req, res) => {
  const { id, name, age, location, profession, image } = req.body;

  try {
    const newProfile = new BoysProfile({ id, name, age, location, profession, image });
    await newProfile.save();
    res.status(201).json({ message: "Profile added successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to add profile." });
  }
};

// Delete a profile
exports.deleteProfile = async (req, res) => {
  const { id } = req.params;

  try {
    await BoysProfile.findOneAndDelete({ id });
    res.status(200).json({ message: "Profile deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete profile." });
  }
};
