const express = require('express');
const Router = express.Router();
var Connection = require("../../../GlobalDbConnections/cabAppDBConnection");


Router.get('/api/customer/getcustphones',(req,res) => {
    Connection.query('select * from customerPhones',(err,rows) => {
        if(err){
            res.status(404).send('error' + err)
        }
        else{
            res.status(200).send(rows)
        }
    })
})

module.exports = Router;