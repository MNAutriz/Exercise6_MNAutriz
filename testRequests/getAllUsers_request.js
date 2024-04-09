// Importing needle module
import needle from 'needle';

//needle get all members.
needle.get('http://localhost:3000/members', (err, res) =>{
    console.log(res.body);
})
