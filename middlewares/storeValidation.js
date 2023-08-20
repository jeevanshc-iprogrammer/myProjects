const storeSchema = require('./storeSchema');

const validateStore = (req,res,next) => {
    const data = {
        storeName : req.body.storeName,
        location : {
            city : req.body.location.city,
            state : req.body.location.state,
            postalCode : req.body.location.postalCode
        },
        status: req.body.status
    }

    console.log(data);

    let result = storeSchema(data);

    if(result.error){
        console.log(result.error);
        throw new Error(`${result.error}`);
    }

    next();
}

module.exports = validateStore;