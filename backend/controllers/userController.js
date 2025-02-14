// // backend/controllers/userController.js
// const User = require('../models/User');

// exports.getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json({ user });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to get user profile' });
//   }
// };

// // Add other functions as needed (update profile, etc.)


// backend/controllers/userController.js
const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ message: 'Failed to get user profile' });
  }
};
