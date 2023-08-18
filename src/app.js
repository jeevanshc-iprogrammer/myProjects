const prompt = require('prompt-sync')();
const userSchema = require('../schema/userSchema');
const logger = require('../utils/logger');

let id = prompt('Enter Your User ID : ');
let name = prompt('Enter Your username : ');
let email = prompt('Enter Your Email ID : ');
let age = prompt('Enter Your Age : ');
let DOJ = prompt('Enter Your Date of Joining : ');
let contact = prompt('Enter Your Contact Number : ');

const validateUser = (id,name,email,age,DOJ,contact) => {
    try{
        const value = userSchema.validate({
            userId : id,
            userName : name,
            userEmail : email,
            userAge : age,
            userDOJ : DOJ,
            userContact : contact
        });
        
        if(value.error){
            console.log(value.error.details);
            logger.error(value.error.details[0].message);
        }else{
            logger.info("Accepted values from user", value);
        }
    }
    catch(err){
        console.log(err);
        logger.error(err);
    }
}

validateUser(id,name,email,age,DOJ,contact);


