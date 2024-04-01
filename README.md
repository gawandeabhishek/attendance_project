# Attendance Project

Welcome to the Attendance Project! This repository contains both the frontend and backend components of an advanced attendance management system.

## Overview

This project aims to streamline attendance tracking processes for educational institutions or organizations. It provides a user-friendly interface for students, teachers, and administrators to manage attendance records efficiently.

## Features

- **User Authentication**: Secure authentication system for students, teachers, and administrators.
- **Attendance Tracking**: Real-time tracking of attendance for individual students across multiple classes.
- **Reporting and Analytics**: Comprehensive reporting tools for analyzing attendance data.
- **Role-based Access Control**: Different levels of access for students, teachers, and administrators.
- **Easy Integration**: Seamlessly integrates with existing student management systems.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gawandeabhishek/attendance_project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd attendance_project
   ```

3. Install backend dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

## Usage

### Development Mode

To run the project in development mode:

1. Start the backend server:

   ```bash
   cd ../backend
   npm run dev
   ```

2. In a separate terminal, start the frontend development server:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to access the frontend.

### Production Mode

To build and run the project in production mode:

1. Build the frontend:

   ```bash
   cd ../frontend
   npm run build
   ```

2. Start the backend server:

   ```bash
   cd ../backend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:5173` to access the production-ready application.

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests to contribute to the project's development.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding!
