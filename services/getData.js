const db = require('../config/dbConnection');
const query = require('../utils/query');

const getData = async () =>{
    try{
        const showStore = `CALL showStore()`;

        const result = await query(showStore);

        return result
    }catch(error){
        console.log('Error in Get Service Layer',error);
        throw new Error(error);
    }
}

module.exports = getData;                                       