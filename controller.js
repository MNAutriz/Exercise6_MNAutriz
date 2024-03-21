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

const findStudents = async (req,res) => {
    res.send(await Student.find({}));
}