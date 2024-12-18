// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { registerRouter } = require('./routes/register.routes');
// const { loginRouter } = require('./routes/login.routes');
// const multer = require("multer");
// const path = require("path");

// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json())

// const fs = require("fs");

// const uploadsDir = path.join(__dirname, "uploads");

// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir);
// }


// app.get("/",(req,res)=>{
//     res.send("Hello World to matrimonial site")
// });



// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));


//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads/"); // Directory to save uploaded images
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
//     },
//   });
  
//   // Middleware for handling image uploads
//   const upload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//       const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//       if (!allowedTypes.includes(file.mimetype)) {
//         cb(new Error("Only JPEG, PNG, and JPG files are allowed"));
//       } else {
//         cb(null, true);
//       }
//     },
//   });

//   app.post("/upload", upload.single("image"), (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }
//     res.status(200).json({
//       message: "File uploaded successfully!",
//       file: req.file,
//     });
//   });
  

//   app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use(express.json());
// app.use("/register",registerRouter)
// app.use("/login",loginRouter)



// // Start the Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const BoysProfileRouter = require("./routes/boysProfile.routes");
const ProfileRouter = require("./routes/profile.routes");
require("dotenv").config();

const cloudinary = require('cloudinary').v2;


// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


async function uploadImageToCloudinary(filePath) {
  try {
      const result = await cloudinary.uploader.upload(filePath, {
          folder: "profile_images" // Optional: Folder name in Cloudinary
      });
      return result.secure_url; // Cloudinary image URL
  } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
  }
}


// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Save files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});

// Middleware for handling image uploads
const upload = multer({ storage });

// Image upload route
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).send({ message: "File uploaded successfully!", file: req.file });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));


  // app.use("/register",registerRouter)
// app.use("/login",loginRouter)
app.use("/boysProfile",BoysProfileRouter);
app.use("/profile",ProfileRouter)
app.use("/",(req,res)=>{
  res.send("matrimonial server working")
})


// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
