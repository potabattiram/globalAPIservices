const nodemailer = require("nodemailer");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cottyarn3@gmail.com",
    pass: "Cottyarn@9012",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve(__dirname, "templates"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "../views"),
    extName: ".handlebars",
  })
);

module.exports = transporter;
