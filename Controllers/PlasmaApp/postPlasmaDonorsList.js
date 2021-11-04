const ConnectionforPlasma = require("../../GlobalDbConnections/PlasmaDBConnection");
const express = require("express");
const router = express.Router();

router.post("/api/addplasmadonors", (req, res) => {
  const {
    fullName,
    age,
    emailId,
    bloodGroup,
    contactNo,
    eligibility,
    availability,
  } = req.body;

  const query = `insert into plasmaDonorsList (fullname,age,emailId,bloodGroup,contactNo,eligibility,availability) values ('${fullName}','${age}', '${emailId}','${bloodGroup}','${contactNo}','${eligibility}','${availability}')`;

  ConnectionforPlasma.query(query, (err, rows) => {
    if (err) {
      res.status(404).send("error" + err);
    } else {
      res.status(200).send("success");
    }
  });
});

router.post("/api/plasma/getemail", (req, res) => {
  const emailId = req.body.emailId;

  const verificationQuery = "select * from plasmaDonorsList where emailId=?";
  ConnectionforPlasma.query(verificationQuery, [emailId], (error, rowws) => {
    if (error) {
      res.status(404).send("error");
    } else {
      if (rowws.length > 0) {
        ConnectionforPlasma.query(
          "select availability from plasmaDonorsList where emailId=?",
          [emailId],
          (err, rows) => {
            if (err) {
              res.status(404).send("error" + err);
            } else {
              res.send(rows);
            }
          }
        );
      } else {
        res.status(403).send("error");
      }
    }
  });
});
router.put("/api/plasma/updateavailibility", (req, res) => {
  const { availability, emailId } = req.body;

  const query = "update plasmaDonorsList set availability=? where emailId=?";
  ConnectionforPlasma.query(query, [availability, emailId], (err, rows) => {
    if (err) {
      res.status(404).send("error" + err);
    } else {
      res.send("success");
    }
  });
});

module.exports = router;
