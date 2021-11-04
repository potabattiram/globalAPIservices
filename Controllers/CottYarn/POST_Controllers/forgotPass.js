const Connection = require("../../../GlobalDbConnections/CottyarnDbConnection");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const transporter = require("../middlewares/mail");

router.post("/api/forgotpass/sendotp", (req, res) => {
  const email = req.body.email;
  const otpGenerator = Math.floor(1000 + Math.random() * 9000);

  Connection.query(
    "select email from userdata where email=?",
    [email],
    (err, rows) => {
      if(err){
        res.status(404).send("error");
      }
      else {
        if (rows.length > 0) {
          var mailOptions = {
            from: "cottyarn3@gmail.com",
            to: [email],
            subject: "Verification OTP for CottYarn",
            html: `<h3>Enter the below One-Time-Password to verify your Email-Address <br/> <h2><strong>${otpGenerator}</strong></h2></h3>`,
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              res.status(400);
            } else {
              Connection.query(
                `insert into otpEmaildata (email, otp) values ('${email}' , '${otpGenerator}')`,
                (err, result) => {
                  if (err) {
                    res.status(400).send("Error" + err);
                  } else {
                    res.send({ msg: "success" });
                  }
                }
              );
            }
          });
        }
        else{
          res.status(403).send('Email does not exist!. Please try Signing Up!');         
        }
      } 
    }
  );
});

router.post("/api/forgotpass/verifyotp", (req, res) => {
  const { email, otpfromuser } = req.body;
  Connection.query(
    "select * from otpEmaildata where email=? and otp=?",
    [email, otpfromuser],
    (err, rows) => {
      if (err) {
        res.status(400).send("error" + err);
        return;
      } else {
        if (rows.length > 0) {
          res.send({ msg: "success" });
          return;
        } else {
          res.status(403).send("Email or OTP Invalid!");
        }
      }
    }
  );
});

router.put("/api/cottyarn/putpass", (req, res) => {
  const { email, pass } = req.body;

  Connection.query(
    "update userdata set pass=? where email=?",
    [pass,email],
    (err, rows) => {
      if (err){
        res.status(404).send("error");
      } else {
        jwt.sign({ email }, "secret_key", (err, token) => {
          if (err) {
            res.status(400).send({ msg: "Error" });
          } else {
            if (res) {
              res.status(200).send({ msg: "success", token: token });
            }
          }
        });
      }
    }
  );
});

module.exports = router;