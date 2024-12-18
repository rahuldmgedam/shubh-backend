const mongoose = require("mongoose");

const BoysProfileSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  profession: { type: String, required: true },
  image: { type: String, required: true },
});

const BoysProfile = mongoose.model("BoysProfile", BoysProfileSchema);
module.exports = BoysProfile;
