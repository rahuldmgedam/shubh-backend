

const {User} = require('../models/register.model');
const bcrypt = require('bcrypt');

const createRegister = async (req, res) => {
    const { name, email, password, gender } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        gender,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      res.status(500).json({ message: 'Error during registration:', error: error.message });
    }
  }


 const getRegister =async (req,res)=>{
          try {
            const getData = await User.find();
            res.status(200).json(getData);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
  }


  module.exports = {createRegister,getRegister}