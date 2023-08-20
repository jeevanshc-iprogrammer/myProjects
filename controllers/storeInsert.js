const insertData = require('../services/insertData');

exports.insert = async (req,res,next) => {
    try{
        const {storeName, location, status} = req.body;
        const {city, state, postalCode} = location;

        console.log(storeName, city, state, postalCode, location);

        const result = await insertData(storeName, location, status);

        console.log(result);

        res.status(200).json({
            status: "SUCCESS",
            result: result
        })
    }catch{
        res.status(400).json({
            status: 'FAILED',
            message: 'Error in Controller Layer'
        })
    }
}