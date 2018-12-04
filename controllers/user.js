const {    validateToken} = require("../helpers/validateToken");
const {    verifyToken} = require("../helpers/verifyToken");


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


router.post('/logout', verifyToken, (req, res) => {
    validateToken(req, res, (authData) => {
        console.log("Logout Information ");
         res.json(authData);
    });


});


router.post('/register', (req, res) => {
    res.json("Register");
});

module.exports = router;