const exjwt = require('express-jwt');
const jwt = require('jsonwebtoken');

var  jwtMW = exjwt({
    secret: 'SECRETKEY'
});


class Util {

    constructor() {}

     getToken(result) {
        return jwt.sign({result}, 'SECRETKEY', { expiresIn: 129600 });
    }


    
}

module.exports = Util;