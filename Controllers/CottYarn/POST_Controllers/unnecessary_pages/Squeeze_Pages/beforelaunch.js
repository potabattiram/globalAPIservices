// const Connection = require("../../../../GlobalDbConnections/CottyarnDbConnection");
// const express = require("express");
// const app = express.Router();
// const transporter = require('../../middlewares/mail');

// app.post("/api/otpsenderforplacement",(req, res) => {
//   const aemail = req.body.aemail;
//   const otpGenerator = Math.floor(1000 + Math.random() * 9000);

//   try {
//     var mailOptions = {
//       from: "cottyarn3@gmail.com",
//       to: [aemail],
//       subject: "Verification OTP",
//       html: `<h3>Enter the below One-Time-Password to verify your Email-Address <br/> <h2><strong>${otpGenerator}</strong></h2></h3>`,
//     };
//     transporter.sendMail(mailOptions, function (err, info) {
//       if (err) {
//         res.status(400);
//       } else {
//         Connection.query(
//           `insert into saveOTP_getDATA (email, otp) values ('${aemail}' , '${otpGenerator}')`,
//           (err, result) => {
//             if (err) {
//               res.status(400).send("Error" + err);
//             } else {
//               res.send('Success')
//           }
//           }
//         );
//       }
//     });
//   } catch {
//     res.status(400).send({ msg: "Error while inserting OTPData into Db" });
//   }
// });

// app.post("/api/otpverifyforplacement",(req, res) => {
//   const aemail = req.body.aemail;
//   const otpfromuser = req.body.otpfromuser;

//   const verifyOTPQuery = "select * from saveOTP_getDATA where email=? and otp=?";

//   Connection.query(verifyOTPQuery, [aemail, otpfromuser], (err, rows) => {
//     if (err) {
//       res.status(400).send("error" + err);
//       return;
//     } else {
//       if (rows.length > 0) {
//         Connection.query(`insert into data_getDATA (email) values ('${aemail}')`,(error,response)=>{
//             if(error){
//                 res.status(404).send('There was an Error inserting data into DB')
//             }
//             else{
//               res.send('success') 
//             }
//         })
//         return;
//       } else {
//         res.status(403).send('Email or OTP Invalid!')
//       }
//     }
//   });
// });

// module.exports = app;