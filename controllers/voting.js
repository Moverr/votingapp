var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
     res.json("About to Vote");
});

module.exports = router;