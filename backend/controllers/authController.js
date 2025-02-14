// // backend/controllers/authController.js
// const User = require('../models/User');

// // Register a new user
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     // TODO: Add validations and password hashing
//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Registration failed' });
//   }
// };

// // Login user
// exports.loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     // TODO: Add authentication logic (compare passwords, generate tokens, etc.)
//     const user = await User.findOne({ username, password });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     res.json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };













// const User = require('../models/User');

// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Basic validation
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Check if the user already exists (by email)
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     // Create new user. We'll store the name in the username field.
//     const newUser = new User({ username: name, email, password });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ error: 'Registration failed' });
//   }
// };








const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const newUser = new User({ username: name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

