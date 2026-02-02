# Task Management Web Application

A full-stack task management application built with React, Node.js, Express, and MongoDB. Features user authentication, authorization, and complete CRUD operations for tasks.

## Features

### Frontend
- ✅ Responsive UI using React with Tailwind CSS
- ✅ User authentication (Login/Register)
- ✅ Task list page with card-based layout
- ✅ Add/Edit task form
- ✅ Task fields: Title, Description, Status (Pending, In Progress, Completed)
- ✅ Protected routes with authentication
- ✅ Modern and intuitive user interface

### Backend
- ✅ REST API using Node.js (Express)
- ✅ Complete CRUD operations for tasks
- ✅ User authentication with JWT
- ✅ Password hashing with bcrypt
- ✅ Authorization middleware (users can only manage their own tasks)
- ✅ MongoDB database integration

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- bcryptjs

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is occupied)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Tasks (All Protected)
- `GET /api/tasks` - Get all tasks for the logged-in user
- `GET /api/tasks/:id` - Get a single task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Project Structure

```
yardStick/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   ├── db.js
│   │   └── generateToken.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskItem.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Tasks.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

## Security Features

- ✅ Password hashing using bcryptjs
- ✅ JWT-based authentication
- ✅ Protected API routes
- ✅ User authorization (users can only access their own tasks)
- ✅ Input validation
- ✅ Error handling

## Usage

1. Start MongoDB (if using local installation)
2. Start the backend server
3. Start the frontend development server
4. Open your browser and navigate to `http://localhost:5173`
5. Register a new account or login
6. Start creating and managing your tasks!

## Development

### Backend
- Development mode with auto-reload: `npm run dev`
- Production mode: `npm start`

### Frontend
- Development server: `npm run dev`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

## License

ISC



