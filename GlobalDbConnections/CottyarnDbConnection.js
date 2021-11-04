const mysql = require('mysql');

const Connection = mysql.createConnection({
    host : "remotemysql.com",
    user : "vLGAtpQiCG",
    password : "3cjAXF8w2S",
    database : "vLGAtpQiCG",
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
        console.log("Connection Succeeded for Cottyarn ")
    }

})


module.exports = Connection;