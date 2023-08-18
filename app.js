const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./config/dbConnection');
const userRoute = require('./routes/userRoute');
const PORT = process.env.PORT || '3000';


app.use(express.json());


db.con.connect((error)=>{
    if(error){
        console.log('DB Connection Failed!');
    }else{
        console.log('DB Connected Successfully!');
    }
});




app.use('/auth',userRoute);

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});