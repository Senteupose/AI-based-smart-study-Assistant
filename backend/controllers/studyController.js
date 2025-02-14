// // backend/controllers/studyController.js
// const axios = require('axios');
// const StudyPlan = require('../models/StudyPlan');
// const { AI_API_KEY } = require('../config/config');

// exports.getStudyPlan = async (req, res) => {
//   try {
//     // Example: call an external AI service with the API key.
//     // You can pass the user's study habits, preferences, etc. to get personalized recommendations.
//     const response = await axios.post('https://external-ai-service.example.com/recommend', {
//       userId: req.params.userId,
//       // Additional user data could be passed here.
//     }, {
//       headers: { 'Authorization': `Bearer ${AI_API_KEY}` }
//     });
    
//     const recommendations = response.data;
    
//     // Optionally, store the recommendation in the database:
//     const studyPlan = new StudyPlan({ userId: req.params.userId, recommendations });
//     await studyPlan.save();

//     res.json({ studyPlan });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to get study plan' });
//   }
// };



// // backend/controllers/studyController.js
// const StudyPlan = require('../models/StudyPlan');

// exports.generateStudyPlan = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     // Simulated study plan generation (replace with actual AI logic or an API call to an AI microservice)
//     const planDetails = {
//       dailySchedule: 'Study 2 hours each day with 10-minute breaks every hour.',
//       recommendedMaterials: ['Textbook A', 'Online Course B'],
//       timeManagementTip: 'Start with the most challenging subject first.'
//     };

//     const studyPlan = new StudyPlan({ userId, planDetails });
//     await studyPlan.save();

//     res.status(201).json({ message: 'Study plan generated successfully', studyPlan });
//   } catch (error) {
//     console.error('Generate study plan error:', error);
//     res.status(500).json({ message: 'Failed to generate study plan' });
//   }
// };


// backend/controllers/studyController.js
const StudyPlan = require('../models/StudyPlan');

// AI-driven study plan generation (stub)
// In a real application, you might call an external AI microservice or run an AI algorithm here.
exports.generateStudyPlan = async (req, res) => {
  try {
    const { userId } = req.body;
    
    // Simulated personalized study plan data
    const planDetails = {
      dailySchedule: 'Study 2 hours per day with short breaks. Begin with your hardest subject.',
      recommendedMaterials: ['Textbook A', 'Online Course B', 'Practice Tests'],
      timeManagementTip: 'Prioritize tasks and set fixed study periods.'
    };

    const studyPlan = new StudyPlan({ userId, planDetails });
    await studyPlan.save();

    res.status(201).json({ message: 'Study plan generated successfully', studyPlan });
  } catch (error) {
    console.error('Study plan generation error:', error);
    res.status(500).json({ message: 'Failed to generate study plan' });
  }
};
