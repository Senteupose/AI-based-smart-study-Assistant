// // backend/routes/user.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/:id', userController.getUserProfile);
// // You can add routes to update user profiles here.

// module.exports = router;





// // backend/routes/user.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // Route to get user profile (e.g., GET /api/user/:id)
// router.get('/:id', userController.getUserProfile);

// module.exports = router;


// // backend/models/User.js
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // other fields...
// });

// const User = mongoose.model('User', userSchema);
// export default User;



// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   // other fields...
// });

// const User = mongoose.model('User', userSchema);
// export default User;



// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields as needed...
});

const User = mongoose.model('User', userSchema);
export default User;
