const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model('login',loginSchema)