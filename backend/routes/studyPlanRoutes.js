// // backend/routes/studyPlanRoutes.js
// const express = require('express');
// const router = express.Router();

// // Import generateStudyPlan from the studyPlanController
// const { generateStudyPlan } = require('../controllers/studyPlanController');

// router.post('/generate', generateStudyPlan);

// module.exports = router;








const express = require('express');
const router = express.Router();
const { generateStudyPlan } = require('../controllers/studyPlanController');

router.post('/generate', generateStudyPlan);

module.exports = router;
