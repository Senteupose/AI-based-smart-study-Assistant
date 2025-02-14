// import React, { useState, useContext } from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import { AuthContext } from "../AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(username, password);
//     navigate("/dashboard");
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" gutterBottom>Login</Typography>
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
//           Login
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Login;













import React, { useState, useContext } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      // Option 1: Call your backend API via axios (uncomment and configure if needed)
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
      // login(response.data.user);

      // Option 2: Directly use the login function from AuthContext (for demo purposes)
      login(email, password);

      // Set personalized success message
      setSuccessMessage(`Dear ${email}, you have logged in successfully.`);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      {successMessage && (
        <Typography variant="body1" color="primary" gutterBottom>
          {successMessage}
        </Typography>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <Grid container spacing={2}>
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
        </Grid>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
