const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "potabattiram@gmail.com",
    pass: "CalculusmadeE@sY",
  },
});

module.exports = transporter;
