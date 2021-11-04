const express = require('express');
const Connection = require('../../../GlobalDbConnections/CottyarnDbConnection');
const Router = express.Router();

Router.get('/api/cottyarn/testimonials',(req,res) => {
    Connection.query('select * from testimonialsData', (error, rows) => {
        if(error){
            res.status(404).send('error')
        }
        else{
            res.status(200).send(rows)
        }
    })
})



module.exports = Router;
