const Login = require("../model/Login");
const User = require("../model/user");

const { response } = require("express");

const req = require("express/lib/request");
const res = require("express/lib/response");

// Save the login and the user
const saveLogin = (req, res) => {
  // Login Model
  const loginObj = new Login({
    email: req.body.user.email,
    password: req.body.signupPassword,
    user: req.body.user,
  });

  // User Model
  const userObj = new User({
    userName: req.body.user.userName,
    address: req.body.user.address,
    email: req.body.user.email,
    contactNo: req.body.user.contactNo,
    role: req.body.user.role,
  });

  Login.findOne({ email: req.body.user.email })
    .then((response) => {
      if (response == null) {
        userObj
          .save()
          .then((user) => {
            loginObj.user = user._id;
            loginObj
              .save()
              .then(() => {
                res.status(201).json({ message: "saved" });
              })
              .catch((err) => {
                console.log(err.message);
                res.status(500).json({ message: "login save failed!" });
              });
          })
          .catch((err) => {
            console.log(err.message);
            res.status(500).json({ message: "user save failed!" });
          });
      } else {
        res.status(409).json({ message: "already exist. please sign in" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server error." });
    });
};

const getLoginDetails = (req, res) => {
  Login.findOne({ email: req.body.email, password: req.body.password })
    .then((response) => {
      if (response != null) {
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "Internal Server error." });
    });
};

module.exports = { saveLogin, getLoginDetails };

// app.post("/post", async(req,res)=>{
//     const {password} = req.body;
//     const {email} = req.body;

//     try{
//         if(password == 1234 && email == "akila16@"){
//             res.send({status:"OK"})
//         }else{
//             res.send({status:"user not found"})
//         }
//     }catch(error){
//         res.send({status:"something went wrong.!"})
//     }
// });
