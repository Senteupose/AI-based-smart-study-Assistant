// import React, { useContext, useState } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Box,
//   LinearProgress,
//   Modal,
//   TextField
// } from "@mui/material";
// import { AuthContext } from "../AuthContext";
// import { generateStudyPlan } from "../services/api";

// // Modal style
// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [progress, setProgress] = useState(50);
//   const [studyPlan, setStudyPlan] = useState(null);
//   const [preferences, setPreferences] = useState({ preferredTime: "", subjects: "" });
//   const [target, setTarget] = useState("");
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [question, setQuestion] = useState("");
//   const [aiResult, setAiResult] = useState("");

//   const [planModalOpen, setPlanModalOpen] = useState(false);
//   const [preferencesModalOpen, setPreferencesModalOpen] = useState(false);
//   const [targetsModalOpen, setTargetsModalOpen] = useState(false);
//   const [uploadModalOpen, setUploadModalOpen] = useState(false);
//   const [qaModalOpen, setQaModalOpen] = useState(false);
//   const [loadingPlan, setLoadingPlan] = useState(false);

//   const handleGenerateStudyPlan = async () => {
//     setLoadingPlan(true);
//     try {
//       const prompt = `Generate a personalized study plan for a student with preferences: ${JSON.stringify(preferences)} and current progress of ${progress}%. Provide a daily schedule and study tips.`;
//       const aiPlan = await generateStudyPlan(prompt, "study plan");
//       setStudyPlan(aiPlan);
//       alert("AI study plan generated.");
//       setPlanModalOpen(false);
//     } catch (error) {
//       console.error("Error generating study plan:", error);
//       alert("Error generating study plan.");
//     } finally {
//       setLoadingPlan(false);
//     }
//   };

//   const handleSavePreferences = () => {
//     alert("Preferences saved!");
//     setPreferencesModalOpen(false);
//   };

//   const handleSaveTarget = () => {
//     alert(`Semester target "${target}" saved!`);
//     setTargetsModalOpen(false);
//   };

//   const handleFileUpload = (e) => {
//     setUploadedFile(e.target.files[0]);
//   };

//   const handleProcessFile = async () => {
//     const prompt = `Based on the uploaded file named ${uploadedFile ? uploadedFile.name : "unknown"}, generate short notes and exam questions.`;
//     const result = await generateStudyPlan(prompt, "file processing");
//     setAiResult(result);
//     alert(`AI generated notes: ${result}`);
//     setUploadModalOpen(false);
//   };

//   const handleAskQuestion = async () => {
//     const prompt = `Answer this question: ${question}`;
//     const answer = await generateStudyPlan(prompt, "question answer");
//     setAiResult(answer);
//     alert(`AI Answer: ${answer}`);
//     setQaModalOpen(false);
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       {user ? (
//         <>
//           <Typography variant="h4" gutterBottom>Dashboard</Typography>
//           <Typography variant="h6" gutterBottom>Welcome, {user.username}!</Typography>
//           <Grid container spacing={3}>
//             {/* Study Progress */}
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">Study Progress</Typography>
//                   <Box sx={{ mt: 2 }}>
//                     <Typography variant="body2">Progress: {progress}%</Typography>
//                     <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
//                   </Box>
//                   <Box sx={{ mt: 2 }}>
//                     <Button variant="outlined" onClick={() => setProgress((prev) => Math.min(prev + 10, 100))}>
//                       Increase Progress
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//             {/* Study Plan */}
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">Study Plan</Typography>
//                   {loadingPlan ? (
//                     <Typography variant="body2">Generating plan...</Typography>
//                   ) : studyPlan ? (
//                     <Typography variant="body2">{studyPlan}</Typography>
//                   ) : (
//                     <Typography variant="body2">No plan generated yet.</Typography>
//                   )}
//                 </CardContent>
//                 <Box sx={{ p: 2 }}>
//                   <Button variant="contained" fullWidth onClick={() => setPlanModalOpen(true)}>
//                     Create / Get Study Plan
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//             {/* Preferences */}
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">Study Preferences</Typography>
//                   <Typography variant="body2">Customize your experience.</Typography>
//                 </CardContent>
//                 <Box sx={{ p: 2 }}>
//                   <Button variant="contained" fullWidth onClick={() => setPreferencesModalOpen(true)}>
//                     Update Preferences
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//             {/* Semester Targets */}
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">Semester Targets</Typography>
//                   <Typography variant="body2">Set and monitor goals.</Typography>
//                 </CardContent>
//                 <Box sx={{ p: 2 }}>
//                   <Button variant="contained" fullWidth onClick={() => setTargetsModalOpen(true)}>
//                     Set Targets
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//             {/* File Upload */}
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">Upload File</Typography>
//                   <Typography variant="body2">Upload files to generate notes and exam questions.</Typography>
//                 </CardContent>
//                 <Box sx={{ p: 2 }}>
//                   <Button variant="contained" fullWidth onClick={() => setUploadModalOpen(true)}>
//                     Upload File
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//             {/* AI Q&A */}
//             <Grid item xs={12} md={6}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">Ask a Question</Typography>
//                   <Typography variant="body2">Get personalized AI answers.</Typography>
//                 </CardContent>
//                 <Box sx={{ p: 2 }}>
//                   <Button variant="contained" fullWidth onClick={() => setQaModalOpen(true)}>
//                     Ask Question
//                   </Button>
//                 </Box>
//               </Card>
//             </Grid>
//           </Grid>

//           {/* Modals */}
//           <Modal open={planModalOpen} onClose={() => setPlanModalOpen(false)}>
//             <Box sx={modalStyle}>
//               <Typography variant="h6" gutterBottom>Study Plan Options</Typography>
//               <Button variant="contained" fullWidth sx={{ mb: 2 }} onClick={handleGenerateStudyPlan}>
//                 Get AI Recommended Study Plan
//               </Button>
//               <Button variant="outlined" fullWidth onClick={() => alert("Navigate to custom study plan page.")}>
//                 Create My Own Study Plan
//               </Button>
//             </Box>
//           </Modal>

//           <Modal open={preferencesModalOpen} onClose={() => setPreferencesModalOpen(false)}>
//             <Box sx={modalStyle}>
//               <Typography variant="h6" gutterBottom>Update Preferences</Typography>
//               <TextField
//                 fullWidth
//                 label="Preferred Study Time"
//                 value={preferences.preferredTime}
//                 onChange={(e) => setPreferences({ ...preferences, preferredTime: e.target.value })}
//                 sx={{ mb: 2 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Favorite Subjects"
//                 value={preferences.subjects}
//                 onChange={(e) => setPreferences({ ...preferences, subjects: e.target.value })}
//                 sx={{ mb: 2 }}
//               />
//               <Button variant="contained" fullWidth onClick={handleSavePreferences}>
//                 Save Preferences
//               </Button>
//             </Box>
//           </Modal>

//           <Modal open={targetsModalOpen} onClose={() => setTargetsModalOpen(false)}>
//             <Box sx={modalStyle}>
//               <Typography variant="h6" gutterBottom>Semester Targets</Typography>
//               <TextField
//                 fullWidth
//                 label="Enter your target"
//                 value={target}
//                 onChange={(e) => setTarget(e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//               <Button variant="contained" fullWidth onClick={handleSaveTarget}>
//                 Save Target
//               </Button>
//             </Box>
//           </Modal>

//           <Modal open={uploadModalOpen} onClose={() => setUploadModalOpen(false)}>
//             <Box sx={modalStyle}>
//               <Typography variant="h6" gutterBottom>Upload File for AI Processing</Typography>
//               <input type="file" onChange={handleFileUpload} style={{ marginBottom: "16px" }} />
//               <Button variant="contained" fullWidth onClick={handleProcessFile}>
//                 Process File
//               </Button>
//             </Box>
//           </Modal>

//           <Modal open={qaModalOpen} onClose={() => setQaModalOpen(false)}>
//             <Box sx={modalStyle}>
//               <Typography variant="h6" gutterBottom>Ask a Question</Typography>
//               <TextField
//                 fullWidth
//                 label="Your question"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 sx={{ mb: 2 }}
//               />
//               <Button variant="contained" fullWidth onClick={handleAskQuestion}>
//                 Get Answer
//               </Button>
//             </Box>
//           </Modal>
//         </>
//       ) : (
//         <Typography variant="h6">Please log in to view your dashboard.</Typography>
//       )}
//     </Container>
//   );
// };

// export default Dashboard;













import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  LinearProgress,
  Modal,
  TextField,
  Fade
} from "@mui/material";
import { AuthContext } from "../AuthContext";
import { generateStudyPlan } from "../services/api";

// Modal style for MUI
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #1976d2",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState(60); // sample progress value
  const [studyPlan, setStudyPlan] = useState(null);
  const [preferences, setPreferences] = useState({ preferredTime: "", subjects: "" });
  const [target, setTarget] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [aiResult, setAiResult] = useState("");

  // Modal state controls
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const [preferencesModalOpen, setPreferencesModalOpen] = useState(false);
  const [targetsModalOpen, setTargetsModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [qaModalOpen, setQaModalOpen] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);

  // Handler for generating study plan via AI
  const handleGenerateStudyPlan = async () => {
    setLoadingPlan(true);
    try {
      const prompt = `Generate a personalized study plan for a student with preferences: ${JSON.stringify(
        preferences
      )} and current progress of ${progress}%. Provide a daily schedule, study tips, and recommended resources.`;
      const aiPlan = await generateStudyPlan(prompt, "study plan");
      setStudyPlan(aiPlan);
      alert("AI study plan generated.");
      setPlanModalOpen(false);
    } catch (error) {
      console.error("Error generating study plan:", error);
      alert("Error generating study plan.");
    } finally {
      setLoadingPlan(false);
    }
  };

  const handleSavePreferences = () => {
    // Save preferences to your backend or local storage
    alert("Preferences saved!");
    setPreferencesModalOpen(false);
  };

  const handleSaveTarget = () => {
    // Save target value to your backend or state
    alert(`Semester target "${target}" saved!`);
    setTargetsModalOpen(false);
  };

  const handleFileUpload = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleProcessFile = async () => {
    const prompt = `Based on the uploaded file named ${uploadedFile ? uploadedFile.name : "unknown"}, generate short notes and exam questions.`;
    const result = await generateStudyPlan(prompt, "file processing");
    setAiResult(result);
    alert(`AI generated notes: ${result}`);
    setUploadModalOpen(false);
  };

  const handleAskQuestion = async () => {
    const prompt = `Answer this question: ${question}`;
    const answer = await generateStudyPlan(prompt, "question answer");
    setAiResult(answer);
    alert(`AI Answer: ${answer}`);
    setQaModalOpen(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      {user ? (
        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Welcome, {user.usernamee}!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Here’s your personalized dashboard.
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>
              {/* Study Progress Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5">Study Progress</Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        Current Progress: {progress}%
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: "#e0e0e0",
                          "& .MuiLinearProgress-bar": { backgroundColor: "#1976d2" },
                          mt: 1,
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          setProgress((prev) => Math.min(prev + 10, 100))
                        }
                      >
                        Increase Progress
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              {/* Study Plan Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5">Study Plan</Typography>
                    {loadingPlan ? (
                      <Typography variant="body2">Generating plan...</Typography>
                    ) : studyPlan ? (
                      <Typography variant="body2" gutterBottom>
                        {studyPlan}
                      </Typography>
                    ) : (
                      <Typography variant="body2">
                        No study plan generated yet.
                      </Typography>
                    )}
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => setPlanModalOpen(true)}
                    >
                      Get AI Study Plan
                    </Button>
                  </Box>
                </Card>
              </Grid>
              {/* Study Preferences Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5">Study Preferences</Typography>
                    <Typography variant="body2">
                      Customize your learning experience.
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => setPreferencesModalOpen(true)}
                    >
                      Update Preferences
                    </Button>
                  </Box>
                </Card>
              </Grid>
              {/* Semester Targets Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5">Semester Targets</Typography>
                    <Typography variant="body2">
                      Set and track your academic goals.
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => setTargetsModalOpen(true)}
                    >
                      Set Targets
                    </Button>
                  </Box>
                </Card>
              </Grid>
              {/* File Upload Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5">Upload File</Typography>
                    <Typography variant="body2">
                      Upload files to generate notes and exam questions.
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => setUploadModalOpen(true)}
                    >
                      Upload File
                    </Button>
                  </Box>
                </Card>
              </Grid>
              {/* AI Q&A Card */}
              <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h5">Ask a Question</Typography>
                    <Typography variant="body2">
                      Get personalized answers from our AI.
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => setQaModalOpen(true)}
                    >
                      Ask Question
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>

            {/* Modals */}
            {/* Study Plan Modal */}
            <Modal open={planModalOpen} onClose={() => setPlanModalOpen(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" gutterBottom>
                  Study Plan Options
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mb: 2 }}
                  onClick={handleGenerateStudyPlan}
                >
                  Get AI Recommended Plan
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => alert("Navigate to custom plan creation page.")}
                >
                  Create My Own Plan
                </Button>
              </Box>
            </Modal>
            {/* Preferences Modal */}
            <Modal open={preferencesModalOpen} onClose={() => setPreferencesModalOpen(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" gutterBottom>
                  Update Study Preferences
                </Typography>
                <TextField
                  fullWidth
                  label="Preferred Study Time"
                  value={preferences.preferredTime}
                  onChange={(e) =>
                    setPreferences({ ...preferences, preferredTime: e.target.value })
                  }
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Favorite Subjects"
                  value={preferences.subjects}
                  onChange={(e) =>
                    setPreferences({ ...preferences, subjects: e.target.value })
                  }
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" fullWidth onClick={handleSavePreferences}>
                  Save Preferences
                </Button>
              </Box>
            </Modal>
            {/* Semester Targets Modal */}
            <Modal open={targetsModalOpen} onClose={() => setTargetsModalOpen(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" gutterBottom>
                  Semester Targets
                </Typography>
                <TextField
                  fullWidth
                  label="Enter your target"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" fullWidth onClick={handleSaveTarget}>
                  Save Target
                </Button>
              </Box>
            </Modal>
            {/* File Upload Modal */}
            <Modal open={uploadModalOpen} onClose={() => setUploadModalOpen(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" gutterBottom>
                  Upload File for AI Processing
                </Typography>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  style={{ marginBottom: "16px" }}
                />
                <Button variant="contained" fullWidth onClick={handleProcessFile}>
                  Process File
                </Button>
              </Box>
            </Modal>
            {/* AI Q&A Modal */}
            <Modal open={qaModalOpen} onClose={() => setQaModalOpen(false)}>
              <Box sx={modalStyle}>
                <Typography variant="h6" gutterBottom>
                  Ask a Question
                </Typography>
                <TextField
                  fullWidth
                  label="Your question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" fullWidth onClick={handleAskQuestion}>
                  Get Answer
                </Button>
              </Box>
            </Modal>
          </Box>
        </Fade>
      ) : (
        <Typography variant="h6">Please log in to view your dashboard.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;
