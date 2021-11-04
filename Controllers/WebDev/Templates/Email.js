const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webdevforindia@gmail.com",
    pass: "CalculusmadeE@sY",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: 'express-handlebars',
    viewPath: path.resolve(__dirname, "./Views/"),
    extName: ".handlebars"
  })
);


module.exports = transporter;
