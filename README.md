# Enterprise Network Monitoring System (Dockerized)

## Overview
Enterprise-grade system for real-time network monitoring and incident management. Full-stack with Docker support.

## Features
- Roles: ADMIN, ENGINEER, SUPPORT
- Real-time monitoring (WebSockets)
- Incident lifecycle management
- MongoDB persistence
- Unit tests (Jest)
- Dockerized backend & frontend
- Single command deployment

## Tech Stack
- Backend: Node.js, Express, MongoDB, Socket.io, JWT
- Frontend: React, Axios
- Testing: Jest, Supertest
- DevOps: Docker, Docker Compose

## Setup

1. Clone repo
2. Make sure Docker and Docker Compose are installed
3. Create `.env` in `backend/`:
PORT=5000
MONGO_URI=mongodb://mongo:27017/enterprise_monitoring
JWT_SECRET=super_secure_secret
4. Run everything with one command:
```bash
docker-compose up --build
5.Access:
Backend: http://localhost:5000
Frontend:  http://localhost:5173
MongoDB: mongodb://localhost:27017/enterprise_monitoring

Testing
cd backend
npm test
