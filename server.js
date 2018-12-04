var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.use('/user',require('./controllers/user.controller.js'));
app.use('/profile',require('./controllers/profile.js'));
app.use('/voting',require('./controllers/voting.js'));
app.use('/candidate',require('./controllers/candidate.js'));


const port = 8928;

app.listen(port, () => {
    console.log(`Server started on `+port);
});