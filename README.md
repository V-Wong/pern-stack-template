# Containerized PERN Stack Template
A minimalist and opinionated skeleton project for a React/Express/PostgreSQL app. 

Designed as a general purpose starting point for rapidly developing full stack projects. 

Containerized for consistent development environments and easy deployment.

## Quick Start
### Development - Backend
The backend can be launched by running in ``/``:
```bash
$ docker-compose -f docker-compose-dev.yml up
```
This runs the backend server on http://localhost:5000. 

### Development - Frontend
The frontend can be launched by running in ``/frontend``:
```bash
$ npm run start
```
This runs the frontend server on http://localhost:3000. All requests will be proxied to the backend.

### Deployment
Both the frontend and backend can be deployed by running in ``/``:
```bash
$ docker-compose up
```
This runs the deployed website on http://localhost:8000.

## Overview
### Backend Structure
The backend uses the MVC pattern where the components are described as follows:
- ``app.ts`` - The **entry point** to the server. All routers are imported and used here.
- ``routes/`` - The **URL handlers** for the server. These handlers forward requests to the appropriate controller.
- ``controllers/`` - The **route callback** functions. These functions convert requests into commands for the model and/or routes.
- ``models/`` - The **database query** functions. These are functions that run parameterised queries based on arguments.

### Frontend Structure
The frontend is the standard configuration created by ``create-react-app``. The project is structured by **grouping features**
