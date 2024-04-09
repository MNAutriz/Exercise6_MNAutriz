import needle from 'needle';

needle.post('http://localhost:3000/remove-user', 
    {stdnum: 1921325949} , (err, res) =>{
        console.log(res.body)
    });