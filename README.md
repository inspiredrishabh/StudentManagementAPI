# Student Management API

A RESTful API for managing student information built with Node.js, Express, and MongoDB.

## Overview

This Student Management API allows you to create, read, update, and delete student records in a database. It provides a simple interface to manage student data efficiently.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/inspiredrishabh/StudentManagementAPI
   cd StudentManagementAPI
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

## Usage

Start the server:

```
npm start
```

The server will run on port 5000 by default (or the port specified in your .env file).

## API Endpoints

### Students

- `GET /students` - Get all students
- `GET /students/:id` - Get a specific student
- `POST /students` - Create a new student
- `PUT /students/:id` - Update a student
- `DELETE /students/:id` - Delete a student

## Project Structure

```
StudentManagementAPI/
├── index.js         # Main application entry point
├── route/
│   └── studentRoutes.js  # Student API routes
├── .env             # Environment variables
└── README.md        # Project documentation
```

## License

MIT
