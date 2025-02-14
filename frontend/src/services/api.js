// // frontend/src/services/api.js
// import axios from "axios";

// // Base URL for your backend API, set in your .env file as REACT_APP_API_URL
// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// // Function to generate study plan via backend API
// export const generateStudyPlan = async (prompt, topicType) => {
//   try {
//     const response = await axios.post(`${API_URL}/study-plans/generate`, {
//       prompt,
//       topicType
//     });
//     return response.data.studyPlan;
//   } catch (error) {
//     console.error("Error generating study plan:", error);
//     return "Error generating study plan.";
//   }
// };

// // Add additional API helper functions as needed








import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const generateStudyPlan = async (prompt, topicType) => {
  try {
    const response = await axios.post(`${API_URL}/study-plans/generate`, { prompt, topicType });
    return response.data.studyPlan;
  } catch (error) {
    console.error("Error generating study plan:", error);
    return "Error generating study plan.";
  }
};
