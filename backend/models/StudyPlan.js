// backend/models/StudyPlan.js
const mongoose = require('mongoose');

const StudyPlanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudyPlan', StudyPlanSchema);
