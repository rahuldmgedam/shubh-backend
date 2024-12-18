// import express from "express";
// import multer from "multer";
// import Image from "../models/Image.js";

// // const Image = require('../models/Image.js')
// const router = express.Router();

// // Configure Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Directory to save files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname); // Unique filename
//   },
// });

// // File filter to accept images only
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image/")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files are allowed!"), false);
//   }
// };

// // Multer upload middleware
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
// });

// // Upload route
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const image = new Image({
//       name: req.body.name,
//       imageUrl: req.file.path,
//     });

//     const savedImage = await image.save();
//     res.status(201).json({
//       message: "Image uploaded successfully",
//       data: savedImage,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Fetch all uploaded images
// router.get("/", async (req, res) => {
//   try {
//     const images = await Image.find();
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
