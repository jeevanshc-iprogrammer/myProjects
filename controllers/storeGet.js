const getData = require('../services/getData');

exports.get = async (req,res,next) => {
    try{
        const result = await getData();

        res.status(201).json({
            status:"SUCCESS",
            result:result
        })
    }catch(error){
        res.status(400).json({
            status: 'FAILED',
            message: 'Error in Controller Layer'
        })
    }
}