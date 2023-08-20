const db = require('../config/dbConnection');
const query = require('../utils/query');


const insertData = async (storeName, location, status) =>{
    try{
        const insertStore = `CALL InsertStore('${storeName}', '${location.city}', '${location.state}', '${location.postalCode}', '${status}')`;

        const result = await query(insertStore);

        return result 
    }catch(error){
        console.log('Error in Insert Service Layer',error);
        throw new Error(error);
    }
}

module.exports = insertData;