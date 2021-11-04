const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const transporter = require("./middleWares/transporter");
const PlasmaDBConnectionion = require('../../GlobalDbConnections/PlasmaDBConnection')


router.post("/smtp/forgotpass/sendotp", (req, res) => {
  const email = req.body.email;
  const otpGenerator = Math.floor(1000 + Math.random() * 9000);

  PlasmaDBConnectionion.query(
    "select email from credentialsData where email=?",
    [email],
    (err, rows) => {
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
              PlasmaDBConnectionion.query(
                `insert into otpValidity (email, otp) values ('${email}' , '${otpGenerator}')`,
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
      } else {
        res.status(403).send("Email does not exist!. Please try logging in!");
      }
    }
  );
});

router.post("/smtp/forgotpass/verifyotp", (req, res) => {
  const { email, otpfromuser } = req.body;
  PlasmaDBConnectionion.query(
    "select * from otpValidity where email=? and otp=?",
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

router.put("/smtp/putpass", (req, res) => {
  const { email, pass } = req.body;

  PlasmaDBConnectionion.query(
    "update credentialsData set pass=? where email=?",
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