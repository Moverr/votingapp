var db = require("../db");
var util = require("../helpers/util");

var utilHelper = new util();


class UserService {
    constructor() {}

    authenticate(username, password, callback) {
        var connection = db.initConnection();

        // connection.query('SELECT  * from user   WHERE user.username like "' + username + '"  AND  user.password LIKE "' + password + '"  limit 1 ', function (err, rows, fields) {
        //     if (err)
        //         callback(err, null)
        //     else {
        //         let result = rows[0];
        //         if (result != null) {
        //             let token = utilHelper.getToken(result);
        //             result = {
        //                 sucess: true,
        //                 err: null,
        //                 token
        //             };
        //         } else {
        //             let token = null;
        //             result = {
        //                 sucess: false,
        //                 err: "User credentials are incorrect",
        //                 token
        //             };
        //         }

       var result = {
            "username": username,
            "password": password
        };
        let token = utilHelper.getToken(result);
        result = {
            success: true,
            err: null,
            token
        };

        callback(null, result);
    }




    create(username, password, callback) {
        var connection = db.initConnection();
        connection.query('INSERT INTO  user(username,password) VALUES("' + username + '","' + password + '") ', function (err, rows, fields) {
            if (err) {

                callback(err, null);
            } else {
                result = "Record saved Succesfully";
                callback(null, result);
            }

        });

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