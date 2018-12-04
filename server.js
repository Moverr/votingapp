var express = require('express');
var bodyParser = require('body-parser');
var jsonpatch = require('jsonpatch');

const {
    verifyToken
} = require("./helpers/verifyToken");



var app = express();
var router = express.Router();
 

app.use(bodyParser());
app.use('/user', require('./controllers/user.controller.js'));
app.use('/dashboard', require('./controllers/dashboard.controller.js'));


const port = 8928;

app.listen(port, () => {
    console.log(`Server started on ` + port);
});


