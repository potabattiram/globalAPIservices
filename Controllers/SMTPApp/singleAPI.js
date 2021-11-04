const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/smtp/sendemailsforbasicplan',(req,res) => {

  const secured_mail = req.body.secured_mail;
  const secured_pass = req.body.secured_pass;

  const mailto1 = req.body.mailto1;
  const mailto2 = req.body.mailto2;
  const mailto3 = req.body.mailto3;
  const mailto4 = req.body.mailto4;

  const message = req.body.message;
  const subject = req.body.subject;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: `${secured_mail}`,
      pass: `${secured_pass}`,
    },
  });

  var mailOptions = {
    from: `${secured_mail}`,
    to: [
      mailto1 ? mailto1 : null,
      mailto2 ? mailto2 : null,
      mailto3 ? mailto3 : null,
      mailto4 ? mailto4 : null,
      mailto5 ? mailto5 : null,
      mailto6 ? mailto6 : null,
      mailto7 ? mailto7 : null,
      mailto8 ? mailto8 : null,
      mailto9 ? mailto9 : null,
      mailto10 ? mailto10 : null,
      mailto11 ? mailto11 : null,
      mailto12 ? mailto12 : null,
      mailto13 ? mailto13 : null,
      mailto14 ? mailto14 : null,
      mailto15 ? mailto15 : null,
      mailto16 ? mailto16 : null,
      mailto17 ? mailto17 : null,
      mailto18 ? mailto18 : null,
      mailto19 ? mailto19 : null,
      mailto20 ? mailto20 : null,
    ],
      subject: `${subject}`,
      html: `${message}`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(404).send("error" + err);
      } else {
        res.send("success");
      }
    });
  });
  
router.post("/smtp/sendemailsforproplan", (req, res) => {
  const secured_mail = req.body.secured_mail;
  const secured_pass = req.body.secured_pass;

  const mailto1 = req.body.mailto1;
  const mailto2 = req.body.mailto2;
  const mailto3 = req.body.mailto3;
  const mailto4 = req.body.mailto4;
  const mailto5 = req.body.mailto5;
  const mailto6 = req.body.mailto6;
  const mailto7 = req.body.mailto7;
  const mailto8 = req.body.mailto8;
  const mailto9 = req.body.mailto9;
  const mailto10 = req.body.mailto10;
  const mailto11 = req.body.mailto11;
  const mailto12 = req.body.mailto12;
  const mailto13 = req.body.mailto13;
  const mailto14 = req.body.mailto14;
  const mailto15 = req.body.mailto15;
  const mailto16 = req.body.mailto16;
  const mailto17 = req.body.mailto17;
  const mailto18 = req.body.mailto18;
  const mailto19 = req.body.mailto19;
  const mailto20 = req.body.mailto20;

  const mailto21 = req.body.mailto21;
  const mailto22 = req.body.mailto22;
  const mailto23 = req.body.mailto23;
  const mailto24 = req.body.mailto24;
  const mailto25 = req.body.mailto25;
  const mailto26 = req.body.mailto26;
  const mailto27 = req.body.mailto27;
  const mailto28 = req.body.mailto28;
  const mailto29 = req.body.mailto29;
  const mailto30 = req.body.mailto30;
  const mailto31 = req.body.mailto31;
  const mailto32 = req.body.mailto32;
  const mailto33 = req.body.mailto33;
  const mailto34 = req.body.mailto34;
  const mailto35 = req.body.mailto35;
  const mailto36 = req.body.mailto36;
  const mailto37 = req.body.mailto37;
  const mailto38 = req.body.mailto38;
  const mailto39 = req.body.mailto39;
  const mailto40 = req.body.mailto40;

  const mailto41 = req.body.mailto41;
  const mailto42 = req.body.mailto42;
  const mailto43 = req.body.mailto43;
  const mailto44 = req.body.mailto44;
  const mailto45 = req.body.mailto45;
  const mailto46 = req.body.mailto46;
  const mailto47 = req.body.mailto47;
  const mailto48 = req.body.mailto48;
  const mailto49 = req.body.mailto49;
  const mailto50 = req.body.mailto50;

  const message = req.body.message;
  const subject = req.body.subject;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: `${secured_mail}`,
      pass: `${secured_pass}`,
    },
  });

  var mailOptions = {
    from: `${secured_mail}`,
    to: [
      mailto1 ? mailto1 : null,
      mailto2 ? mailto2 : null,
      mailto3 ? mailto3 : null,
      mailto4 ? mailto4 : null,
      mailto5 ? mailto5 : null,
      mailto6 ? mailto6 : null,
      mailto7 ? mailto7 : null,
      mailto8 ? mailto8 : null,
      mailto9 ? mailto9 : null,
      mailto10 ? mailto10 : null,
      mailto11 ? mailto11 : null,
      mailto12 ? mailto12 : null,
      mailto13 ? mailto13 : null,
      mailto14 ? mailto14 : null,
      mailto15 ? mailto15 : null,
      mailto16 ? mailto16 : null,
      mailto17 ? mailto17 : null,
      mailto18 ? mailto18 : null,
      mailto19 ? mailto19 : null,
      mailto20 ? mailto20 : null,

      mailto21 ? mailto21 : null,
      mailto22 ? mailto22 : null,
      mailto23 ? mailto23 : null,
      mailto24 ? mailto24 : null,
      mailto25 ? mailto25 : null,
      mailto26 ? mailto26 : null,
      mailto27 ? mailto27 : null,
      mailto28 ? mailto28 : null,
      mailto29 ? mailto29 : null,
      mailto30 ? mailto30 : null,
      mailto31 ? mailto31 : null,
      mailto32 ? mailto32 : null,
      mailto33 ? mailto33 : null,
      mailto34 ? mailto34 : null,
      mailto35 ? mailto35 : null,
      mailto36 ? mailto36 : null,
      mailto37 ? mailto37 : null,
      mailto38 ? mailto38 : null,
      mailto39 ? mailto39 : null,
      mailto40 ? mailto40 : null,

      mailto41 ? mailto41 : null,
      mailto42 ? mailto42 : null,
      mailto43 ? mailto43 : null,
      mailto44 ? mailto44 : null,
      mailto45 ? mailto45 : null,
      mailto46 ? mailto46 : null,
      mailto47 ? mailto47 : null,
      mailto48 ? mailto48 : null,
      mailto49 ? mailto49 : null,
      mailto50 ? mailto50 : null,
    ],
    subject: `${subject}`,
    html: `${message}`,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.status(404).send("error" + err);
    } else {
      res.send("success");
    }
  });
});

router.post("/smtp/sendemailsforpremplan", (req, res) => {
  const secured_mail = req.body.secured_mail;
  const secured_pass = req.body.secured_pass;

  const mailto1 = req.body.mailto1;
  const mailto2 = req.body.mailto2;
  const mailto3 = req.body.mailto3;
  const mailto4 = req.body.mailto4;
  const mailto5 = req.body.mailto5;
  const mailto6 = req.body.mailto6;
  const mailto7 = req.body.mailto7;
  const mailto8 = req.body.mailto8;
  const mailto9 = req.body.mailto9;
  const mailto10 = req.body.mailto10;
  const mailto11 = req.body.mailto11;
  const mailto12 = req.body.mailto12;
  const mailto13 = req.body.mailto13;
  const mailto14 = req.body.mailto14;
  const mailto15 = req.body.mailto15;
  const mailto16 = req.body.mailto16;
  const mailto17 = req.body.mailto17;
  const mailto18 = req.body.mailto18;
  const mailto19 = req.body.mailto19;
  const mailto20 = req.body.mailto20;

  const mailto21 = req.body.mailto21;
  const mailto22 = req.body.mailto22;
  const mailto23 = req.body.mailto23;
  const mailto24 = req.body.mailto24;
  const mailto25 = req.body.mailto25;
  const mailto26 = req.body.mailto26;
  const mailto27 = req.body.mailto27;
  const mailto28 = req.body.mailto28;
  const mailto29 = req.body.mailto29;
  const mailto30 = req.body.mailto30;
  const mailto31 = req.body.mailto31;
  const mailto32 = req.body.mailto32;
  const mailto33 = req.body.mailto33;
  const mailto34 = req.body.mailto34;
  const mailto35 = req.body.mailto35;
  const mailto36 = req.body.mailto36;
  const mailto37 = req.body.mailto37;
  const mailto38 = req.body.mailto38;
  const mailto39 = req.body.mailto39;
  const mailto40 = req.body.mailto40;

  const mailto41 = req.body.mailto41;
  const mailto42 = req.body.mailto42;
  const mailto43 = req.body.mailto43;
  const mailto44 = req.body.mailto44;
  const mailto45 = req.body.mailto45;
  const mailto46 = req.body.mailto46;
  const mailto47 = req.body.mailto47;
  const mailto48 = req.body.mailto48;
  const mailto49 = req.body.mailto49;
  const mailto50 = req.body.mailto50;
  const mailto51 = req.body.mailto51;
  const mailto52 = req.body.mailto52;
  const mailto53 = req.body.mailto53;
  const mailto54 = req.body.mailto54;
  const mailto55 = req.body.mailto55;
  const mailto56 = req.body.mailto56;
  const mailto57 = req.body.mailto57;
  const mailto58 = req.body.mailto58;
  const mailto59 = req.body.mailto59;
  const mailto60 = req.body.mailto60;

  const mailto61 = req.body.mailto61;
  const mailto62 = req.body.mailto62;
  const mailto63 = req.body.mailto63;
  const mailto64 = req.body.mailto64;
  const mailto65 = req.body.mailto65;
  const mailto66 = req.body.mailto66;
  const mailto67 = req.body.mailto67;
  const mailto68 = req.body.mailto68;
  const mailto69 = req.body.mailto69;
  const mailto70 = req.body.mailto70;
  const mailto71 = req.body.mailto71;
  const mailto72 = req.body.mailto72;
  const mailto73 = req.body.mailto73;
  const mailto74 = req.body.mailto74;
  const mailto75 = req.body.mailto75;
  const mailto76 = req.body.mailto76;
  const mailto77 = req.body.mailto77;
  const mailto78 = req.body.mailto78;
  const mailto79 = req.body.mailto79;
  const mailto80 = req.body.mailto80;

  const mailto81 = req.body.mailto81;
  const mailto82 = req.body.mailto82;
  const mailto83 = req.body.mailto83;
  const mailto84 = req.body.mailto84;
  const mailto85 = req.body.mailto85;
  const mailto86 = req.body.mailto86;
  const mailto87 = req.body.mailto87;
  const mailto88 = req.body.mailto88;
  const mailto89 = req.body.mailto89;
  const mailto90 = req.body.mailto90;
  const mailto91 = req.body.mailto91;
  const mailto92 = req.body.mailto92;
  const mailto93 = req.body.mailto93;
  const mailto94 = req.body.mailto94;
  const mailto95 = req.body.mailto95;
  const mailto96 = req.body.mailto96;
  const mailto97 = req.body.mailto97;
  const mailto98 = req.body.mailto98;
  const mailto99 = req.body.mailto99;
  const mailto100 = req.body.mailto100;

  const message = req.body.message;
  const subject = req.body.subject;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: `${secured_mail}`,
      pass: `${secured_pass}`,
    },
  });

  var mailOptions = {
    from: `${secured_mail}`,
    to: [
      mailto1 ? mailto1 : null,
      mailto2 ? mailto2 : null,
      mailto3 ? mailto3 : null,
      mailto4 ? mailto4 : null,
      mailto5 ? mailto5 : null,
      mailto6 ? mailto6 : null,
      mailto7 ? mailto7 : null,
      mailto8 ? mailto8 : null,
      mailto9 ? mailto9 : null,
      mailto10 ? mailto10 : null,
      mailto11 ? mailto11 : null,
      mailto12 ? mailto12 : null,
      mailto13 ? mailto13 : null,
      mailto14 ? mailto14 : null,
      mailto15 ? mailto15 : null,
      mailto16 ? mailto16 : null,
      mailto17 ? mailto17 : null,
      mailto18 ? mailto18 : null,
      mailto19 ? mailto19 : null,
      mailto20 ? mailto20 : null,

      mailto21 ? mailto21 : null,
      mailto22 ? mailto22 : null,
      mailto23 ? mailto23 : null,
      mailto24 ? mailto24 : null,
      mailto25 ? mailto25 : null,
      mailto26 ? mailto26 : null,
      mailto27 ? mailto27 : null,
      mailto28 ? mailto28 : null,
      mailto29 ? mailto29 : null,
      mailto30 ? mailto30 : null,
      mailto31 ? mailto31 : null,
      mailto32 ? mailto32 : null,
      mailto33 ? mailto33 : null,
      mailto34 ? mailto34 : null,
      mailto35 ? mailto35 : null,
      mailto36 ? mailto36 : null,
      mailto37 ? mailto37 : null,
      mailto38 ? mailto38 : null,
      mailto39 ? mailto39 : null,
      mailto40 ? mailto40 : null,

      mailto41 ? mailto41 : null,
      mailto42 ? mailto42 : null,
      mailto43 ? mailto43 : null,
      mailto44 ? mailto44 : null,
      mailto45 ? mailto45 : null,
      mailto46 ? mailto46 : null,
      mailto47 ? mailto47 : null,
      mailto48 ? mailto48 : null,
      mailto49 ? mailto49 : null,
      mailto50 ? mailto50 : null,
      mailto51 ? mailto51 : null,
      mailto52 ? mailto52 : null,
      mailto53 ? mailto53 : null,
      mailto54 ? mailto54 : null,
      mailto55 ? mailto55 : null,
      mailto56 ? mailto56 : null,
      mailto57 ? mailto57 : null,
      mailto58 ? mailto58 : null,
      mailto59 ? mailto59 : null,
      mailto60 ? mailto60 : null,

      mailto61 ? mailto61 : null,
      mailto62 ? mailto62 : null,
      mailto63 ? mailto63 : null,
      mailto64 ? mailto64 : null,
      mailto65 ? mailto65 : null,
      mailto66 ? mailto66 : null,
      mailto67 ? mailto67 : null,
      mailto68 ? mailto68 : null,
      mailto69 ? mailto69 : null,
      mailto70 ? mailto70 : null,
      mailto71 ? mailto71 : null,
      mailto72 ? mailto72 : null,
      mailto73 ? mailto73 : null,
      mailto74 ? mailto74 : null,
      mailto75 ? mailto75 : null,
      mailto76 ? mailto76 : null,
      mailto77 ? mailto77 : null,
      mailto78 ? mailto78 : null,
      mailto79 ? mailto79 : null,
      mailto80 ? mailto80 : null,

      mailto81 ? mailto81 : null,
      mailto82 ? mailto82 : null,
      mailto83 ? mailto83 : null,
      mailto84 ? mailto84 : null,
      mailto85 ? mailto85 : null,
      mailto86 ? mailto86 : null,
      mailto87 ? mailto87 : null,
      mailto88 ? mailto88 : null,
      mailto89 ? mailto89 : null,
      mailto90 ? mailto90 : null,
      mailto91 ? mailto91 : null,
      mailto92 ? mailto92 : null,
      mailto93 ? mailto93 : null,
      mailto94 ? mailto94 : null,
      mailto95 ? mailto95 : null,
      mailto96 ? mailto96 : null,
      mailto97 ? mailto97 : null,
      mailto98 ? mailto98 : null,
      mailto99 ? mailto99 : null,
      mailto100 ? mailto100 : null,
    ],
    subject: `${subject}`,
    html: `${message}`,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.status(404).send("error" + err);
    } else {
      res.send("success");
    }
  });
});


module.exports = router;
