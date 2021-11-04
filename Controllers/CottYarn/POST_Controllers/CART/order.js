const express = require("express");
const Connection = require("../../../../GlobalDbConnections/CottyarnDbConnection");
const Router = express.Router();
const mailer = require("../../middlewares/Invoice_Mail");
const transporter = require("../../middlewares/mail");

Router.post("/api/cottyarn/order", (req, res) => {
  const aemail = req.body.aemail;
  const fullName = req.body.fullName;
  const Address = req.body.Address;
  const PIN = req.body.PIN;
  const Phone = req.body.Phone;
  const totalAmt = req.body.totalAmt;
  const selfMail = "cottyarn3@gmail.com";

  var uniq_Invoice = Math.floor(10000000000 + Math.random() * 90000000000);
  const current_Date = new Date().toISOString().slice(0, 10);

  Connection.query(
    "select * from addtocarttable where email=?",
    [aemail],
    (err, resp) => {
      if (err) {
      } else {
        Connection.query(
          `insert into valid_Orders (invoice_Id, curr_Date ,fullName, aemail, Phone, Address, PIN) values ('${uniq_Invoice}', '${current_Date}' ,'${fullName}', '${aemail}', '${Phone}', '${Address}', '${PIN}')`,
          (fail, success) => {
            if (fail) {
              res.status(404).send("Error");
            } else {
              Connection.query(
                "select COUNT(*) as total_prods from addtocarttable where email=?",
                [aemail],
                (er, count) => {
                  if (er) {
                    res.status(404).send("Error", er);
                  } else {
                    const options = {
                      action: "demo",
                      subject: "New Invoice from Cottyarn.com",
                      sendTo: [aemail, selfMail],
                      data: {
                        name: fullName,
                        email: aemail,
                        Address: Address,
                        count: count[0].total_prods,
                        PIN: PIN,
                        Phone: Phone,
                        invoice: uniq_Invoice,
                        current_Date: current_Date,
                        totalAmt: totalAmt,
                        items_List: resp,
                      },
                    };
                    mailer.send(options);
                    res.status(200).send({
                      success: true,
                      message: "Email sent successfully.",
                    });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

Router.post("/api/cottyarn/addaddress", (req, res) => {
  const aemail = req.body.aemail;
  const fullName = req.body.fullName;
  const Address = req.body.Address;
  const PIN = req.body.PIN;
  const Phone = req.body.Phone;
  const totalAmt = req.body.totalAmt;
  const selfMail = "cottyarn3@gmail.com";

  Connection.query(
    `insert into orderPersons (email, fullname, address, pin, phone, totalAmt) values ('${aemail}', '${fullName}', '${Address}', '${PIN}', '${Phone}', '${totalAmt}')`,
    (err, succ) => {
      if (err) {
        res.status(404).send("error");
      } else {
        var mailOptions = {
          from: "cottyarn3@gmail.com",
          to: ["potabattiram@gmail.com"],
          subject: "One new customer landed at last page -Cottyarn",
          html: `<h3>Customer details<br/> Email- ${aemail}, <br/>Name- ${fullName}<br/>Phone- ${Phone}<br/>Address- ${Address}<br/>PIN- ${PIN}<br/>Total Amout- ${totalAmt}</h3>`,
        };
        transporter.sendMail(mailOptions, function (failed, sent) {
          if (failed) {
            res.status(404).send("error");
          } else {
            res.status(200).send("Success! Sent Mail");
          }
        });
      }
    }
  );
});


Router.post('/api/cottyarn/getdetails',(req,res) => {
  const email = req.body.email;

  Connection.query('select * from orderPersons where email=?',[email],(err,resp) => {
    if(err){
      res.status(404).send('Error')
    }
    else{
      res.status(200).send(resp)
    }
  })
})
module.exports = Router;
