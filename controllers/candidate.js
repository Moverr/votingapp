var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
     res.json("Hello Rogers");
});

router.post('/', (req, res) => {
    res.json("Create Post");
});

module.exports = router;