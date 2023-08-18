const insertDb = require("../services/insertDb");

exports.registerUser = async (req, res) => {
    try{
      const { userEmail, password } = req.body;
      const result = await insertDb.insert(userEmail, password);

      console.log(result);

      res.status(201).json({
        status: "SUCCESS",
        message: "User registered!",
        result: result,
      });
    }catch(error){
      res.status(201).json({
        status: "FAILED",
        message: "User is already registered!",
      });
    }

};
