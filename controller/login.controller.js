


// const jwt = require('jsonwebtoken');
// const { User } = require('../models/register.model');

// const createLogin =  async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Check if user exists
//       const user =await User.find((user) => user.email === email);
//       if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }
  
//       // Compare passwords
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//       }
  
//       // Generate a JWT
//       const token = jwt.sign({ id: user.id, email: user.email }, 'secret_key', {
//         expiresIn: '24h',
//       });
  
//       res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//       console.error('Error logging in:', error);
//       res.status(500).json({ message: 'Server error', error: error.message });
//     }
//   }

//   module.exports = {createLogin}

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/register.model");

const createLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists in the database
    const user = await User.findOne({ email }); // Correct method for Mongoose
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT
    const token = jwt.sign({ id: user._id, email: user.email }, "secret_key", {
      expiresIn: "24h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createLogin };
