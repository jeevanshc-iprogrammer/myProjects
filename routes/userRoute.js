const express = require('express');
const router = express.Router();
const signup = require('../controller/signup');
const validation = require('../middleware/validation');
const login = require('../controller/login');
const path = require('path');

const htmlpath = router.use(express.static(path.join(__dirname,'../public')));

router.get('/',(req,res)=>{
    res.sendFile(htmlpath);
});

router.route('/signup').post(validation.validator,signup.registerUser);
router.route('/login').post(login.verifyUser);

module.exports = router;
