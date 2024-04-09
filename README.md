# Exercise6_MNAutriz
# CMSC 100 - UV2L

# Code Summary:
The provided code sets up an Express.js server integrated with MongoDB. It defines routes and controllers for CRUD operations on a collection of students.

# Code Description:

Server Setup:

Express.js is imported and initialized to create an Express application.
Middleware is used to parse JSON and URL-encoded data.
Database Connection:

Mongoose is used to connect to a MongoDB Atlas cluster.
Student Model:

A Mongoose model for the 'students' collection is defined with fields like student number, first name, last name, and age.
Route Handlers:

Functions are defined to handle various HTTP requests:
homepage: Sends a welcome message to the homepage.
saveStudent: Saves a new student to the database.
updateStudentFname: Updates a student's first name in the database.
removeUser: Removes a specific user from the database.
removeAllUsers: Removes all users from the database.
getUserByUsername: Searches for a user by student number in the database.
getAllUsers: Retrieves all users from the database.
Router Setup:

Routes are defined using Express.js to map HTTP requests to the corresponding route handlers.
Exporting Functions:

Route handlers and router function are exported for use in other modules.
Testing:

Test scripts are provided in the testRequests folder to ensure the functionality of each API endpoint.
Functionality:

Provides a RESTful API for CRUD operations on a student database.
Handles requests to save, update, remove, and retrieve student data.
Supports searching for users by student number.
Includes test scripts to verify the functionality of each API endpoint.
