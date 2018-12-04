const {
    validateToken
} = require("../helpers/validateToken");
const {
    verifyToken
} = require("../helpers/verifyToken");


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



module.exports = router;