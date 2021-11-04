// const express = require("express");
// const Connection = require("../../../GlobalDbConnections/CottyarnDbConnection");
// const Router = express.Router();
// const transporter = require("../middlewares/mail");
// const nodemailer = require('nodemailer');

// Router.post("/api/cottyarn/order/verifyotp", (req, res) => {
//   const email = req.body.email;
//   const otpGenerator = Math.floor(1000 + Math.random() * 9000);

//   const curr_time = new Date().toTimeString();

//   var mailOptions = {
//     from: "cottyarn3@gmail.com",
//     to: [email],
//     subject: "Verification OTP for CottYarn",
//     html: `<h5>Enter the below One-Time-Password to verify your Email-Address <br/> <h2><strong>${otpGenerator}</strong></h2></h5>`,
//   };
//   transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//       res.status(400);
//     } else {
//       Connection.query(
//         `insert into otpEmaildata (email, otp, otpcreatedtime) values ('${email}' , '${otpGenerator}','${curr_time}')`,
//         (err, result) => {
//           if (err) {
//             res.status(400).send("Error" + err);
//           } else {
//             res.send({ msg: "success" });
//           }
//         }
//       );
//     }
//   });
// });

// Router.post("/api/cottyarn/order/otpverify", (req, res) => {
//   const email = req.body.email;
//   const otpfromuser = req.body.otpfromuser;

//   const verifyOTPQuery = "select * from otpEmaildata where email=? and otp=?";

//   Connection.query(verifyOTPQuery, [email, otpfromuser], (err, rows) => {
//     if (err) {
//       res.status(400).send("error" + err);
//       return;
//     } else {
//       if (rows.length > 0) {
//             res.status(200).send(rows)
//       } else {
//         res.status(403).send("Email or OTP Invalid!");
//       }
//     }
//   });
// });

// Router.post("/api/cottyarn/singleprodorderdetails", (req, res) => {
//   const prodId = req.body.prodId;
//   const fname = req.body.fname;
//   const addr = req.body.addr;
//   const city = req.body.city;
//   const email = req.body.email;
//   const mobile = req.body.mobile;
//   const pin = req.body.pin;
//   const state = req.body.state;

//   const selfMail = "potabattiram@gmail.com";

//   Connection.query(
//     `select * from Towels_Data where id=?`,[prodId],
//     (eror, prod_name) => {
//       if (eror) {
//         res.status(403).send("error"+eror);
//       } else {
//         var transporter = nodemailer.createTransport({
//           host: "smtp.gmail.com",
//           port: 465,
//           auth: {
//             user: "cottyarn3@gmail.com",
//             pass: "Cottyarn@9012",
//           },
//         });
//         var mailOptions = {
//           from: "cottyarn3@gmail.com",
//           to: [selfMail],
//           subject: `New Order from Cottyarn for Towel Name-${prod_name[0].tow_name}`,
//           html: `<h5>New Order from Cottyarn Towel Name- ${prod_name[0].tow_name} <br> Order From- ${fname},<br>Address- ${addr},<br>City- ${city},<br>Email- ${email},<br>Mobile Number- ${mobile},<br>PIN- ${pin},<br>State- ${state}</h5>`,
//         };
//         transporter.sendMail(mailOptions, function (err, info) {
//           if (err) {
//             res.status(404).send("error" + err);
//           } else {
//             var transporter = nodemailer.createTransport({
//               host: "smtp.gmail.com",
//               port: 465,
//               auth: {
//                 user: "cottyarn3@gmail.com",
//                 pass: "Cottyarn@9012",
//               },
//             });

//             var mailOptions = {
//               from: "cottyarn3@gmail.com",
//               to: [email],
//               subject: "Order Placement success on Cottyarn",
//               html: `<h5>Hello ${fname},<br>Your Order for <strong>${prod_name[0].tow_name}</strong> has been successfully placed on Cottyarn.com. You are requested to wait for our response regarding this order.<br>Thank You</h5>`,
//             };

//             transporter.sendMail(mailOptions, function (err, info) {
//               if (err) {
//                 res.status(400);
//               } else {
//                 const insertQuery = `insert into orderDetails (prodId, fname, addr, city, email, mobile, pin, state) values( '${prodId}', '${fname}', '${addr}', '${city}', '${email}', '${mobile}', '${pin}', '${state}')`;
//                 Connection.query(insertQuery, (error, response) => {
//                   if (error) {
//                     res.status(404).send("error"+error);
//                   } else {
//                     res.status(200).send("success");
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     }
//   );
// });

// module.exports = Router;
