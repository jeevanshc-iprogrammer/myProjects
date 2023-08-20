const JOI = require('joi');

const validateSchema = (data) => {

    try{
        const storeSchema = JOI.object({
            storeName: JOI.string().max(100).required(),
            location: JOI.object({
                city: JOI.string().required(),
                state: JOI.string().required(),
                postalCode: JOI.string().required()
            }).required(),
            status: JOI.string().valid('Active','Inactive')
        })
         
        return storeSchema.validate(data);
    }catch(error){
        throw new Error(error);
    }
}

module.exports = validateSchema;