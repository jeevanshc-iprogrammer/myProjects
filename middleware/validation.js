const schema = require('./schema');

exports.validator = (req,res,next) => {
    // const {userEmail,password} = req.body;
    const user = {
        userEmail: req.body.userEmail,
        password : req.body.password
    }

    console.log(user);

    let result = schema(user);

    if(result.error){
        console.log(result.error);
        throw new Error(`${result.error}`);

    }
    next();
}