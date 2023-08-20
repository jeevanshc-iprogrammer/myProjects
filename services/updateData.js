const db = require('../config/dbConnection');
const query = require('../utils/query');

const updateData = async (cityId,updatedData) => {
    try{
        const data = JSON.stringify(updatedData);

        const updateStore = `CALL updateMyStore('${cityId}','${data}')`;

        const result = await query(updateStore);

        return result

    }catch(error){
        console.log('Error in Get Service Layer',error);
        throw new Error(error);
    }
}

module.exports = updateData;