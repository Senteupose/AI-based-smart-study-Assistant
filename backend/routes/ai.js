// // routes/ai.js
// const express = require('express');
// const fetch = require('node-fetch');
// require('dotenv').config();

// const router = express.Router();

// router.post('/chat', async (req, res) => {
//   const { prompt, topicType, userId } = req.body;

//   // Optionally: Retrieve additional user info from your database using userId
//   // and modify the prompt or system message accordingly.

//   const systemMessage = `You are an AI-based study assistant. Provide answers and approaches to help users learn effectively.
// Ensure each response is personalized and conversational.
// Provide resources and tips relevant to the topic: ${topicType}.`;

//   try {
//     const response = await fetch('https://api.groq.ai/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.GROQ_API_KEY}` // Your API key is secured here
//       },
//       body: JSON.stringify({
//         model: 'llama-3.3-70b-versatile',
//         messages: [
//           { role: 'system', content: systemMessage },
//           { role: 'user', content: prompt },
//           { role: 'user', content: 'Can you recommend resources (books, videos, quizzes) related to this topic?' }
//         ]
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Groq API error response:', errorData);
//       return res.status(response.status).json({ error: errorData.error ? errorData.error.message : 'Unknown error' });
//     }

//     const data = await response.json();
//     if (!data.choices || data.choices.length === 0) {
//       return res.status(500).json({ error: 'No data received from AI API' });
//     }
//     res.json({ message: data.choices[0].message.content.trim() });
//   } catch (error) {
//     console.error('Error calling AI API:', error);
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });

// module.exports = router;
















// // backend/routes/ai.js
// import express from 'express';
// import fetch from 'node-fetch'; // node-fetch v3 is now an ESM module
// // dotenv is already configured in server.js, but you can also import it here if needed
// // import dotenv from 'dotenv';
// // dotenv.config();

// const router = express.Router();

// router.post('/chat', async (req, res) => {
//   const { prompt, topicType, userId } = req.body;

//   // Optionally: Retrieve additional user info from your database using userId
//   // and modify the prompt or system message accordingly.

//   const systemMessage = `You are an AI-based study assistant. Provide answers and approaches to help users learn effectively.
// Ensure each response is personalized and conversational.
// Provide resources and tips relevant to the topic: ${topicType}.`;

//   try {
//     const response = await fetch('https://api.groq.ai/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.GROQ_API_KEY}` // Your API key from .env
//       },
//       body: JSON.stringify({
//         model: 'llama-3.3-70b-versatile',
//         messages: [
//           { role: 'system', content: systemMessage },
//           { role: 'user', content: prompt },
//           { role: 'user', content: 'Can you recommend resources (books, videos, quizzes) related to this topic?' }
//         ]
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Groq API error response:', errorData);
//       return res.status(response.status).json({ error: errorData.error ? errorData.error.message : 'Unknown error' });
//     }

//     const data = await response.json();
//     if (!data.choices || data.choices.length === 0) {
//       return res.status(500).json({ error: 'No data received from AI API' });
//     }
//     res.json({ message: data.choices[0].message.content.trim() });
//   } catch (error) {
//     console.error('Error calling AI API:', error);
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });

// export default router;













// // backend/routes/ai.js
// const express = require('express');
// const fetch = require('node-fetch');
// require('dotenv').config();

// const router = express.Router();

// router.post('/chat', async (req, res) => {
//   const { prompt, topicType, userId } = req.body;

//   const systemMessage = `You are an AI-based study assistant. Provide answers and approaches to help users learn effectively.
// Ensure each response is personalized and conversational.
// Provide resources and tips relevant to the topic: ${topicType}.`;

//   try {
//     const response = await fetch('https://api.groq.ai/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
//       },
//       body: JSON.stringify({
//         model: 'llama-3.3-70b-versatile',
//         messages: [
//           { role: 'system', content: systemMessage },
//           { role: 'user', content: prompt },
//           { role: 'user', content: 'Can you recommend resources (books, videos, quizzes) related to this topic?' }
//         ]
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Groq API error response:', errorData);
//       return res.status(response.status).json({ error: errorData.error ? errorData.error.message : 'Unknown error' });
//     }

//     const data = await response.json();
//     if (!data.choices || data.choices.length === 0) {
//       return res.status(500).json({ error: 'No data received from AI API' });
//     }
//     res.json({ message: data.choices[0].message.content.trim() });
//   } catch (error) {
//     console.error('Error calling AI API:', error);
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });

// module.exports = router;















// // backend/routes/ai.js
// import express from 'express';
// import fetch from 'node-fetch';
// import dotenv from 'dotenv';
// dotenv.config();

// const router = express.Router();

// router.post('/chat', async (req, res) => {
//   const { prompt, topicType, userId } = req.body;

//   const systemMessage = `You are an AI-based study assistant. Provide answers and approaches to help users learn effectively.
// Ensure each response is personalized and conversational.
// Provide resources and tips relevant to the topic: ${topicType}.`;

//   try {
//     const response = await fetch('https://api.groq.ai/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
//       },
//       body: JSON.stringify({
//         model: 'llama-3.3-70b-versatile',
//         messages: [
//           { role: 'system', content: systemMessage },
//           { role: 'user', content: prompt },
//           { role: 'user', content: 'Can you recommend resources (books, videos, quizzes) related to this topic?' }
//         ]
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Groq API error response:', errorData);
//       return res.status(response.status).json({ error: errorData.error ? errorData.error.message : 'Unknown error' });
//     }

//     const data = await response.json();
//     if (!data.choices || data.choices.length === 0) {
//       return res.status(500).json({ error: 'No data received from AI API' });
//     }
//     res.json({ message: data.choices[0].message.content.trim() });
//   } catch (error) {
//     console.error('Error calling AI API:', error);
//     res.status(500).json({ error: 'Error generating response' });
//   }
// });

// export default router;





// backend/routes/ai.js
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { prompt, topicType, userId } = req.body;

  const systemMessage = `You are an AI-based study assistant. Provide answers and approaches to help users learn effectively.
Ensure each response is personalized and conversational.
Provide resources and tips relevant to the topic: ${topicType}.`;

  try {
    const response = await fetch('https://api.groq.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: prompt },
          { role: 'user', content: 'Can you recommend resources (books, videos, quizzes) related to this topic?' }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq API error response:', errorData);
      return res.status(response.status).json({ error: errorData.error ? errorData.error.message : 'Unknown error' });
    }

    const data = await response.json();
    if (!data.choices || data.choices.length === 0) {
      return res.status(500).json({ error: 'No data received from AI API' });
    }
    res.json({ message: data.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error calling AI API:', error);
    res.status(500).json({ error: 'Error generating response' });
  }
});

export default router;
