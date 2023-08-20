const db = require('../config/dbConnection');

const query = async (performQuery) =>{
    const result = await new Promise((resolve,reject)=>{
        db.con.query(performQuery,(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })

    return result
}

module.exports = query;