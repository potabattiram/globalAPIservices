const nodemailer = require("nodemailer");
const path = require("path");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cottyarn3@gmail.com",
    pass: "Cottyarn@9012",
  },
});

module.exports = transporter;
