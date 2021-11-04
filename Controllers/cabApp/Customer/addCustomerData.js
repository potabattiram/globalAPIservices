const express = require('express');
const Router = express.Router();
var Connection = require("../../../GlobalDbConnections/cabAppDBConnection");
const nodemailer = require('nodemailer');
const utcToIndiantime = require('utc-to-indiantime');


Router.post('/api/customer/postphone',(req,res) => {
    const phone = req.body.phone;
    var curr_DatenTime = utcToIndiantime(new Date());
    const selfmail = "potabattiram@gmail.com";

    Connection.query(`insert into customerPhones (phone,curr_DatenTime) values ('${phone}', '${curr_DatenTime}')`, (err,response) => {
        if(err){
            res.status(404).send('error' + err)
        }
        else{
            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                auth: {
                  user: "webdevforindia@gmail.com",
                  pass: "Cottyarn@9012",
                },
              });
        
              var mailOptions = {
                from: "webdevforindia@gmail.com",
                to: [selfmail],
                subject: "New Customer for Prabal Travels. Check Soon!",
                html: `<h3>Customer Phone:  ${phone}</h3>`,
              };
              transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                  res.status(404).send("error");
                } else {
                  res.status(200).send("success");
                }
              });
            res.status(200).send('success');

        }
    })
})

module.exports = Router;