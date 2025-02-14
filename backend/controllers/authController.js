// // backend/controllers/authController.js
// const User = require('../models/User');

// // Registration endpoint
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'A user with that email already exists.' });
//     }

//     // Create and save the new user
//     const user = new User({ name, email, password });
//     await user.save();

//     // Send a feedback message including the user's name
//     res.status(201).json({ message: `${user.name}, you have successfully registered! Please proceed to login.` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error during registration.' });
//   }
// };

// // Login endpoint
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       // In production, avoid specifying which part failed for security reasons
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }

//     // Send a feedback message with the user's name and include the user object if needed
//     res.status(200).json({ message: `Welcome, ${user.name}! You are now logged in.`, user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error during login.' });
//   }
// };



// // backend/controllers/authController.js
// const User = require('../models/User');

// // Registration endpoint
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
    
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'A user with that email already exists.' });
//     }

//     // Create a new user
//     const user = new User({ name, email, password });
//     await user.save();

//     res.status(201).json({ message: `${user.name}, you have successfully registered! Please proceed to login.` });
//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ message: 'Registration failed' });
//   }
// };

// // Login endpoint
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: 'Invalid email or password.' });
//     }

//     res.status(200).json({ message: `Welcome, ${user.name}! You are now logged in.`, user });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Login failed' });
//   }
// };





// backend/controllers/authController.js
const User = require('../models/User');

// Registration endpoint: receives user data, saves a new user, and returns a personalized message.
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'A user with that email already exists.' });
    }

    // Create new user (in production, hash the password)
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: `${user.name}, you have successfully registered! Please proceed to login.` });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
};

// Login endpoint: validates credentials and returns a personalized welcome message with user data.
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    res.status(200).json({ message: `Welcome, ${user.name}! You are now logged in.`, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};
