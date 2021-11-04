var express = require("express");
var Router = express.Router();
var Connection = require("../../../GlobalDbConnections/cabAppDBConnection");

Router.get('/api/driver/getdriverdata',(req,res) => {
    Connection.query('select * from driversData',(error,rows) => {
        if(error){
            res.status(404).send('error')
        }
        else{
            res.status(200).send(rows)
        }
    })
})

module.exports = Router;