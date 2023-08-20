const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/dbConnection');
const storeRoutes = require('./routes/storeRoutes');

app.use(express.json());

db.con.connect((error)=>{
    if(error){
        console.log('DB Connection failed!');
    }else{
        console.log('DB Connected Successfully!');
    }
})

app.use('/',storeRoutes);

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})
