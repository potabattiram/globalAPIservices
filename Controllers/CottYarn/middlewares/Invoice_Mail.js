const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const USERNAME = "cottyarn3@gmail.com"; 
const PASSWORD = "Cottyarn@9012";


let filePath;


const send = (options) => {
  new Promise((resolve, reject) => {
    if (options.action === "demo") {
      filePath = "/Mail_HBS/Order_HBS/orderPlacements.handlebars"; 
    }

    const readHTMLFile = (path, callback) => {
      fs.readFile(path, { encoding: "utf-8" }, (err, res) => {
        if (err) {
         console.log('err',err)
        } else {
            callback(null, res);
        }
      });
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: USERNAME,
        pass: PASSWORD,
      },
    });

    readHTMLFile(path.join(__dirname + filePath), (err, html) => {
      let template = handlebars.compile(html);
      let htmlToSend = template(options.data);
      let mailOptions = {
        from: USERNAME,
        to: ['potabattiram@gmail.com'],
        subject: options.subject || "No subject sent!",
        html: htmlToSend,
      };
      transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response);
      });
    });
  });
};

module.exports = { send };