// // backend/controllers/studyPlanController.js
// // Example: Generate study plan using AI API (backend securely calls external AI API)
// const axios = require('axios');

// exports.generateStudyPlan = async (req, res) => {
//   try {
//     const { prompt, preferences, progress } = req.body;
//     // Replace the following URL and headers with your AI API details
//     const response = await axios.post('https://api.example.com/v1/study-plan', {
//       model: 'your-model',
//       prompt,
//       preferences,
//       progress
//     }, {
//       headers: {
//         'Authorization': `Bearer ${process.env.AI_API_KEY}`,
//         'Content-Type': 'application/json'
//       }
//     });
//     res.json({ studyPlan: response.data });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to generate study plan' });
//   }
// };








// // backend/controllers/studyPlanController.js
// const axios = require('axios');

// exports.generateStudyPlan = async (req, res) => {
//   try {
//     const { prompt, preferences, progress } = req.body;
//     // Replace with your actual AI API endpoint and configuration
//     const response = await axios.post('https://api.example.com/v1/study-plan', {
//       model: 'your-model',
//       prompt,
//       preferences,
//       progress,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${process.env.AI_API_KEY}`,
//         'Content-Type': 'application/json'
//       }
//     });
//     res.json({ studyPlan: response.data });
//   } catch (error) {
//     console.error("Error generating study plan:", error);
//     res.status(500).json({ error: 'Failed to generate study plan' });
//   }
// };









// // backend/controllers/studyPlanController.js
// const axios = require('axios');

// exports.generateStudyPlan = async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const systemMessage = `
//       You are an AI-based study assistant. Provide personalized study plans, resource recommendations, and time management strategies.
//       Ensure that your response is detailed and actionable.
//     `;
//     const response = await axios.post(
//       'https://api.groq.ai/v1/chat/completions',
//       {
//         model: 'llama-3.3-70b-versatile',  // Replace with the correct model if needed
//         messages: [
//           { role: 'system', content: systemMessage },
//           { role: 'user', content: prompt }
//         ],
//         max_tokens: 250,
//         temperature: 0.7,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
//         }
//       }
//     );
//     const studyPlan = response.data.choices[0].message.content.trim();
//     res.json({ studyPlan });
//   } catch (error) {
//     console.error("Groq API error:", error.response ? error.response.data : error.message);
//     res.status(500).json({ error: "Failed to generate study plan" });
//   }
// };







const axios = require('axios');

exports.generateStudyPlan = async (req, res) => {
  try {
    const { prompt } = req.body;
    const systemMessage = `
      You are an AI-based study assistant. Provide personalized study plans, recommend study materials,
      and offer time management tips.
    `;
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",  // Adjust as needed
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: prompt }
        ],
        max_tokens: 250,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const studyPlan = response.data.choices[0].message.content.trim();
    res.json({ studyPlan });
  } catch (error) {
    console.error("Error generating study plan:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to generate study plan" });
  }
};
