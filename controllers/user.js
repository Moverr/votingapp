const { verifyToken } = require("./verifyToken");
const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

var service = require("../services/userService");

var userService = new service();

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    userService.authenticate(username, password, function callback(err, result) {
        res.json(result);
    });

});


router.post('/logout',verifyToken, (req, res) => {
    jwt.verify(req.token,'SECRETKEY', (err,authData) => {
        if(err){
            console.log(err);
            res.sendStatus(403);
        }else{
            res.json({
                message:"Interesting",
                authData
            });
        }
       
    });

    
});


router.post('/register', (req, res) => {
    res.json("Register");
});

module.exports = router;