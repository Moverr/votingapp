var express = require('express');
var router = express.Router();

var service = require("../services/userService");

var userService = new service();

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    var userCredentials = [{"username":username,"password":password}];
    var status = userService.authenticate(username,password,function callback(err,result) {
        res.json(result);
    });    
     
});


router.post('/logout', (req, res) => {
    res.json("Logout");
});


router.post('/register', (req, res) => {
    res.json("Register");
});




module.exports = router;