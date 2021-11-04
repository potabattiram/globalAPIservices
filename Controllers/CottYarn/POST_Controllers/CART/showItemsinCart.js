const express = require("express");
const Connection = require('../../../../GlobalDbConnections/CottyarnDbConnection');
const Router = express.Router();

Router.post('/api/cottyarn/getitemsincart',(req,res) => {
    const aemail = req.body.aemail;
    Connection.query('select * from addtocarttable where email=?',[aemail],(err,resp) => {
        if(err){
            res.status(404).send('error')
        }
        else{
            res.status(200).send(resp)
        }
    })
})

Router.post('/api/cottyarn/adddozens',(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const dozens = req.body.dozens;
    Connection.query(`
    update addtocarttable set dozens=? where productName=? and email=?`,[dozens,name,email],(eror,respo) => {
        if(eror){
            res.status(400).send(eror)
        }
        else{
            res.status(200).send('Success')
        }
    })
})

Router.post('/api/cottyarn/cart/gettotal',(req,res) => {
    const aemail = req.body.aemail;
    Connection.query('select sum(prize * dozens * defaultDozen) as total from addtocarttable where email=?',[aemail],(err,resp) => {
        if(err){
            res.status(404).send(err)
        }
        else{
            res.status(200).send(resp)
        }
    })
})


module.exports = Router;