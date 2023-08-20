const mysql = require('mysql');

const con = mysql.createConnection({
    hostName : process.env.HOSTNAME,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database :process.env.DB_DATABASE
})

module.exports = {con};