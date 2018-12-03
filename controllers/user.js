var express = require('express');
var router = express.Router();
 

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    var userCredentials = [{"username":username,"password":password}];

     res.json(userCredentials);
});


router.post('/logout', (req, res) => {
    res.json("Logout");
});


router.post('/register', (req, res) => {
    res.json("Register");
});




module.exports = router;