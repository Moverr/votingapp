//todo Verify Token
function verifyToken(req, res, next) {
    //get the auth header value
    const bearerHeader = req.headers['authorization'];
    if (typeof (bearerHeader) !== 'undefined') {
        //Authorization : bearer <token_string>
        // const bearer = bearerHeader.split(' ');
        // //token
        // const bearerToken = bearer[0];
        req.token = bearerHeader;
        //next middle ware
        next();
        // check if not undefined
    }
    else {
        res.sendStatus(403);
    }
}
exports.verifyToken = verifyToken;