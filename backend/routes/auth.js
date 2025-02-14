// // backend/routes/auth.js
// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Define a POST route for registration
// router.post('/register', authController.register);

// // Define a POST route for login
// router.post('/login', authController.login);

// module.exports = router;


// // backend/routes/auth.js
// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Route for user registration
// router.post('/register', authController.register);

// // Route for user login
// router.post('/login', authController.login);

// module.exports = router;





// // backend/routes/auth.js
// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Registration route
// router.post('/register', authController.register);

// // Login route
// router.post('/login', authController.login);

// module.exports = router;









// // backend/routes/auth.js
// import express from 'express';
// import User from '../models/user.js'; // Your Mongoose user model
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password are required.' });
//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', user, token });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'An error occurred during login.' });
//   }
// });

// export default router;







// backend/routes/auth.js
import express from 'express';
import User from '../models/User.js'; // Your Mongoose user model
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Login route (already defined)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login.' });
  }
});

// Add a Registration Route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }
    
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    
    // Optionally, generate a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.status(201).json({ message: 'Registration successful', user: newUser, token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'An error occurred during registration.' });
  }
});

export default router;
