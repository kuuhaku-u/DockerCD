const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({msg: "SUCCESS"})
})


app.get('/home', (req, res) => {
    res.status(200).json({msg: "HOME"})
})

app.get('/app', (req, res) => {
    res.status(200).json({msg: "app"})
})

app.post('/app-post', (req, res) => {
    const {firstname} = req.body;
    console.log("ff", firstname)

    res.status(200).json({msg: "app", data:{
        firstname
    }})
})


app.listen(process.env.PORT, ()=>{
    console.log("STARTED");
})