var express = require('express');
var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer();

var app = express();
app.use(bodyParser());

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'vottingapp'
});

connection.connect()




app.use('/user',require('./controllers/user.js'));
app.use('/profile',require('./controllers/profile.js'));
app.use('/voting',require('./controllers/voting.js'));
app.use('/candidate',require('./controllers/candidate.js'));


const port = 8928;

app.listen(port, () => {
    console.log(`Server started on `+port);
});