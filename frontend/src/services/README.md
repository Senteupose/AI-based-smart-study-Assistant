# AI Smart Study Assistant

This project is an AI-powered study assistant that provides personalized study plans, tracks progress, and answers academic questions. It includes:

- **Frontend:** Built with React and Material‑UI.
- **Backend:** Built with Express and MongoDB.
- **AI Integration:** Backend calls an external AI API to generate study plans and answers.

## Folder Structure

ai-smart-study-assistant/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── studyPlanController.js
│   ├── models/
│   │   ├── User.js
│   │   └── StudyPlan.js
│   └── routes/
│       ├── authRoutes.js
│       └── studyPlanRoutes.js
│
├── frontend/
│   ├── package.json
│   ├── .env
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── AuthContext.js
│       ├── assets/
│       │   ├── background.jpg       // (Your background image file)
│       │   └── feature-icon.png     // (Your feature icon file)
│       ├── components/
│       │   ├── NavBar.js
│       │   ├── Home.js
│       │   ├── Login.js
│       │   ├── Register.js
│       │   └── Dashboard.js
│       └── services/
│           ├── api.js
│           └── auth.js
│
├── README.md
└── .gitignore
## Setup

### Backend
1. Navigate to the `backend` folder.
2. Run `npm install`.
3. Create a `.env` file with your environment variables.
4. Run `npm start` (or `npm run dev` for nodemon).

### Frontend
1. Navigate to the `frontend` folder.
2. Run `npm install`.
3. Create a `.env` file with your API URL.
4. Run `npm start`.

## Notes

- **Security:** Do not expose your AI API keys in production on the frontend.
- **Customization:** Modify the controllers, models, and components as needed.
