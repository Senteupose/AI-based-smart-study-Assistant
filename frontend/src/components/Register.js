// import React, { useState } from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace the API URL with your backend endpoint
//       await axios.post(process.env.REACT_APP_API_URL + "/auth/register", { username, password });
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (error) {
//       alert("Registration failed!");
//       console.error(error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" gutterBottom>Register</Typography>
//       <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//         <TextField
//           fullWidth
//           label="Username"
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//           Register
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Register;









import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Basic client-side validation
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Send registration data to your backend
      const response = await axios.post(
        process.env.REACT_APP_API_URL + '/auth/register',
        { name, email, password }
      );
      // If registration is successful, show a personalized success message
      setSuccessMessage(`Dear ${name}, you have logged in successfully.`);
      // Optionally, redirect to the dashboard after a delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      {successMessage ? (
        <Typography variant="body1" color="primary" gutterBottom>
          {successMessage}
        </Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {/* Name Field */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            {/* Email Field */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            {/* Password Field */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            {/* Confirm Password Field */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Register
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Register;
