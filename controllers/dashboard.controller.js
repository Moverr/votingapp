const {
    validateToken
} = require("../helpers/validateToken");
const {
    verifyToken
} = require("../helpers/verifyToken");


var express = require('express');
var router = express.Router();
var jsonpatch = require('jsonpatch');

 

router.patch('/', verifyToken, (req, res) => {
    validateToken(req, res, (authData) => {
        console.log(" Patch Information  ");
        var mydoc = req.body.mydoc;
        var thepatch = req.body.thepatch;

        var patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
        res.json(patcheddoc);
    });
});

 

module.exports = router;