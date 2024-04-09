import mongoose from 'mongoose';

await mongoose.connect("mongodb+srv://mgautriz:TSkSBUBSwQeOSCWD@cluster0.afdttnk.mongodb.net/ICS",{
    useNewUrlParser: true, useUnifiedTopology: true
});

const Student = mongoose.model('students',{
    stdnum : Number,
    fname: String,
    lname: String,
    age: Number
});

const homepage = (req,res) => {
    res.send('Welcome to the Homepage');
}

// Route handler to save a new student
const saveStudent = async (req, res) => {
    const { stdnum, fname, lname, age } = req.body;

    const newStudent = new Student({
        stdnum: stdnum,
        fname: fname,
        lname: lname,
        age: age
    });

    const saved = await newStudent.save();
    if(saved == []){
        res.send({inserted:false});
    } else {
        res.send({inserted:true});
    }
}

// Route handler to update a student's fname
const updateStudentFname = async (req, res) => {
    const update = { lname: "Parker" };
    
    res.send(await Student.updateOne({fname: req.body.fname}, {$set: update}));
}

// Route handler to remove a specific user
const removeUser = async (req, res) => {
    const query = { stdnum: req.body.stdnum };

    let userDelete = await Student.deleteOne(query);

    if(userDelete.acknowledged == true && userDelete.deletedCount != 0){
        res.send({deleted: true});
    } else {
        res.send({deleted: false});
    }
}

// Route handler to remove all users
const removeAllUsers = async (req, res) => {
    let userDelete = await Student.deleteMany({});

    if(userDelete.acknowledged == true && userDelete.deletedCount != 0){
        res.send({deleted: true});
    } else {
        res.send({deleted: false});
    }
    console.log(userDelete);
}

// Route handler to search user by username
const getUserByUsername = async (req, res) => {
    try {
        let stdnum = (req.query.stdnum);
        stdnum = Number(stdnum.slice(1, stdnum.length-1));
        if (isNaN(stdnum)) {
            return res.status(400).send({ message: "Invalid stdnum provided" });
        }
        
        console.log(stdnum);
        
        // Search for users with the provided stdnum
        const users = await Student.find({ stdnum: stdnum });

        // Send the found users as a response
        res.send(users);
    } catch (error) {
        // If an error occurs, log it and send a 500 response to the client
        console.error("Error fetching user:", error);
        res.status(500).send({ message: "Internal server error" });
    }
}


// Route handler to get all users
const getAllUsers = async (req, res) => {
    res.send(await Student.find({}));
}

export { homepage, saveStudent, updateStudentFname, removeUser, removeAllUsers, getUserByUsername, getAllUsers}
