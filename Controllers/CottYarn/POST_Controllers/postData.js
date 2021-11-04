const Connection = require("../../../GlobalDbConnections/CottyarnDbConnection");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const transporter = require("../middlewares/mail");

router.post("/api/cottyarn/otpsender", (req, res) => {
  const aemail = req.body.aemail;
  const otpGenerator = Math.floor(1000 + Math.random() * 9000);

  Connection.query(
    "select * from userdata where email=?",
    [aemail],
    (erors, respos) => {
      if (erors) {
        res.status(404).send("Error");
      } else {
        if (respos.length > 0) {
          res.status(403).send("Account already created!");
        } else {
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
              Connection.query(
                `insert into otpEmaildata (email, otp) values ('${aemail}' , '${otpGenerator}')`,
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
      }
    }
  );
});

router.post("/api/cottyarn/otpverify", (req, res) => {
  const aemail = req.body.aemail;
  const otpfromuser = req.body.otpfromuser;

  const verifyOTPQuery = "select * from otpEmaildata where email=? and otp=?";

  Connection.query(verifyOTPQuery, [aemail, otpfromuser], (err, rows) => {
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

router.post("/api/cottyarn/signup", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  const mobile = req.body.mobile;

  const selfMail = 'cottyarn3@gmail.com';

  const checkaemail = "select * from otpEmaildata where email=?";

  Connection.query(checkaemail, [email], (err, rows) => {
    if (err) {
      res.status(401).send("error");
    } else {
      if (rows.length > 0) {
        Connection.query(
          "select * from userdata where email=?",
          [email],
          (error, emailAvail) => {
            if (error) {
              res.status(404).send("error");
            } else {
              if (emailAvail.length > 0) {
                res.status(403).send("Account already exists");
              } else {
                Connection.query(
                  `insert into userdata (email,pass,mobile) values ('${email}' , '${pass}' , '${mobile}' )`,
                  (errors, success_in_Insert) => {
                    if (errors) {
                      res.status(404).send("Insert Failed!");
                    } else {
                      jwt.sign({ email }, "secret_key", (err, token) => {
                        if (err) {
                          res.status(400).send({ msg: "Error" });
                        } else {
                          if (token) {
                            var mailOptions = {
                              from: "cottyarn3@gmail.com",
                              to: [email,selfMail],
                              subject: "A Warm welcome to Cottyarn Group",
                              template: "welcome",
                            };
                            transporter.sendMail(
                              mailOptions,
                              function (err, info) {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log({
                                    msg: "Successfully Mail sent!",
                                  });
                                }
                              }
                            );
                            res
                              .status(200)
                              .send({ msg: "success", token: token });
                          }
                        }
                      });
                    }
                  }
                );
              }
            }
          }
        );
      } else {
        res.status(403).send("Email needs to be verified!");
      }
    }
  });
});

router.post("/api/cottyarn/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;

  Connection.query(
    "SELECT * FROM userdata WHERE email=? and pass=?",
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
              if (token) {
                    console.log({ msg: "Successfully Mail sent!" });
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
