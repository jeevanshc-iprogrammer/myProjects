const joi = require('joi');
// const passwordComplexity = require('joi-password-complexity'); 

// const complexityOptions = {
//     min: 8,
//     max: 16,
//     lowerCase: 1,
//     upperCase: 1,
//     numeric: 1,
//     symbol: 1,
//     requirementCount: 2,
// };

const validateUser = (user) =>{
    const schema = joi.object({
        userEmail: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password : joi.string().min(8).max(16).required()
        // password : passwordComplexity(complexityOptions),
    })

    return schema.validate(user);
}



module.exports = validateUser;