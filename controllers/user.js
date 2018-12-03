var express = require('express');
var router = express.Router();


router.get('/login', (req, res) => {
     res.json("Login");
});


router.get('/logout', (req, res) => {
    res.json("Logout");
});


router.get('/register', (req, res) => {
    res.json("Register");
});




module.exports = router;