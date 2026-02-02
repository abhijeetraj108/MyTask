# Quick Setup Guide

## Prerequisites
- Node.js installed (v14+)
- MongoDB running locally or MongoDB Atlas account

## Step 1: Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in `backend/` directory:
```
PORT=5000
MONGO_URL=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_min_32_chars
```

Start backend:
```bash
npm run dev
```

## Step 2: Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file in `frontend/` directory:
```
VITE_API_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm run dev
```

## Step 3: Access Application

Open browser and navigate to: `http://localhost:5173`

1. Register a new account
2. Login
3. Start creating tasks!

## Notes

- Make sure MongoDB is running before starting the backend
- For MongoDB Atlas, replace `MONGO_URL` with your connection string
- Change `JWT_SECRET` to a strong random string in production



