const express = require('express');
const Connection = require('../../../GlobalDbConnections/CottyarnDbConnection');
const Router = express.Router();

Router.post('/api/cottyarn/addtestimonials',(req,res) => {
    const testimonial = req.body.testimonial;
    const fullname = req.body.fullname;

    Connection.query(`insert into testimonialsData (testimonial, fullname) values ( '${testimonial}' , '${fullname}')`, (error,response) => {
        if(error){
            res.status(404).send('error'+error)
        }
        else{
            res.status(200).send('success')
        }
    })
})

module.exports = Router;