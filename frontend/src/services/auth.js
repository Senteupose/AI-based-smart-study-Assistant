// // frontend/src/services/auth.js
// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// // Function to register a user
// export const registerUser = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/register`, { username, password });
//     return response.data;
//   } catch (error) {
//     console.error("Registration error:", error);
//     throw error;
//   }
// };

// // Function to log in a user
// export const loginUser = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, { username, password });
//     return response.data;
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
// };






import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
