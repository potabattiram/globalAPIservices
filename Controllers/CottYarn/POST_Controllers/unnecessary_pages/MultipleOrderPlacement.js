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

// Router.post("/api/cottyarn/multipleprodorderdetails", (req, res) => {
//   const prodId1 = req.body.prodId1;
//   const prodId2 = req.body.prodId2 ? req.body.prodId2 : null;
//   const prodId3 = req.body.prodId3 ? req.body.prodId3 : null;
//   const prodId4 = req.body.prodId4 ? req.body.prodId4 : null;
//   const prodId5 = req.body.prodId5 ? req.body.prodId5 : null;
//   const prodId6 = req.body.prodId6 ? req.body.prodId6 : null;
//   const prodId7 = req.body.prodId7 ? req.body.prodId7 : null;
//   const prodId8 = req.body.prodId8 ? req.body.prodId8 : null;
//   const prodId9 = req.body.prodId9 ? req.body.prodId9 : null;
//   const prodId10 = req.body.prodId10 ? req.body.prodId10 : null;

//   const fname = req.body.fname;
//   const addr = req.body.addr;
//   const city = req.body.city;
//   const email = req.body.email;
//   const mobile = req.body.mobile;
//   const pin = req.body.pin;
//   const state = req.body.state;

//   const selfMail = "potabattiram@gmail.com";
//   const nullValue = '';

//   Connection.query(
//     `select * from Towels_Data where id in (?)`,[ prodId1, prodId2 ? prodId2 : null, prodId3 ? prodId3 : null, prodId4 ? prodId4 : null, prodId5 ? prodId5 : null, prodId6 ? prodId6 : null, prodId7 ? prodId7 : null, prodId8 ? prodId8 : null, prodId9 ? prodId9 : null, prodId10 ? prodId10 : null],
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
//           subject: `New Orders from Cottyarn`,
//           html: `<h5>New Orders from Cottyarn for Towel Name-${prod_name[0].tow_name}, <br>${prod_name[1] ? prod_name[1].tow_name : nullValue},<br>${prod_name[2] ? prod_name[2].tow_name : nullValue},<br>${prod_name[3] ? prod_name[3].tow_name : null},<br>${prod_name[4] ? prod_name[4].tow_name : null},<br>${prod_name[5] ? prod_name[5].tow_name : null},<br>${prod_name[6] ? prod_name[6].tow_name : null},<br>${prod_name[7] ? prod_name[7].tow_name : null},<br>${prod_name[8] ? prod_name[8].tow_name : null},<br>${prod_name[9] ? prod_name[9].tow_name : null},<br>${prod_name[10] ? prod_name[10].tow_name : null}<br> Order From- ${fname},<br>Address- ${addr},<br>City- ${city},<br>Email- ${email},<br>Mobile Number- ${mobile},<br>PIN- ${pin},<br>State- ${state}</h5>`,
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
//               html: `<h5>Hello ${fname},<br>Your Order for <strong>-${prod_name[0].tow_name}, <br>${prod_name[1] ? prod_name[1].tow_name : null},<br>${prod_name[2] ? prod_name[2].tow_name : null},<br>${prod_name[3] ? prod_name[3].tow_name : null},<br>${prod_name[4] ? prod_name[4].tow_name : null},<br>${prod_name[5] ? prod_name[5].tow_name : null},<br>${prod_name[6] ? prod_name[6].tow_name : null},<br>${prod_name[7] ? prod_name[7].tow_name : null},<br>${prod_name[8] ? prod_name[8].tow_name : null},<br>${prod_name[9] ? prod_name[9].tow_name : null},<br>${prod_name[10] ? prod_name[10].tow_name : null}</strong> has been successfully placed on Cottyarn.com. You are requested to wait for our response regarding this order.<br>Thank You</h5>`,
//             };
//             transporter.sendMail(mailOptions, function (err, info) {
//               if (err) {
//                 res.status(400);
//               } else {
//                 const insertQuery = `insert into multipleOrderDetails ( prodId1, prodId2, prodId3, prodId4, prodId5, prodId6, prodId7, prodId8, prodId9, prodId10, fname, addr, city, email, mobile, pin, state) values( '${prodId1}', '${prodId2}' , '${prodId3}' , '${prodId4}' , '${prodId5}' , '${prodId6}' , '${prodId7}' , '${prodId8}' , '${prodId9}', '${prodId10}', '${fname}', '${addr}', '${city}', '${email}', '${mobile}', '${pin}', '${state}')`;
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
