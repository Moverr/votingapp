const jwt = require('jsonwebtoken');
function validateToken(req, res, next) {
    jwt.verify(req.token, 'SECRETKEY', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        }
        else {             
            next(authData);
        }
    });
}
exports.validateToken = validateToken;