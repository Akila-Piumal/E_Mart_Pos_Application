const express = require("express");
const mongoose = require('mongoose')
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000; 

const cors = require("cors")
app.use(cors());

const loginRoute = require('./routes/LoginRoute')

mongoose.connect(
    "mongodb://127.0.0.1:27017/e_mart"
).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Api running on port ${PORT}`);
    })
}).catch((err)=>{
    console.error(err);
})

app.use('/api/v1',loginRoute)