// Importing needle module
import needle from 'needle';

//needle get all members.
needle.get("http://localhost:3000/user?stdnum='8051495845'", (err, res) =>{
    console.log(res.body);
})
