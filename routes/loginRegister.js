const express = require("express");
const cors = require("cors");
var bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const route = express.Router();
const User = require("../model/userSchema");
route.use(cors());
route.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

route.post("/register", async function (req, res) {
  const user = new User({
    fname: req.body.registerForm.fname,
    lname: req.body.registerForm.lname,
    email : req.body.registerForm.email,
    password: req.body.registerForm.password,
    location: req.body.registerForm.location,
    usertype: req.body.registerForm.usertype,
    phone: req.body.registerForm.phone,
    date: req.body.registerForm.date,
    
  });
  await user.save();
  console.log(user);
});

route.post("/login", async function (req, res) {
  const user = await User.find({
    email : req.body.loginForm.email,
  });
  console.log(user.length);
  if(user.length === 0){
    res.status(200).send({
      message : "No such user exists"
    })
  }else{
    if(user[0].password === req.body.loginForm.password){
      res.status(200).send({
        message : "Successful Login"
      })
    }else{
      res.status(200).send({
        message : "Invalid Password"
      })
    }
  }
});



module.exports = route;
