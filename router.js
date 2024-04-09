import { homepage, saveStudent, updateStudentFname, removeUser, removeAllUsers, getUserByUsername, getAllUsers } from './controller.js';

const router = (app) => { // serves as a router to functions
    app.get('/', homepage);
    app.post('/save-student', saveStudent); // Route to save a new student
    app.post('/update', updateStudentFname); // Route to update a student's fname
    app.post('/remove-user', removeUser); // Route to remove a specific user
    app.post('/remove-all-user', removeAllUsers); // Route to remove all users
    app.get('/user', getUserByUsername); // Route to search user by username
    app.get('/members', getAllUsers); // Route to get all users
}

export default router;