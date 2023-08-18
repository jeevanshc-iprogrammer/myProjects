const db = require('../config/dbConnection');

exports.verify = async (userEmail, password) => {
    try {
        console.log(userEmail, password);

        return new Promise((resolve, reject) => {
            db.con.query('SELECT * FROM newEmp WHERE userEmail=? AND password=?', [userEmail, password], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};
