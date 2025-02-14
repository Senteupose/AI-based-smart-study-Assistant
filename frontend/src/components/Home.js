import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Fade,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
import featureIcon from "../assets/feature-icon.png";

const features = [
  { title: "AI-Powered Study Plans", desc: "Personalized recommendations based on your learning style." },
  { title: "Progress Tracking", desc: "Monitor your academic performance with insightful analytics." },
  { title: "Interactive Learning", desc: "Engage with quizzes, flashcards, and study challenges." },
];

const Home = () => {
  const theme = useTheme();
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: isDarkMode ? "white" : "black",
        p: 3,
      }}
    >
      <Container>
        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h3" gutterBottom>
              Welcome to Smart Study Assistant
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Your digital partner for personalized study plans and progress tracking.
            </Typography>
          </Box>
        </Fade>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
            sx={{ width: { xs: "100%", sm: "auto" }, mr: 2 }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/register"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Register
          </Button>
        </Box>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
                <img src={featureIcon} alt="Feature Icon" width={50} />
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">{feature.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
