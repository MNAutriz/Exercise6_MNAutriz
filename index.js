import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


import router from './router.js';   // import the router function
router(app);

app.listen(3000, () => {
    console.log('Server 3000 is up! ');
})