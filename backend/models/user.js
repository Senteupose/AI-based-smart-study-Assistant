// // backend/models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true } // In production, store hashed passwords
// });

// module.exports = mongoose.model('User', userSchema);





// // backend/models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }, // Note: In production, hash passwords!
//   studyPreferences: { type: Object },          // Optional: store study preferences
//   studyHabits: { type: Object },               // Optional: store study habits data
//   examResults: { type: Array },                // Optional: store exam/assessment results
//   targets: { type: Object }                    // Optional: store academic targets
// });

// module.exports = mongoose.model('User', userSchema);





// // backend/models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }, // In production, store hashed passwords!
//   studyPreferences: { type: Object },          // e.g., learning styles, subject interests
//   studyHabits: { type: Object },               // e.g., hours per week, preferred study times
//   examResults: { type: Array },                // e.g., previous exam scores
//   targets: { type: Object }                    // e.g., desired grades/targets
// });

// module.exports = mongoose.model('User', userSchema);







// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields as needed...
});

const User = mongoose.model('User', userSchema);
export default User;
