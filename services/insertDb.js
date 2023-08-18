const db = require('../config/dbConnection');

exports.insert = async (userEmail,password)=> {

    try{
        console.log(userEmail,password);

        return new Promise((resolve, reject) => {
            db.con.query('INSERT INTO newEmp VALUES(?,?)', [userEmail, password], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
        
        
    }catch(error){

        return error

    }
}