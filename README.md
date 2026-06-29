# Zerodha Clone

> **A modern full-stack Zerodha-inspired trading platform** built with React, Node.js, Express, MongoDB, and a separate React dashboard. This project recreates the core experience of Zerodha's marketing website and trading dashboard while emphasizing clean architecture, responsive UI, authentication, performance optimization, and modern development practices.

---

# Table of Contents

1. Project Overview
2. Features
3. Technology Stack
4. Project Architecture
5. Folder Structure
6. System Design
7. Authentication Flow
8. Frontend
9. Dashboard
10. Backend
11. Database
12. API Endpoints
13. Installation
14. Environment Variables
15. Running the Project
16. Production Build
17. Performance Optimizations
18. Testing
19. Security
20. Future Improvements
21. Troubleshooting
22. License

---

# Project Overview

This project is divided into **three independent applications**.

```
Zerodha-Clone
│
├── frontend      → Public website
├── dashboard     → Trading dashboard
└── backend       → REST API
```

The frontend acts as the marketing website.

The dashboard is a protected application available only after successful authentication.

The backend exposes REST APIs, manages authentication, sessions, and communicates with MongoDB.

---

# Features

## Frontend

- Responsive Landing Page
- About
- Products
- Pricing
- Support
- Sign Up
- Sign In
- 404 Page
- Responsive Navigation
- Framer Motion Animations
- Lazy Loaded Routes
- Client-side Validation

## Dashboard

- Protected Dashboard
- Summary
- Holdings
- Positions
- Orders
- Funds
- Apps
- Watchlist
- Charts
- Skeleton Loader
- Lazy Loaded Dashboard Pages

## Backend

- User Registration
- User Login
- Logout
- Current User API
- Session Authentication
- MongoDB Integration
- Cookie-based Authentication
- Centralized Error Handling

---

# Technology Stack

## Frontend

- React
- React Router
- Tailwind CSS
- Framer Motion
- Axios
- React Hot Toast
- Vite

## Dashboard

- React
- React Router
- Tailwind CSS
- Material UI
- Chart.js
- Framer Motion
- Axios
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- express-session
- bcrypt
- dotenv
- cookie-parser
- CORS

---

# Project Architecture

```
                Browser
                   │
        ┌──────────┴──────────┐
        │                     │
   Frontend              Dashboard
        │                     │
        └──────────┬──────────┘
                   │
             Express Backend
                   │
             Authentication
                   │
              MongoDB Atlas
```

---

# Authentication Flow

```
User

↓

Register

↓

MongoDB

↓

Login

↓

Session Cookie

↓

Dashboard Access

↓

Current User API

↓

Protected Dashboard
```

---

# Installation

## Clone

```bash
git clone <repository-url>
cd Zerodha-Clone
```

---

## Backend

```bash
cd backend
npm install
```

Run

```bash
npm run dev
```

or

```bash
npm start
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Dashboard

```bash
cd dashboard
npm install
npm run dev
```

---

# Environment Variables

Backend

```env
PORT=8000

MONGODB_URI=your_connection_string

DB_NAME=zerodha

CORS_ORIGIN=http://localhost:5173,http://localhost:5174
```

Frontend

```env
VITE_BACKEND_URL=http://localhost:8000
VITE_DASHBOARD_URL=http://localhost:5174
```

Dashboard

```env
VITE_BACKEND_URL=http://localhost:8000
```

---

# Development Commands

## Backend

```bash
npm install
npm run dev
npm start
```

## Frontend

```bash
npm install
npm run dev
npm run build
npm run preview
npm test
```

## Dashboard

```bash
npm install
npm run dev
npm run build
npm run preview
```

---

# Performance Optimizations

- Route-based lazy loading
- Dashboard lazy loading
- Skeleton loaders
- Page loader
- Bundle analysis using rollup-plugin-visualizer
- Production builds
- Tree shaking
- Code splitting

---

# Testing

Framework:

- Vitest
- Testing Library
- jsdom

Run

```bash
npm test
```

Coverage

```bash
npm run coverage
```

---

# Security

- Password hashing
- Session authentication
- Protected routes
- Environment variables
- HTTP-only cookies
- CORS configuration

---

# Troubleshooting

## MongoDB SRV Errors

Verify

- DNS configuration
- MongoDB Atlas IP whitelist
- Connection string
- Environment variables

---

## Build

```bash
npm run build
```

---

## Bundle Analysis

Install

```bash
npm install -D rollup-plugin-visualizer
```

Run

```bash
npm run build
```

Open

```
dist/stats.html
```

---

# Future Improvements

- Real-time market data
- WebSockets
- Portfolio analytics
- Notifications
- Two-factor authentication
- Dark mode
- Search improvements
- React Query
- Docker
- CI/CD
- Kubernetes deployment

---

# License

This project is created for **educational and portfolio purposes** and is inspired by the Zerodha user experience. It is **not affiliated with or endorsed by Zerodha**.
