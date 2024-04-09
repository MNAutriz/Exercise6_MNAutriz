// Importing needle module
import needle from 'needle';

const students = [{
    stdnum: 8051495845,
    fname: 'Mary Jane',
    lname: 'Watson',
    age: 19},

    {stdnum: 9261496845,
    fname: 'Steve',
    lname: 'Gates',
    age: 69 },

    {stdnum: 6121595145,
    fname: 'Luis',
    lname: 'Daniels',
    age: 92 },

    {stdnum: 1921325949,
    fname: 'Martina',
    lname: 'Colorina',
    age: 21 },

    {stdnum: 1251392875,
    fname: 'Gabrielle',
    lname: 'Estrada',
    age: 17 },

]

for(let i = 0; i<students.length; i++){
    needle.post('http://localhost:3000/save-student', 
    students[i] , (err, res) =>{
        console.log(res.body)
    });
}
