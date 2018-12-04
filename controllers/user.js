const {    validateToken} = require("../helpers/validateToken");
const {    verifyToken} = require("../helpers/verifyToken");

const = require('jsonwebtoken');
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
    validateToken(req, res, () => {
        console.log("Logout Information ");
    });


});


router.post('/register', (req, res) => {
    res.json("Register");
});

module.exports = router;