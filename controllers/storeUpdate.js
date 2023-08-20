const updateData = require('../services/updateData');

exports.update = async (req,res,next) =>{
    try{
        const cityId = req.params.cityId;
        const updatedData = req.body.location;

        const result = await updateData(cityId,updatedData);

        if(result.affectedRows == 0){
            return res.status(400).json({
                status: 'FAILED',
                message: 'Data Not Found!'
            })
        }

        res.status(200).json({
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