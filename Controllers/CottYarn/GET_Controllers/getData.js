const express = require('express');
const router = express.Router();
const Connection = require("../../../GlobalDbConnections/CottyarnDbConnection");

router.get("/api/towels", (req, res) => {
  var querytofetchData = "select * from Towels_Data";
  Connection.query(querytofetchData, (err, rows) => {
    if (err) {
      res.status(400).send("Bad Request" + err);
    } else {
      res.send(rows);
    }
  });
});

router.get("/api/home/towels", (req, res) => {
  Connection.query(
    "select * from Towels_Data LIMIT 4;",
    (err, rows) => {
      if (err) {
        res.status(400).send("Bad Request" + err);
      } else {
        res.send(rows);
      }
    }
  );
});

router.get("/api/towels/:id", (req, res) => {
  Connection.query(
    "select * from Towels_Data where id=?",
    [req.params.id],
    (err, rows) => {
      if (err) {
        res.status(400).send("Bad Request" + err);
      } else {
        res.send(rows);
      }
    }
  );
});


router.post("/api/cottyrn/brands", (req, res) => {
  const brand_name = req.body.brand_name;
  Connection.query(
    'select * from Towels_Data where brand_name=?',
    [brand_name],
    (err, rows) => {
      if (err) {
        res.status(400).send("Bad Request" + err);
      } else {
        res.status(200).send(rows);
      }
    }
  );
});






module.exports=router;













// router.get('/api/100cotton/towels' , (req,res) => {
//   Connection.query(
//     `select * from Towels_Data where tow_name like '% 100% %'` , (err,rows) => {
//       if(err)
//       {
//         res.status(400).send('Bad Request' + err);
//       }
//       else
//       {
//         res.send(rows);
//       }
//     } 
//   )
// })

// select * from Towels_Data where tow_name like '% fine %';

// select * from Towels_Data where tow_name like '% Pure%';