var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();

app.use('/user','./routes/user.js');
app.use('/profile','./routes/profile.js');
app.use('/voting','./routes/voting.js');
app.use('/candidate','./routes/candidate.js');

