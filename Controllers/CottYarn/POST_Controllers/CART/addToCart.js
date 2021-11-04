const express = require("express");
const Connection = require('../../../../GlobalDbConnections/CottyarnDbConnection');
const Router = express.Router();

Router.post('/api/cottyarn/addtocart',(req,res) => {
    const aemail = req.body.aemail;
    const productName = req.body.productName;
    const prize = req.body.prize;
    const size = req.body.size;
    
    Connection.query('select * from addtocarttable where productName=? and email=? and size=?',[productName,aemail,size],(err,respo) => {
        if(err){
            res.status(404).send(err)
        }
        else{
            if(respo.length > 0) {
                res.status(403).send('exists')
            }
            else{
                Connection.query(`insert into addtocarttable (email,productName,prize,size) values ( '${aemail}' , '${productName}', '${prize}','${size}')`,(error,resp) => {
                    if(error){
                        res.status(404).send('error')
                    }
                    else{
                        res.status(200).send('success')
                    }
                })
            }
           
        }
    })
})


module.exports = Router;