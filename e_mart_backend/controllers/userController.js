const User = require('../model/user')

const getUser = async (req,res) => {
    const userId = req.params.id;

    const user = await User.findById(userId)


    if(user){
        return res.status(201).json({data:user})
    }else{
        return res.status(201).json({message:"User not Exists"})
    }
}

module.exports = {getUser}