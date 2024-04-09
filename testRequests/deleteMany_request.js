import needle from 'needle';

needle.post('http://localhost:3000/remove-all-user', 
    {} , (err, res) =>{
        console.log(res.body)
    });