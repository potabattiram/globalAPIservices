// const Connection = require("../../GlobalDbConnections/wdDBConnection");
const express = require("express");
const Router = express.Router();
const nodemailer = require("nodemailer");
const transporter = require("./Templates/Email");

Router.post("/api/webdev/emails", (req, res) => {
  const email = req.body.email;
  const self = "potabattiram@gmail.com";

  var mailOptionsforself = {
    from: "webdevforindia@gmail.com",
    to: [self],
    subject: "Hurray! You got a new Client from Web Dev",
    html: `<h3>Hello Balram, You got a new Client from Web Dev. Details of Particular client are as follows - <br/> Email Address - ${email} <br/>
Thank You! </h3>`,
  };

  transporter.sendMail(mailOptionsforself, (err, info) => {
    if (err) {
      res.send(err);
    } else {
      var mailOptions = {
        from: "webdevforindia@gmail.com",
        to: [email],
        subject: "Web Dev",
        html: `Hello Customer <br>Thank you for your registration on Web Dev. We will contact you within 24 Hours to resond to your needs.`,
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send({ msg: "Successfully Mail sent!" });
        }
      });
    }
  });
});

Router.post("/api/webdev/squeezer", (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const self = "potabattiram@gmail.com";

  var mailOptionsforself = {
    from: "webdevforindia@gmail.com",
    to: [self],
    subject: "New Squeeze User",
    html: `<h3>Email Address - ${email} <br/> Company Name - ${name} <br/>
Thank You! </h3>`,
  };
  transporter.sendMail(mailOptionsforself, (err, succ) => {
    if (err) {
      res.send("Error");
    } else {
        res.send("Email Sent!");
    }
  });
});

module.exports = Router;
