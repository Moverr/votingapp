var db = require("../db");

class UserService{
    constructor() {
        console.log("Great is the King lord of Lords");
    }

    authenticate(username,password,callback){
      var connection =   db.initConnection();
    connection.query('SELECT  * from user', function (err, rows, fields) {
        if (err) 
            callback(err,null)
        else{
            callback(null,"User Logged in Successfully"); 
        }
            
        })
        
    }


     create(){
       
        
    }

    update(){

    }

    archive(){

    }

    list(){
        
    }
    getById(id){

    }



}

module.exports = UserService;