const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({msg: "SUCCESS"})
})


app.get('/home', (req, res) => {
    res.status(200).json({msg: "HOME"})
})


app.listen(process.env.PORT, ()=>{
    console.log("STARTED");
})