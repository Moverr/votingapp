var mysql = require('mysql')


function initConnection() {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'vottingapp'
    });

    return connection;
}


exports.initConnection = initConnection;