import mongoose from 'mongoose';

// connection string
await mongoose.connect('mongodb+srv://mgautriz:TSkSBUBSwQeOSCWD@cluster0.afdttnk.mongodb.net/ICS', { useNewUrlParser: true, useUnifiedTopology: true });

// Subject model with forced collection name (e.g. topics)
const Student = mongoose.model('students', {
  stdnum: Number,
  fname: String,
  lname: String,
  age: Number
})

// the result parameter will contain a single object (the first matching document found
// if no matching document was found, result will be null
let data = await Student.findOne({age: 36});

// results here will always be an array, regardless of how many matching documents were found
// let data = await Student.find({ age: 17 });
// console.log(data);

const newStudent = new Student({
    stdnum: "12345678",
    fname: "Juan",
    lname: "dela Cruz",
    age: 20
});

console.log(data);
await newStudent.save();

//Updating the database

let stud = await Student.findOne({ age: 28});
stud.fname = "Peter";
await stud.save();

// updates a single document and returns an object containing the result details (NOT the document).
await Student.updateOne(
  { age: 17 },
  {$set: {fname: "John"}}
);

// updates multiple documents and returns an object containing the result details (NOT the documents)
await Student.updateMany(
  { age: 20 },
  {$set: {age: 17}
});

await Student.deleteOne({ stdnum: 2006});



