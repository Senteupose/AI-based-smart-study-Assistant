// // backend/models/StudyPlan.js
// const mongoose = require('mongoose');

// const StudyPlanSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   recommendations: { type: Object }, // e.g., recommended materials, study schedule
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('StudyPlan', StudyPlanSchema);


// // backend/models/StudyPlan.js
// const mongoose = require('mongoose');

// const studyPlanSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   planDetails: { type: Object }, // Details of the study plan (e.g., schedule, recommended materials)
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('StudyPlan', studyPlanSchema);




// backend/models/StudyPlan.js
const mongoose = require('mongoose');

const studyPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planDetails: { type: Object }, // Contains schedule, resource recommendations, time management strategies, etc.
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudyPlan', studyPlanSchema);
