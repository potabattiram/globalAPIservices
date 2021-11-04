var express = require("express");
var Router = express.Router();
var Connection = require("../../../GlobalDbConnections/cabAppDBConnection");
const nodemailer = require('nodemailer');
const utcToIndiantime = require('utc-to-indiantime');

Router.post("/api/driver/postdata", (req, res) => {
  // PERSONAL
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var phone = req.body.phone;
  var email = req.body.email;
  var PANno = req.body.PANno;
  var AADHARNo = req.body.AADHARNo;
  var vehicleNo = req.body.vehicleNo;
  var curr_DatenTime = utcToIndiantime(new Date());
  const selfmail = "potabattiram@gmail.com";
  
  Connection.query(
    `insert into driversData (firstname, lastname, phone, email, PANno, AADHARNo, vehicleNo, curr_DatenTime) values ('${firstname}', '${lastname}', '${phone}', '${email}', '${PANno}', '${AADHARNo}', '${vehicleNo}', '${curr_DatenTime}') `, 
    (error, response) => {
      if (error) {
        res.status(404).send("error" + error);
      } else {
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
          subject: "New Driver for Prabal Travels. Check Soon!",
          html: `<h3>Driver Phone:  ${phone}</h3>`,
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
    }
  );
});

module.exports = Router;

