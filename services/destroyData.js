const db = require('../config/dbConnection');
const query = require('../utils/query');

const destroyData = async (cityId) => {
    try{
        const destroyStore = `CALL destroyStore('${cityId}')`;

        const result = await query(destroyStore);

        console.log('Data deactivated successfully!');

        return result
    }catch(error){
        console.log('Error in destroy Service Layer',error);
        throw new Error(error);
    }
}

module.exports = destroyData;

