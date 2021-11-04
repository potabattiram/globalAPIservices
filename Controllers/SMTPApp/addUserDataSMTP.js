const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const transporter = require("./middleWares/transporter");
const PlasmaDBConnectionion = require('../../GlobalDbConnections/PlasmaDBConnection')

router.post("/smtp/otpsend", (req, res) => {
  const aemail = req.body.aemail;
  const otpGenerator = Math.floor(1000 + Math.random() * 9000);

  try {
    var mailOptions = {
      from: "cottyarn3@gmail.com",
      to: [aemail],
      subject: "Verification OTP for CottYarn",
      html: `<h3>Enter the below One-Time-Password to verify your Email-Address <br/> <h2><strong>${otpGenerator}</strong></h2></h3>`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(400);
      } else {
        PlasmaDBConnection.query(
          `insert into otpValidity (email, otp) values ('${aemail}' , '${otpGenerator}')`,
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
  } catch (e) {
    res.status(400).send({ msg: "Error while sending OTP", e });
  }
});

router.post("/smtp/otpverify", (req, res) => {
  const aemail = req.body.aemail;
  const otpfromuser = req.body.otpfromuser;

  const verifyOTPQuery = "select * from otpValidity where email=? and otp=?";

  PlasmaDBConnection.query(verifyOTPQuery, [aemail, otpfromuser], (err, rows) => {
    if (err) {
      res.status(400).send("error" + err);
      return;
    } else {
      if (rows.length > 0) {
        res.status(200).send(rows);
        return;
      } else {
        res.status(403).send("Email or OTP Invalid!");
      }
    }
  });
});

router.post("/smtp/signup", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const mobile = req.body.mobile;

  const checkaemail = "select email from otpValidity where email=?";
  PlasmaDBConnection.query(checkaemail, [email], (error, response) => {
    if (error) {
      res.status(400).send({ msg: "Error" });
    } else {
      if (response.length > 0) {
        PlasmaDBConnection.query(
          `insert into credentialsData (email,pass,mobile) values ('${email}' , '${pass}' , '${mobile}' )`,
          (err, rows) => {
            if (err) {
              res.status(400).send({ msg: "error", error: err });
              return false;
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
              // var mailOptions = {
              //   from: "cottyarn3@gmail.com",
              //   to: [email, "potabattiram@gmail.com"],
              //   subject: "A Warm welcome to CottYarn.com",
              //   template: "welcome",
              // };
              // transporter.sendMail(mailOptions, function (err, info) {
              //   if (err) {
              //     console.log(err);
              //   } else {
              //     console.log({ msg: "Successfully Mail sent!" });
              //   }
              // });
            }
          }
        );
      } else {
        res.send({ msg: "Email needs to be verified!" });
      }
    }
  });
});

router.post("/smtp/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  PlasmaDBConnection.query(
    "SELECT * FROM credentialsData WHERE email=? and pass=?",
    [email, pass],
    (error, results) => {
      if (!results) {
        res.send("Error");
      } else {
        if (results.length > 0) {
          jwt.sign({ results }, "secret_key", (err, token) => {
            if (err) {
              res.status(400).send({ msg: "Error" });
            } else {
              if (res) {
                res.status(200).send({ msg: "success", token: token });
              }
            }
          });
        } else {
          res.status(404).send("Invalid Email or Password");
        }
      }
    }
  );
});

module.exports = router;
