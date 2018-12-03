var db = require("../db");

class UserService {
    constructor() {}

    authenticate(username, password, callback) {
        var connection = db.initConnection();
        connection.query('SELECT  * from user   WHERE user.name like ' + username + '  AND  user.password LIKE ' + password + ' limit 1 ', function (err, rows, fields) {
            if (err)
                callback(err, null)
            else {
                var result = rows[0];
                callback(null, result);
            }

        });

    }


    create() {


    }

    update() {

    }

    archive() {

    }

    list() {

    }
    getById(id) {

    }



}

module.exports = UserService;