
const mysql = require('mysql');


const ConnectionforPlasma = mysql.createConnection({
    host : "plasmadonors.c1mz2sbzwkhl.us-east-2.rds.amazonaws.com",
    user : "admin",
    password : "password90",
    database : "plasmadb",
    ssl: true,
    port : 3306
});


ConnectionforPlasma.connect((err) => {
    if(err)
    {
        console.log("There was been an error while connecting to Database..!" + err)

    }
    else
    {
        console.log("Connection Succeeded for Plasma Db!")
    }

})


module.exports = ConnectionforPlasma;