const Joi = require('joi');

const userSchema = Joi.object({
    userId : Joi.string()
                .min(6) 
                .max(6)
                .required(),

    userName : Joi.string()
                .min(8)
                .max(16)
                .required(),

    userEmail : Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .required(),

    userAge : Joi.number()
                .min(18)
                .required(),

    userDOJ : Joi.date()
                .raw()
                .required(),

    userContact : Joi.number()
                    .min(1000000000)
                    .max(9999999999)
                    .required()                  
})

module.exports = userSchema;