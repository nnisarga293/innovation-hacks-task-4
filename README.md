# FlowAI — AI-Powered Project & Task Management Platform

Final Task 4 for the Innovation Hacks Full Stack Development Internship.

## Features
- User registration, login, logout and JWT-protected API routes
- Project creation, editing, deletion and progress tracking
- Task creation, status updates, priorities, due dates, search and deletion
- Dashboard with task statistics, recent tasks and projects
- AI-assisted task generation using Google Gemini when `GEMINI_API_KEY` is configured
- Built-in fallback task generator so the demo still works without an AI key
- MongoDB persistence with Mongoose schemas and references
- Responsive React interface for desktop, tablet and mobile

## Technology Stack
- Frontend: React + Vite + Lucide React
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcryptjs
- AI: Google Gemini API (optional)

## Project Structure
```
innovation-hacks-task-4/
├── backend/
│   ├── src/models/
│   ├── src/routes/
│   ├── src/middleware/
│   ├── src/server.js
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── index.html
│   └── .env.example
├── .gitignore
└── README.md
```

## Run Locally
### 1. Start MongoDB
Use a local MongoDB server or a MongoDB Atlas database.

### 2. Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```
For PowerShell, `copy` can be replaced with `Copy-Item .env.example .env`.
Set `MONGODB_URI` and `JWT_SECRET` in `.env`. `GEMINI_API_KEY` is optional.

### 3. Frontend
Open another terminal:
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```
Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

## AI Feature
Click **AI Tasks** on the dashboard after creating a project. If `GEMINI_API_KEY` is present, the app requests task suggestions from Gemini. Without a key, the app uses a clearly labeled built-in fallback generator for local demonstrations.

## Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Tasks
![Tasks](screenshots/tasks.png)

### AI-Assisted Task Generation
![AI Tasks](screenshots/ai-tasks.png)

### Projects
![Projects](screenshots/projects.png)

## API Overview
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/projects`
- `POST /api/projects`
- `GET /api/projects/:id`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`
- `POST /api/ai/generate-tasks`

## Security
Never commit `.env` or real API keys. Only `.env.example` should be pushed to GitHub.

## Demo Flow
1. Register a user.
2. Create a project.
3. Add several tasks with priorities and due dates.
4. Change task status from Todo → In Progress → Done.
5. Show dashboard statistics and project progress.
6. Click AI Tasks to demonstrate AI-assisted task generation.

## Submission Checklist
- [ ] GitHub repository
- [ ] 2–5 minute demo video
- [ ] Optional live deployment
- [ ] LinkedIn post tagging Innovation Hacks
