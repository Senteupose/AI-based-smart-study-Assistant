// // backend/config/config.js
// module.exports = {
//     MONGO_URI: 'mongodb://localhost:27017/studyAssistant', // Update as needed
//     AI_API_KEY: 'YOUR_AI_API_KEY_HERE', // Replace with your external AI API key
//     PORT: process.env.PORT || 5000
//   };
  

// // backend/config/config.js
// module.exports = {
//   MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/studyAssistant',
//   PORT: process.env.PORT || 5001,
//   // You can add additional configuration such as an AI_API_KEY if needed.
// };



// backend/config/config.js
module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/studyAssistant',
  PORT: process.env.PORT || 5001,
  // Add any additional configuration such as AI_API_KEY if needed.
};

