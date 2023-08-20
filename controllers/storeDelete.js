const destroyData = require('../services/destroyData');

exports.destroy = async (req,res,next) => {
    try{
        const cityId = req.params.cityId;
        const result = await destroyData(cityId);

        if(result.affectedRows == 0){
            return res.status(400).json({
                status: 'FAILED',
                message: 'Data Not Found!'
            })
        }

        res.status(201).json({
            status:"SUCCESS",
            message:"Data deleted Successfully",
            result:result
        })
    }catch(error){
        res.status(400).json({
            status: 'FAILED',
            message: 'Error in Controller Layer'
        })
    }
}