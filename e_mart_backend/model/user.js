const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

userSchema.statics.findByemail = function(email){
    
}

module.exports = mongoose.model('user',userSchema)