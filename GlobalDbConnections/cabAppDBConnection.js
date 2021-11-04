const mysql = require('mysql');

const Connection = mysql.createConnection({
    host : "globalmarketingapp.c1mz2sbzwkhl.us-east-2.rds.amazonaws.com",
    user : "admin",
    password : "password90",
    database : "CABApp",
    ssl: true,
    port : 3306
});

Connection.connect((err) => {
    if(err)
    {
        console.log("There was been an error while connecting to Database..!" + err)

    }
    else
    {
        console.log("Connection Succeeded for CABDB!")
    }

})


module.exports = Connection;