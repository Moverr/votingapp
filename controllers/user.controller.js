const {
    validateToken
} = require("../helpers/validateToken");
const {
    verifyToken
} = require("../helpers/verifyToken");


var express = require('express');
var router = express.Router();
var jsonpatch = require('jsonpatch');

var service = require("../services/userService");

var userService = new service();

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    userService.authenticate(username, password, function callback(err, result) {
        res.json(result);
    });

});


// {
//     "mydoc" : {
//           "baz": "qux",
//           "foo": "bar"
//         },
//         "thepatch" : [
//           { "op": "replace", "path": "/baz", "value": "boo" }
//         ]
//     }

router.patch('/', verifyToken, (req, res) => {
    validateToken(req, res, (authData) => {
        console.log(" Patch Information  ");
        var mydoc = req.body.mydoc;
        var thepatch = req.body.thepatch;

        var patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
        res.json(patcheddoc);
    });
});

router.post('/logout', verifyToken, (req, res) => {
    validateToken(req, res, (authData) => {
        console.log("Logout Information ");
        res.json(authData);
    });


});


//todo: this is a public api 
router.post('/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    userService.create(username, password, function callback(err, result) {
        if (error) {
            res.json({
                message: "Something went wrong could not save the record"
            });
        } else {
            res.json({
                message: "Record Saved Succesfully "
            });
        }
    });
});

module.exports = router;