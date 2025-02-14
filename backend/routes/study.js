// // backend/routes/study.js
// const express = require('express');
// const router = express.Router();
// const studyController = require('../controllers/studyController');

// router.post('/:userId', studyController.getStudyPlan);

// module.exports = router;





// // backend/routes/study.js
// const express = require('express');
// const router = express.Router();
// const studyController = require('../controllers/studyController');

// // Route for generating a study plan
// router.post('/study-plan', studyController.generateStudyPlan);

// module.exports = router;




// backend/routes/study.js
const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController');

// AI study plan generation route
router.post('/study-plan', studyController.generateStudyPlan);

module.exports = router;
