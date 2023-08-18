const verifyDb = require('../services/verifyDb');

exports.verifyUser = async (req,res) => {
    try{
        
        const {userEmail,password} = req.body;

        let result = await verifyDb.verify(userEmail,password);
        console.log(result);

        if(result.length == 0){
            return res.status(400).json({
                message:'User not found!'
            })
        }

        res.status(201).json({
            status:'SUCCESS',
            message:'User logged in!',
            result : result
        })

    }catch(error){
        res.status(404).json({
            error
        })
    }
}