const express = require("express");
const Connection = require('../../../../GlobalDbConnections/CottyarnDbConnection');
const Router = express.Router();

Router.post('/api/cottyarn/delete',(req,res) => {
    const productName = req.body.productName;
    const aemail = req.body.aemail;
    const size = req.body.size;
    Connection.query('delete from addtocarttable where productName=? and email=? and size=?',[productName,aemail,size],(error,resp) => {
        if(error){
            res.status(404).send('error')
        }
        else{
            res.status(200).send('success')
        }
    })
})

module.exports = Router;