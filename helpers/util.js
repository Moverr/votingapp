const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken');

var  jwtMW = exjwt({
    secret: 'SECRET KEY '
});


class Util {

    constructor() {}

     getToken(result) {
        return jwt.sign({ id: result.id, username: result.username }, 'SECRET KEY', { expiresIn: 129600 });
    }
    
}

module.exports = Util;