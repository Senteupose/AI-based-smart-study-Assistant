// // backend/routes/authRoutes.js
// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser } = require('../controllers/authController');

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;




// // backend/routes/authRoutes.js
// const express = require('express');
// const router = express.Router();

// // Import the auth controller functions
// const { registerUser, loginUser } = require('../controllers/authController');

// // Use the imported functions as route callbacks
// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;






const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
