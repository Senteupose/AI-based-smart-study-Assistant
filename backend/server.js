// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();

// // Ensure you have this middleware before your routes
// app.use(express.json());

// // Optionally, enable CORS
// app.use(cors());

// // Connect to MongoDB (adjust MONGO_URI as needed)
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/studyAssistant', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error("MongoDB connection error:", err));

// // Mount your auth routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// // Start the server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));










// // backend/server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const config = require('./config/config');

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());
// // Enable CORS
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(config.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error("MongoDB connection error:", err));

// // Mount routes
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const studyRoutes = require('./routes/study');

// app.use('/api/auth', authRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api', studyRoutes); // study plan generation at /api/study-plan

// // Start the server
// app.listen(config.PORT, () => {
//   console.log(`Server is running on port ${config.PORT}`);
// });



// // backend/server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const config = require('./config/config');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect(config.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error("MongoDB connection error:", err));

// // Mount routes
// const authRoutes = require('./routes/auth');
// const studyRoutes = require('./routes/study');

// app.use('/api/auth', authRoutes);
// app.use('/api', studyRoutes); // This makes the study plan endpoint available at /api/study-plan

// // Start the server
// app.listen(config.PORT, () => {
//   console.log(`Server is running on port ${config.PORT}`);
// });




// // server.js
// const express = require('express');
// const aiRoutes = require('./routes/ai');
// require('dotenv').config();

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Mount the AI integration routes under /api/ai
// app.use('/api/ai', aiRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



// // server.js
// // Import required modules
// const express = require('express');
// const aiRoutes = require('./routes/ai'); // Import your AI routes
// require('dotenv').config(); // Load environment variables from .env

// // Create an Express application instance
// const app = express();

// // Middleware to parse JSON bodies from incoming requests
// app.use(express.json());

// // Mount the AI integration routes under the "/api/ai" path
// app.use('/api/ai', aiRoutes);

// // Retrieve the port from environment variables; default to 5000 if not set
// const PORT = process.env.PORT || 5000;

// // Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });






// // server.js

// // Load environment variables from .env
// require('dotenv').config();

// const express = require('express');
// const app = express();

// // Use JSON middleware to parse JSON bodies from incoming requests
// app.use(express.json());

// // Retrieve API key from environment variables
// const apiKey = process.env.GROQ_API_KEY;
// console.log('Your API Key is:', apiKey); // For debugging purposes only; remove in production

// // Retrieve the port from environment variables; default to 5000 if not set
// const PORT = process.env.PORT || 5000;

// // Example route
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// // Additional routes can be added here, for example:
// // const aiRoutes = require('./routes/ai');
// // app.use('/api/ai', aiRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });









// // server.js

// // Load environment variables from .env
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// // Use JSON middleware to parse JSON bodies from incoming requests
// app.use(express.json());

// // Retrieve API key from environment variables (for demonstration)
// const apiKey = process.env.GROQ_API_KEY;
// console.log('Your API Key is:', apiKey);

// // Connect to MongoDB using Mongoose
// // Make sure to add a MONGO_URI variable to your .env file, e.g.,
// // MONGO_URI=mongodb://localhost:27017/your-database-name
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Database connected'))
//   .catch((err) => console.error('Database connection error:', err));

// // Retrieve the port from environment variables; default to 5000 if not set
// const PORT = process.env.PORT || 5000;

// // Example route
// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });







// // backend/server.js
// require('dotenv').config(); // Load environment variables from .env

// const express = require('express');
// const mongoose = require('mongoose'); // Mongoose for MongoDB
// const aiRoutes = require('./routes/ai'); // Your AI routes file

// const app = express();

// // Middleware to parse JSON bodies from incoming requests
// app.use(express.json());

// // Connect to MongoDB using the connection string from the .env file
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mount the AI integration routes under /api/ai
// app.use('/api/ai', aiRoutes);

// // Retrieve the port from environment variables (default to 5000)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));












// // backend/server.js
// import dotenv from 'dotenv';
// dotenv.config(); // Load environment variables from .env

// import express from 'express';
// import mongoose from 'mongoose';
// import aiRoutes from './routes/ai.js'; // Note the .js extension

// const app = express();

// // Middleware to parse JSON bodies from incoming requests
// app.use(express.json());

// // Connect to MongoDB using the connection string from the .env file
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mount the AI integration routes under /api/ai
// app.use('/api/ai', aiRoutes);

// // Retrieve the port from environment variables (default to 5000)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));










// // backend/server.js
// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const aiRoutes = require('./routes/ai'); // Make sure this file is in backend/routes/ai.js
// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Mount the AI integration routes under /api/ai
// app.use('/api/ai', aiRoutes);

// // Retrieve the port from environment variables (default to 5000)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));













// // backend/server.js
// import dotenv from 'dotenv';
// dotenv.config(); // Load environment variables

// import express from 'express';
// import mongoose from 'mongoose';
// import aiRoutes from './routes/ai.js'; // Note the .js extension

// const app = express();

// // Middleware to parse JSON bodies from incoming requests
// app.use(express.json());

// // Connect to MongoDB using the connection string from the .env file
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mount the AI integration routes under /api/ai
// app.use('/api/ai', aiRoutes);

// // Retrieve the port from environment variables (default to 5000)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
















// // backend/server.js
// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import mongoose from 'mongoose';
// import authRoutes from './routes/auth.js'; // Use your auth router file
// // (Also import any other routes you have, such as for AI)

// const app = express();

// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mount your auth routes
// app.use('/api/auth', authRoutes);
// // Mount other routes (e.g., app.use('/api/ai', aiRoutes);) as needed

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));







// // backend/server.js
// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import mongoose from 'mongoose';
// import authRoutes from './routes/auth.js';

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Mount your auth routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




// backend/server.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';  // For authentication routes
import aiRoutes from './routes/ai.js';      // For AI routes

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mount the routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);  // This mounts the AI routes so that /chat becomes /api/ai/chat

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
